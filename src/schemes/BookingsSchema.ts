import * as yup from 'yup'
import { IBooking } from '../entities/IBookings'
import { TypedRequest } from '../utils/typedRequest'

export const bookingSchemaValidate = yup.object<IBooking>({
  checkInDate: yup.string().required(),
  checkOutDate: yup.string().required(),
  guests: yup.number().required(),
  idOfRoom: yup.string().required(),
  idOfGuest: yup.string().required(),
  status: yup.string(),
})

export namespace CreateBooking {
  export type BodyType = TypedRequest<typeof bookingSchemaValidate>
  export const schema = yup.object().shape({ body: bookingSchemaValidate })
}

export const bookingSchemaIdValidate = yup.object({
  id: yup.string().required(),
})

export namespace UpdateStatusOfBooking {
  export type ParamsType = TypedRequest<typeof bookingSchemaIdValidate>
  export const schema = yup.object().shape({
    params: bookingSchemaIdValidate,
  })
}
