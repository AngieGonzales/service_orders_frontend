<template>
    <div>
        <Modal @close="$emit('exit')" size="xl" :closeModalGlobal='closeModal' btnCancelText="Salir">
            <template v-slot:header>{{ modalTitle }}</template>

            <template v-slot:body>
                <div>
                    <div class="row">
                        <div class="mb-3 col-1">
                            <label for="number" class="font form-label fw-bold">N° orden:</label>
                            <input type="email" id="number" class="form-control" v-model="selectedOrder.number"
                                disabled>
                        </div>

                        <div class="mb-3 col-6">
                            <label for="company" class="font form-label fw-bold">Empresa:</label>
                            <div class="input-group">
                                <select id="company" class="form-select" @change="setAddresses($event.target.value)">
                                    <option :value="company.id" v-for="company in companies">{{ company.name }}
                                    </option>
                                </select>
                                <button class="btn" style="background-color: #ec474f;">
                                    <img src="../../public/plus-solid.svg" alt="" style="width: 20px; height: 20px;">
                                </button>
                            </div>
                        </div>
                        <div class="col-3 mb-3">
                            <label for="address" class="font form-label fw-bold">Dirección:</label>
                        
                            <select id="company" class="form-select">
                                <option :value="selectedOrder?.addresses" v-for="address in companyAddresses">{{ address.address }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3 col-3">
                            <label for="company" class="font form-label fw-bold">Contacto:</label>
                            <div class="input-group" style="height: 7px;">
                                <select id="company" class="form-select">
                                </select>
                                <button class="btn" style="background-color: #ec474f;">
                                    <img src="../../public/plus-solid.svg" alt="" style="width: 20px; height: 20px;">
                                </button>
                            </div>
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cc" class="font form-label fw-bold">C.C</label>
                            <input type="text" id="cc" class="form-control" v-model="selectedOrder.contacts" disabled />
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cel" class="font form-label fw-bold">Teléfono:</label>
                            <input type="text" id="cel" class="form-control" v-model="selectedOrder.phones" disabled />
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cell" class="font form-label fw-bold">Celular:</label>
                            <input type="text" id="cell" class="form-control" v-model="selectedOrder.phones" disabled />
                        </div>

                        <div class="col-4 mb-3">
                            <label for="email" class="font form-label fw-bold">Email:</label>
                            <input type="email" id="email" class="form-control" v-model="selectedOrder.mails"
                                disabled />
                        </div>
                        <div class="mt-5 mb-3 text-center">
                            <label class="form-label fw-bold">Información del servicio</label>
                        </div>
                        <div class="mb-3 col-4 ">
                            <label for="company" class="font form-label fw-bold">Tipo servicio:</label>
                            <select id="company" class="form-select">
                                <option :value="company.id" v-for="company in companies">{{ company.company }}</option>
                            </select>
                        </div>
                        <div class="mb-3 col-2">
                            <label for="company" class="font form-label fw-bold">N° parte:</label>
                            <div class="input-group" style="height: 7px;">
                                <select id="company" class="form-select">
                                </select>
                            </div>
                        </div>
                        <div class="col-4 mb-3">
                            <label for="contact" class="font form-label fw-bold">Nombre equipo:</label>
                            <div class="input-group" style="height: 7px;">
                                <select id="company" class="form-select">
                                </select>
                            </div>
                        </div>
                        <div class="col-2 mb-3">
                            <label for="serialNumber" class="font form-label fw-bold">Número de serie:</label>
                            <div class="input-group" style="height: 7px;">
                                <select id="company" class="form-select">
                                </select>
                            </div>
                        </div>

                        <div class="col-9 mb-3">
                            <label for="floatingTextarea" class="font form-label fw-bold">Descripción:</label>
                            <textarea class="form-control"
                                placeholder="Ingrese aqui la descripción del estado en el que se recibe el equipo"
                                rows="5" id="floatingTextarea" v-model="selectedOrder.description"></textarea>
                        </div>

                        <div class="col-3 mb-3">
                            <label for="responsable" class="font form-label fw-bold">Responsable:</label>

                            <select id="responsable" class="form-select" aria-label="Default select example">
                                <option :value="responsable.id" v-for="responsable in responsables">
                                    {{ responsable.name }}
                                </option>
                            </select>
                        </div>

                        <div v-if="showSolution" class="row">
                            <div class="col-9 mb-3">
                                <label for="solution" class="font form-label fw-bold">Solución:</label>
                                <textarea class="form-control" rows="5" id="solution"
                                    v-model="selectedOrder.solution"></textarea>
                            </div>
                            <div class="col-3 mb-3">
                                <label for="responsable2" class="font form-label fw-bold">Responsable:</label>
                                <select id="responsable" class="form-select" aria-label="Default select example">
                                    <option :value="responsable.id" v-for="responsable in responsables">
                                        {{ responsable.name }}
                                    </option>
                                </select>
                            </div>
                            <div class="mt-5 mb-1">
                                <label class="form-label fw-bold">Entrega</label>
                                <hr>
                            </div>
                            <div class="col-9 mb-3">
                                <label for="solution" class="font form-label fw-bold">Recomendaciones:</label>
                                <textarea class="form-control" rows="5" id="solution"
                                    v-model="selectedOrder.delivery_conditions.description"></textarea>
                            </div>
                            <div class="col-3 mb-3">
                                <label for="responsable2" class="font form-label fw-bold">Responsable:</label>
                                <select id="responsable" class="form-select" aria-label="Default select example">
                                    <option :value="responsable.id" v-for="responsable in responsables">
                                        {{ responsable.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12">
                            <input type="file" class="form-control">
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-success" @click="storeServiceOrder()">{{ actionButtonText
                    }}</button>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed, onMounted } from 'vue';
