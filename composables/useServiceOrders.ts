import { ref } from 'vue'
import type { ServiceOrder } from '~/types/ServiceOrder'

export const useServiceOrders = () => {
  const serviceOrders = ref<ServiceOrder[]>([
    {
      id: 1,
      number: 123456,
      type: "garantía",
      part_number: "ab123",
      serial_number: "6303934",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui expedita temporibus ipsum, incidunt hic doloremque a voluptas magnam perferendis architecto harum, obcaecati adipisci ea recusandae. Veniam eveniet a quidem sequi?",
      solution: "lorem ipsum",
      company: { name: "Tech Solutions S.A.S", headquarters: "Bogota" },
      contacts: { name: "Angie", last_name: "Gonzales", gender: "Femenino", active: true, identification: 1101532654, charge: "admin", birthday: "09/12/2005" },
      mails: { mail: "angie123@gmail.com" },
      phones: { phone: 31356245120 },
      addresses: { address: "Crr 5 #23-67" },
      cities: { city: "Bogota" },
      equipment_types: { name: "Lenovo" },
      delivery_conditions: { description: "descripcion" }
    },
    {
      id: 2,
      number: 123457,
      type: "reparación",
      part_number: "cd456",
      serial_number: "7304945",
      description: "pantalla rota",
      solution: "cambio de pantalla",
      company: { name: "Digital Corp", headquarters: "Medellin" },
      contacts: { name: "Carlos", last_name: "Ramirez", gender: "Masculino", active: true, identification: 1101532655, charge: "técnico", birthday: "01/05/1990" },
      mails: { mail: "carlos.ramirez@digital.com" },
      phones: { phone: 3001234567 },
      addresses: { address: "Av 10 #45-89" },
      cities: { city: "Medellin" },
      equipment_types: { name: "HP" },
      delivery_conditions: { description: "con funda protectora" }
    },
    {
      id: 3,
      number: 123458,
      type: "mantenimiento",
      part_number: "ef789",
      serial_number: "8305956",
      description: "mantenimiento general",
      solution: "limpieza interna",
      company: { name: "ElectroTech", headquarters: "Cali" },
      contacts: { name: "Laura", last_name: "Soto", gender: "Femenino", active: true, identification: 1101532656, charge: "soporte", birthday: "20/03/1985" },
      mails: { mail: "laura.soto@electrotech.co" },
      phones: { phone: 3012345678 },
      addresses: { address: "Cll 33 #22-11" },
      cities: { city: "Cali" },
      equipment_types: { name: "Dell" },
      delivery_conditions: { description: "sin cargador" }
    }
  ])

  const selectedOrder = ref<ServiceOrder>(getEmptyOrder())

  function openModal(isNew: boolean, orderObject: any = null) {
    selectedOrder.value = isNew ? getEmptyOrder() : orderObject
  }

  function getEmptyOrder(): ServiceOrder {
    return {
      id: 0,
      number: 0,
      type: '',
      part_number: '',
      serial_number: '',
      description: '',
      solution: '',
      company: { name: '', headquarters: '' },
      contacts: { name: '', last_name: '', gender: '', active: true, identification: 0, charge: '', birthday: '' },
      mails: { mail: '' },
      phones: { phone: 0 },
      addresses: { address: '' },
      cities: { city: '' },
      equipment_types: { name: '' },
      delivery_conditions: { description: '' }
    }
  }

  return {
    serviceOrders,
    selectedOrder,
    openModal
  }
}
