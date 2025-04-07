<template>
    <div class="container-fluid">
        <div class="row w-100 p-2 mt-4">
            <div class="col-3">
                <label for="client" class="form-label">Cliente:</label>
                <input type="text" id="client" class="form-control">
            </div>
            <div class="col-3">
                <label for="date" class="form-label">Desde:</label>
                <input type="date" id="date" placeholder="DD-MM-YYYY" class="form-control">
            </div>
            <div class="col-3">
                <label for="date2" class="form-label">Hasta:</label>
                <input type="date" id="date2" inputmode="none" placeholder="DD-MM-YYYY" class="form-control">
            </div>
            <div class="col-2">
                <label for="number" class="form-label">Numero orden:</label>
                <input type="text" id="number" class="form-control">
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-end pe-5">
                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#orderServiceModal" @click="openModal(true)">Nuevo
                    <font-awesome-icon :icon="['fas', 'clipboard-list']" style="color: #ffffff;" />
                </button>
                <div class="modal fade" id="orderServiceModal" tabindex="-1" aria-labelledby="ordenServicioModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="ordenServicioModalLabel">Crear Orden de Servicio</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                            </div>

                            <div class="modal-body">
                                <div class="d-flex justify-content-center align-items-center">
                                    <div class="row">
                                        <div class="col-8">
                                            <img src="../public/haslogo.png" alt="" class="w-50">
                                        </div>
                                        <div class="col-4 d-flex m-auto">
                                            <h3 class="order ms-5">N° ORDEN</h3>
                                            <input type="text" class="input form-control w-25 ms-2" v-model="selectedOrder.number">
                                        </div>

                                        <div class="col-12 form-floating mt-5 mb-2">
                                            <input type="text"  id="company" class="form-control w-100" placeholder="" v-model="selectedOrder.company.name">
                                            <label for="company" class="form-label fw-bold ms-2">EMPRESA</label>
                                        </div>
                                        <div class="col-12 form-floating mb-2">
                                            <input type="text" id="sede" class="form-control" placeholder="" v-model="selectedOrder.company.headquarters">
                                            <label for="sede" class="form-label fw-bold ms-2">SEDE</label>
                                        </div>
                                        <div class="col-6 form-floating mb-2">
                                            <input type="text" id="address" class="form-control w-100" placeholder="" v-model="selectedOrder.addresses.address">
                                            <label for="address" class="form-label fw-bold ms-2">DIRECCION</label>
                                        </div>
                                        <div class="col-6 form-floating mb-2">
                                            <input type="text" id="city" class="form-control w-100" placeholder="" v-model="selectedOrder.cities.city">
                                            <label for="city" class="form-label fw-bold ms-2">CIUDAD</label>
                                        </div>
                                        <div class="col-6 form-floating mb-2">
                                            <input type="text" id="contact" class="form-control" placeholder="" v-model="selectedOrder.contacts.name">
                                            <label for="contact" class="form-label fw-bold ms-2">CONTACTO</label>
                                        </div>
                                        <div class="col-6 form-floating mb-2">
                                            <input type="text" id="cc" class="form-control" placeholder="" v-model="selectedOrder.contacts.identification">
                                            <label for="cc" class="form-label fw-bold ms-2">C.C</label>
                                        </div>
                                        <div class="col-3 form-floating mb-2">
                                            <input type="text" id="cel" class="form-control" placeholder="" v-model="selectedOrder.phones.phone">
                                            <label for="cel" class="form-label fw-bold ms-2">TELEFONO</label>
                                        </div>
                                        <div class="col-3 form-floating mb-2">
                                            <input type="text" id="cell" class="form-control" placeholder="" v-model="selectedOrder.phones.phone">
                                            <label for="cell" class="form-label fw-bold ms-2">CELULAR</label>
                                        </div>
                                        <div class="col-6 form-floating">
                                            <input type="email" id="email" class="form-control" placeholder="" v-model="selectedOrder.mails.mail">
                                            <label for="email" class="form-label fw-bold ms-2">MAIL</label>
                                        </div>

                                        <div class="mt-5 mb-1">
                                            <h2 class="text-center">Información del servicio</h2>
                                        </div>
                                        <table class="table table-bordered text-start">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" colspan="2">TIPO DE SERVICIO</th>
                                                    <th class="text-center">N° PARTE</th>
                                                    <th class="text-center">NOMBRE DEL EQUIPO</th>
                                                    <th class="text-center">N° SERIE</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2" class="w-50">
                                                        <textarea class=" text form-control text-center" rows="3" v-model="selectedOrder.type"></textarea>
                                                    </td>
                                                    <td>
                                                        <textarea class=" text form-control text-center" rows="3" v-model="selectedOrder.part_number"></textarea>
                                                    </td>
                                                    <td>
                                                        <textarea class=" text form-control text-center" rows="3" v-model="selectedOrder.equipment_types.name"></textarea>
                                                    </td>
                                                    <td>
                                                        <textarea class=" text form-control text-center" rows="3" v-model="selectedOrder.serial_number"></textarea>
                                                    </td>
                                                </tr>
                                            </tbody>
                                    </table>
                                    <table class="table table-bordered text-start mt-3">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" colspan="2">DESCRIPCION DEL ESTADO EN EL QUE SE RECIBE</th>
                                                    <th class="text-center">Fecha y Responsable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2" class="w-75">
                                                        <textarea class=" text form-control text-center" rows="7" v-model="selectedOrder.description"></textarea>
                                                    </td>
                                                    <td>
                                                        <input type="date" class="form-control mb-2">
                                                        <input type="text" class="form-control input-large text-center">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="table table-bordered text-start mt-3">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" colspan="2">SOLUCIÓN</th>
                                                    <th class="text-center">Fecha y Responsable</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2" class="w-75">
                                                        <textarea class=" text form-control text-center" rows="7" v-model="selectedOrder.solution"></textarea>
                                                    </td>
                                                    <td>
                                                        <input type="date" class="form-control mb-2">
                                                        <input type="text" class="form-control input-large text-center">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="mt-5 mb-1">
                                            <h2 class="text-center">Entrega</h2>
                                        </div>
                                        <table class="table table-bordered text-start">
                                            <thead>
                                                <tr>
                                                    <th class="text-center" colspan="2">RECOMENDACIONES</th>
                                                    <th class="text-center">Firma y Fecha</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="2" class="w-75">
                                                        <textarea class=" text form-control text-center" rows="7" v-model="selectedOrder.delivery_conditions.description"></textarea>
                                                    </td>
                                                    <td>
                                                        <input type="date" class="form-control mb-2">
                                                        <input type="text" class="form-control input-large text-center">
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-success">Guardar</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="d-flex justify-content-center">
            <table class="tableOrder table mt-4 table-striped">
                <thead>
                    <tr>
                        <th class="bg-danger text-white">N° ORDEN</th>
                        <th class="bg-danger text-white">EMPRESA</th>
                        <th class="bg-danger text-white">TIPO DE SERVICIO</th>
                        <th class="bg-danger text-white">OPCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in serviceOrders" :key="order.number">
                        <td>{{ order.number }}</td>
                        <td>{{ order.company.name }}</td>
                        <td>{{ order.type }}</td>
                        <td>
                            <div class="btn-group dropstart" role="group">
                                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="../public/gear-solid.svg" alt="" style="width: 16px; height: 16px; margin-right: 5px; color: white;">
                                </button>
                                    <ul class="dropdown-menu">
                                        <li class="border-bottom">
                                            <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#orderServiceModal" @click="openModal(false, order)">
                                                <img src="../public/pencil-solid.svg" alt="" style="width: 16px; height: 16px; margin-right: 5px;">
                                                Editar
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <img src="../public/circle-info-solid.svg" alt="" style="width: 16px; height: 16px; margin-right: 5px;">
                                                Detalles
                                            </a>
                                        </li>
                                    </ul>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
