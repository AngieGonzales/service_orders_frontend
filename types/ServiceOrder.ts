export interface Company {
    id: number,
    name: string,
    headquarters: string
}
export interface Contact {
    id: number, 
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
    id: number, 
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
    company_id: number,
    delivery_conditions: DeliveryConditions
    equipment_name: string,
    contacts: Contact[],
    mails: Email[],
    phones: Phone[],
    addresses: Address[],
    cities: City[],
    responsible:Contact
}