import type { ServiceOrder } from '~/types/ServiceOrder';

const closeModal = ref(false)
const Modal = defineAsyncComponent(() => import('~/components/Modal.vue'))

const props = defineProps<({
    order?: ServiceOrder
})>()

const actionButtonText = computed(() => {
    return props.order && props.order.id !== 0 ? 'Actualizar' : 'Guardar';
});

const modalTitle = computed(() => {
    return props.order && props.order.id !== 0 ? 'Editar orden de servicio:' : 'Crear orden de servicio:';
});

const selectedOrder = ref<ServiceOrder>({ //Agregar todas las propiedades xq typescript espera un ServiceOrder con todas las propiedades
    id: 0,
    number: 0,
    type: '',
    part_number: '',
    serial_number: '',
    description: '',
    solution: '',
    company: {
        name: '',
        headquarters: ''
    },
    contacts: {
        name: '',
        last_name: '',
        gender: '',
        active: false,
        identification: 0,
        charge: '',
        birthday: ''
    },
    mails: {
        mail: ''
    },
    phones: {
        phone: 0
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
})

watch(
    () => props.order,
    (newOrder) => {
        if (newOrder) {
            selectedOrder.value = { ...newOrder }
        } else {
            selectedOrder.value = {
                id: 0,
                number: 0,
                type: '',
                part_number: '',
                serial_number: '',
                description: '',
                solution: '',
                company: {
                    name: '',
                    headquarters: ''
                },
                contacts: {
                    name: '',
                    last_name: '',
                    gender: '',
                    active: false,
                    identification: 0,
                    charge: '',
                    birthday: ''
                },
                mails: {
                    mail: ''
                },
                phones: {
                    phone: 0
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
    },
    { immediate: true }
)

const showSolution = computed(() => !!props.order?.id)

const api = useApi()

const companies = ref([])

onMounted(() => {
    getCompanies()
})

const getCompanies = async () => {
    const response = await api.get('/companies')
    companies.value = response.data
}

const companyAddresses = ref([])

const setAddresses = (id) => {
    const company = companies.value.find((company) => company.id == id);
    companyAddresses.value = company.addresses
}

const storeServiceOrder = async () => {
    const response = await api.post('/service-orders', selectedOrder.value)

    console.log(response)

}
const updateServiceOrder = async () => {
    //do
}

const responsables = [
    {
        "id": "681153412383462ca7c83ae0",
        "name": "Lindsey Quinn"
    },
    {
        "id": "681153411d9b86c5f67a49b4",
        "name": "Sherrie Hodges"
    },
    {
        "id": "68115341a436545fa3abf376",
        "name": "Harriett Benjamin"
    },
    {
        "id": "68115341254e97df8aa64340",
        "name": "Good Delgado"
    },
    {
        "id": "68115341327a43856907214e",
        "name": "Elise Gardner"
    },
    {
        "id": "68115341baf983e6d6a58687",
        "name": "Fanny Green"
    },
    {
        "id": "681153412649cc4459479202",
        "name": "Margarita Burke"
    },
    {
        "id": "68115341ccd72df661e04b2b",
        "name": "Reese Hutchinson"
    },
    {
        "id": "6811534183fce2082f1a573a",
        "name": "Susan Collins"
    },
    {
        "id": "681153417513b3a4be3c6544",
        "name": "Bird Jensen"
    },
    {
        "id": "68115341b972baa565c67802",
        "name": "Janet Edwards"
    },
    {
        "id": "68115341a0a540f918053088",
        "name": "Goodman Bullock"
    },
    {
        "id": "681153417c93ebf21997f063",
        "name": "Opal Cunningham"
    },
    {
        "id": "681153417a6c5d159f6cd879",
        "name": "Chandra Langley"
    },
    {
        "id": "68115341c72e2ea71ad01468",
        "name": "Susanne Mcclure"
    },
    {
        "id": "68115341879e31b1121a7f2f",
        "name": "Salas Campos"
    },
    {
        "id": "68115341f632cf9d0bb298f5",
        "name": "Stevens Todd"
    }
]

// const companies = [
//     {
//         "id": "6811546aa035d0c6c482fdd5",
//         "company": "NEWCUBE"
//     },
//     {
//         "id": "6811546a7dfd00922a8c3e9b",
//         "company": "IZZBY"
//     },
//     {
//         "id": "6811546ae23be49a1a1dfae9",
//         "company": "JUNIPOOR"
//     },
//     {
//         "id": "6811546a34e8c0d5514ad362",
//         "company": "RAMEON"
//     },
//     {
//         "id": "6811546aa8f4feccd3287ae1",
//         "company": "AQUAZURE"
//     },
//     {
//         "id": "6811546acf4e2b704f4b9427",
//         "company": "CYTREK"
//     },
//     {
//         "id": "6811546af079d1d0ab075d5e",
//         "company": "KIGGLE"
//     },
//     {
//         "id": "6811546a11a0a6bd4924e79b",
//         "company": "VITRICOMP"
//     },
//     {
//         "id": "6811546ad002f7dca219e2ef",
//         "company": "LOCAZONE"
//     },
//     {
//         "id": "6811546afba277b7c4119160",
//         "company": "CODAX"
//     },
//     {
//         "id": "6811546a2bd9382c38efd253",
//         "company": "ENDICIL"
//     },
//     {
//         "id": "6811546a1d447657b8115365",
//         "company": "ZENTIA"
//     },
//     {
//         "id": "6811546a3fe4c9fb879d847d",
//         "company": "CUIZINE"
//     },
//     {
//         "id": "6811546a81ff5044423577a6",
//         "company": "ZILLACON"
//     },
//     {
//         "id": "6811546a32e691a43f851896",
//         "company": "VIAGREAT"
//     },
//     {
//         "id": "6811546af73d356ecff66622",
//         "company": "GREEKER"
//     },
//     {
//         "id": "6811546ad8a8363a192233fb",
//         "company": "NIXELT"
//     },
//     {
//         "id": "6811546a735fa58b2da476be",
//         "company": "CENTURIA"
//     }
// ]
</script>

<style scoped>
.font {
    color: #5d5d5d;
}
</style>, onMounted
