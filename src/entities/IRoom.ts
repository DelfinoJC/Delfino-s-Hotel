export interface IRoom {
    numberOfRoom: number,
    type: "individual" | "double" | "suite",
    guestCapacity: number,
    dailyRate: number,
    photo: string,
    status: "available" | "busy" | "under maintenance"
}