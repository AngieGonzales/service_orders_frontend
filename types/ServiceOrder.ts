export interface Company {
    name: string,
    headquarters: string
}
export interface Contact {
    name: string,
    last_name: string,
    gender: string,
    active: boolean,
    identification: number,
    charge: string,
    birthday: string
}
export interface Email {
    mail: string
}
export interface Phone {
    phone: number
}
export interface Address {
    address: string
}
export interface City {
    city: string
}
export interface EquipmentType {
    name: string
}
export interface DeliveryConditions {
    description: string
}
export interface ServiceOrder {
    id: number,
    number: number,
    type: string,
    part_number: string,
    serial_number: string,
    description: string,
    solution: string,
    company: Company,
    contacts: Contact,
    mails: Email,
    phones: Phone,
    addresses: Address,
    cities: City,
    equipment_types: EquipmentType,
    delivery_conditions: DeliveryConditions
}