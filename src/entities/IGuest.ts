import { IBooking } from "./IBookins"

export interface IGuest {
    name: string,
    CPF: number,
    phoneNumber: number,
    email: string,
    password: string,
    bookings: Array<IBooking>
}

export interface IGuestDTO {
    name: string,
    CPF: number,
    phoneNumber: number,
    email: string,
    password: string
}

export interface IGuestLogin {
    email: string,
    password: string
}