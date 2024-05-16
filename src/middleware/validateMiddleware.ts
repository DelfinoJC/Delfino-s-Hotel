import * as yup from "yup";
import { type NextFunction, type Request, type Response } from "express";

export default (schema: any) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      console.log(`REQUEST BODY: ${JSON.stringify(req.body, null, 2)}`)
      console.log(`REQUEST file: ${JSON.stringify(req.file, null, 2)}`)
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
          file: req.file
        },
        { strict: true, abortEarly: false }
      );
      console.log(`REQUEST: ${schema}`);

      next();
    } catch (error) {
      const { name, message, errors } = error as yup.ValidationError;
      res.status(406).send({ name, message, errors });
    }
  };
