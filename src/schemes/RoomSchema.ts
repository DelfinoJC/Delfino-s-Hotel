import * as yup from "yup";
import { TypedRequest } from "../utils/typedRequest";
import { IRoom } from "../entities/IRoom";

export const roomSchemaValidate = yup.object<IRoom>({
  numberOfRoom: yup.string().required(),
  type: yup.string().oneOf(["individual", "double", "suite"]).required(),
  guestCapacity: yup.string().required(),
  dailyRate: yup.string().required(),
  photo: yup.string(),
  status: yup
    .string()
    .oneOf(["available", "busy", "under maintenance"])
});

export namespace CreateRoom {
  export type BodyType = TypedRequest<typeof roomSchemaValidate>;
  export const schema = yup.object().shape({ body: roomSchemaValidate });
}

export const roomSchemaId = yup.object({
  id: yup.string().required()
})

export const roomSchemaStatusUpdate = yup.object({
  status: yup.string().required()
})

export namespace UpdateStatusOfRoom {
  export type ParamsType = TypedRequest<typeof roomSchemaId>
  export type BodyType = TypedRequest<typeof roomSchemaStatusUpdate>
  export const schema = yup.object().shape({
    params: roomSchemaId,
    body: roomSchemaStatusUpdate
  })
}