// import orderServiceModal from '~/components/orderServiceModal.vue';

import { ref } from 'vue'

const serviceOrders = ref([
  {
    id: 1,
    number: "123456",
    type: "garantía",
    part_number: "ab123",
    serial_number: "6303934",
    description: "lorem ipsum",
    solution: "lorem ipsum",
    company: {
      name: "Tech Solutions S.A.S",
      headquarters: "Bogota"
    },
    contacts: {
      name: "Angie",
      last_name: "Gonzales",
      gender: "Femenino",
      active: true,
      identification: "1101532654",
      charge: "admin",
      birthday: "09/12/2005"
    },
    mails: {
      mail: "angie123@gmail.com"
    },
    phones: {
      phone: "31356245120"
    },
    addresses: {
      address: "Crr 5 #23-67"
    },
    cities: {
      city: "Bogota"
    },
    equipment_types: {
      name: "Lenovo"
    },
    delivery_conditions: {
      description: "descripcion"
    }
  },
  {
    id: 2,
    number: "123457",
    type: "reparación",
    part_number: "cd456",
    serial_number: "7304945",
    description: "pantalla rota",
    solution: "cambio de pantalla",
    company: {
      name: "Digital Corp",
      headquarters: "Medellin"
    },
    contacts: {
      name: "Carlos",
      last_name: "Ramirez",
      gender: "Masculino",
      active: true,
      identification: "1101532655",
      charge: "técnico",
      birthday: "01/05/1990"
    },
    mails: {
      mail: "carlos.ramirez@digital.com"
    },
    phones: {
      phone: "3001234567"
    },
    addresses: {
      address: "Av 10 #45-89"
    },
    cities: {
      city: "Medellin"
    },
    equipment_types: {
      name: "HP"
    },
    delivery_conditions: {
      description: "con funda protectora"
    }
  },
  {
    id: 3,
    number: "123458",
    type: "mantenimiento",
    part_number: "ef789",
    serial_number: "8305956",
    description: "mantenimiento general",
    solution: "limpieza interna",
    company: {
      name: "ElectroTech",
      headquarters: "Cali"
    },
    contacts: {
      name: "Laura",
      last_name: "Soto",
      gender: "Femenino",
      active: true,
      identification: "1101532656",
      charge: "soporte",
      birthday: "20/03/1985"
    },
    mails: {
      mail: "laura.soto@electrotech.co"
    },
    phones: {
      phone: "3012345678"
    },
    addresses: {
      address: "Cll 33 #22-11"
    },
    cities: {
      city: "Cali"
    },
    equipment_types: {
      name: "Dell"
    },
    delivery_conditions: {
      description: "sin cargador"
    }
  },
  
]);

const selectedOrder = ref(getEmptyOrder())

function openModal(isNew, orderObject = null){
    if (isNew) {
        selectedOrder.value = getEmptyOrder()
    } else {
        selectedOrder.value = orderObject
    }
}

function getEmptyOrder() {
  return {
    number: '',
    type: '',
    part_number: '',
    serial_number: '',
    description: '',
    solution: '',
    company: {
      name: '',
      headquarters: '',
    },
    contacts: {
      name: '',
      last_name: '',
      gender: '',
      active: true,
      identification: '',
      charge: '',
      birthday: '',
    },
    mails: {
        mail: ''
    },
    phones: {
        phone: ''
    },
    addresses: {
        address: ''
    },
    cities: {
        city: ''
    },
    equipment_types: {
        name: ''
    },
    delivery_conditions: {
        description: ''
    }
  }
}
</script>

<style scoped>
</style>