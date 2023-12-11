export interface BookingDetails {
    checkInDate:string,
    checkOutDate:string,
    room:string,
    guestName:string,
    email:string,
    phone:string,
    notes:string
    
    nights:number,
    checkInTime:string,
    checkoutTime:string,
    
    roomType:string,
    adults:number,
    children:number,
    roomCost:number,
    subTotal:number,
    total:number
}