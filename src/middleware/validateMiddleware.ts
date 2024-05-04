import * as yup from 'yup'
import { type NextFunction, type Request, type Response } from 'express'

export default (schema: any) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { strict: true, abortEarly: false }
      )
      console.log(schema)

      next()
    } catch (error) {
      const { name, message, errors } = error as yup.ValidationError
      res.status(406).send({ name, message, errors })
    }
  }
