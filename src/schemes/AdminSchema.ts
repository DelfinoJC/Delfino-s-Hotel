import * as yup from "yup";
import { IAdm } from "../entities/IAdm";
import { TypedRequest } from "../utils/typedRequest";

export const admSchemaValidateLogger = yup.object<IAdm>({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export namespace AdmLogger {
  export type BodyType = TypedRequest<typeof admSchemaValidateLogger>;
  export const schema = yup.object().shape({ body: admSchemaValidateLogger });
}
