import * as yup from "yup";
import { TypedRequest } from "../utils/typedRequest";
import { IGuestDTO, IGuestLogin } from "../entities/IGuest";

export const guestSchemaValidate = yup.object<IGuestDTO>({
  name: yup.string().required("Name required"),
  CPF: yup.number().required("CPF required"),
  phoneNumber: yup.number(),
  email: yup.string().email("Email invalidate").required("Email is required"),
  password: yup.string().required().min(8, "Password required"),
});

export namespace CreateGuest {
  export type BodyType = TypedRequest<typeof guestSchemaValidate>;
  export const schema = yup.object().shape({ body: guestSchemaValidate });
}

export const guestSchemaValidateLogger = yup.object<IGuestLogin>({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export namespace LoggerGuest {
  export type BodyType = TypedRequest<typeof guestSchemaValidateLogger>;
  export const schema = yup.object().shape({ body: guestSchemaValidateLogger });
}
