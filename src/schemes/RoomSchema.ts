import * as yup from "yup";
import { TypedRequest } from "../utils/typedRequest";
import { IRoom } from "../entities/IRoom";

export const roomSchemaValidate = yup.object<IRoom>({
  numberOfRoom: yup.number().required(),
  type: yup.string().oneOf(["individual", "double", "suite"]).required(),
  guestCapacity: yup.number().required(),
  dailyRate: yup.number().required(),
  photo: yup.string(),
  status: yup
    .string()
    .oneOf(["available", "busy", "under maintenance"])
    .required(),
});

export namespace CreateRoom {
  export type BodyType = TypedRequest<typeof roomSchemaValidate>;
  export const schema = yup.object().shape({ body: roomSchemaValidate });
}
