import * as yup from "yup";
import { IBooking } from "../entities/IBookins";
import { TypedRequest } from "../utils/typedRequest";

export const bookingSchemaValidate = yup.object<IBooking>({
  checkinDate: yup.number().required(),
  checkoutDate: yup.number().required(),
  gests: yup.number().required(),
  idOfRoom: yup.string().required(),
  idOfGuest: yup.string().required(),
  status: yup
    .string()
    .oneOf(["confirmed", "canceled", "in progress", "completed"])
    .required(),
});

export namespace CreateBooking {
  export type BodyType = TypedRequest<typeof bookingSchemaValidate>;
  export const schema = yup.object().shape({ body: bookingSchemaValidate });
}
