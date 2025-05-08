<template>
    <div>
        <Modal @close="$emit('exit')" size="xl" :closeModalGlobal='closeModal' btnCancelText="Salir">
            <template v-slot:header>{{ modalTitle }}</template>

            <template v-slot:body>
                <div>
                    {{ selectedOrder.responsible }}
                    <div class="row">
                        <div class="mb-3 col-1">
                            <label for="number" class="font form-label fw-bold">N° orden:</label>
                            <input type="email" id="number" class="form-control" v-model="selectedOrder.number"
                                disabled>
                        </div>

                        <div class="mb-3 col-6">
                            <label for="company" class="font form-label fw-bold">Empresa:</label>
                            <div class="input-group">
                                <select id="company" class="form-select" v-model="selectedOrder.company_id"
                                    @change="setAddresses($event.target.value), setContacts($event.target.value)">
                                    <option :value="company.id" v-for="company in companies">{{ company.name }}
                                    </option>
                                </select>
                                <button class="btn" style="background-color: #ec474f;" disabled>
                                    <img src="../../public/plus-solid.svg" alt="" style="width: 20px; height: 20px;">
                                </button>
                            </div>
                        </div>
                        <div class="col-3 mb-3">
                            <label for="address" class="font form-label fw-bold">Dirección:</label>

                            <select id="company" class="form-select" :disabled="!companyAddresses.length" v-model="selectedOrder.addresses">
                                <option :value="address.address" v-for="address in companyAddresses">{{
            address.address }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3 col-3">
                            <label for="company" class="font form-label fw-bold">Contacto:</label>
                            <div class="input-group" style="height: 7px;">
                                <select id="contacto" class="form-select" :disabled="!companyContacts?.length"
                                    @change="changeSelectedContacts($event.target.value)" v-model="selectedOrder.contacts" >
                                    <option :value="contact.id" v-for="contact in companyContacts">{{ contact.name }}
                                    </option>
                                </select>
                                <button class="btn" style="background-color: #ec474f;">
                                    <img src="../../public/plus-solid.svg" alt="" style="width: 20px; height: 20px;">
                                </button>
                            </div>
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cc" class="font form-label fw-bold">C.C</label>
                            <input type="text" id="cc" class="form-control" v-model="selectedContact.identification"
                                disabled />
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cel" class="font form-label fw-bold">Teléfono:</label>
                            <select id="contacto" class="form-select" :disabled="!companyContacts?.length" v-model="selectedOrder.phones">
                                <option :value="phone.id" v-for="phone in selectedContact.phones">{{ phone.phone }}
                                </option>
                            </select>
                        </div>

                        <div class="col-4 mb-3">
                            <label for="email" class="font form-label fw-bold">Email:</label>
                            <input type="email" id="email" class="form-control" v-model="selectedContact.email"
                                disabled />
                        </div>
                        <div class="mt-5 mb-3 text-center">
                            <label class="form-label fw-bold">Información del servicio</label>
                        </div>
                        <div class="mb-3 col-4 ">
                            <label for="company" class="font form-label fw-bold">Tipo servicio:</label>
                            <select id="company" class="form-select" v-model="selectedOrder.type">
                                <option :value="service.id" v-for="service in serviceTypes">{{ service.label }}</option>
                            </select>
                        </div>
                        <div class="mb-3 col-2">
                            <label for="part_number" class="font form-label fw-bold">N° parte:</label>
                            <input type="text" id="part_number" class="form-control" v-model="selectedOrder.part_number">
                        </div>
                        <div class="col-4 mb-3">
                            <label for="equipment_name" class="font form-label fw-bold">Nombre equipo:</label>
                            <input type="text" id="equipment_name" class="form-control" v-model="selectedOrder.equipment_name">
                        </div>
                        <div class="col-2 mb-3">
                            <label for="serial_number" class="font form-label fw-bold">Número de serie:</label>
                            <input type="text" id="serial_number" class="form-control" v-model="selectedOrder.serial_number">
                        </div>

                        <div class="col-9 mb-3">
                            <label for="description" class="font form-label fw-bold">Descripción:</label>
                            <textarea class="form-control"
                                placeholder="Ingrese aqui la descripción del estado en el que se recibe el equipo"
                                rows="5" id="description" v-model="selectedOrder.description"></textarea>
                        </div>

                        <div class="col-3 mb-3">
                            <label for="responsable" class="font form-label fw-bold">Responsable:</label>

                            <select id="responsable" class="form-select" aria-label="Default select example" v-model="selectedOrder.responsible">
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
                <button type="button" class="btn btn-success" @click="storeServiceOrder()">{{ actionButtonText }}</button>
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

const selectedOrder = ref<ServiceOrder>({})

const showSolution = computed(() => !!props.order?.id)

const api = useApi()

const companies = ref([])

onMounted(async () => {
    await getCompanies()
    await getResponsables()
    setupModal()
})

const setupModal = ()=>{
    if (props?.order?.id) {
        //do for an existing order
    }
    else {
        selectedOrder.value.type = serviceTypes[0].id
        selectedOrder.value.part_number = ''
        selectedOrder.value.serial_number = ''
        selectedOrder.value.description = ''
        selectedOrder.value.solution = ''
        selectedOrder.value.company = companies.value.length ? companies.value[0] : null
        selectedOrder.value.company_id = companies.value.length ? companies.value[0].id : null
        selectedOrder.value.equipment_name = ''
        selectedOrder.value.contacts = companyContacts.value.length ? companyContacts.value[0].id : null
        selectedOrder.value.mails = Object.keys(selectedContact.value).length ? selectedContact.email : null
        selectedOrder.value.phones = selectedContact.value.phones.length ? selectedContact.value.phones[0].id : null
        selectedOrder.value.addresses = companyAddresses.value.length ? companyAddresses.value[0].address : null
        selectedOrder.value.responsible = responsables.value.length ? responsables.value[0].id : null
    }
}

const getCompanies = async () => {

    const response = await api.get('/companies')

    companies.value = response.data

    const id = companies.value.length ? companies.value[0].id : null

    if (id) {
        setAddresses(id)
        setContacts(id)
    }

}

const responsables = ref([])

const getResponsables = async () => {

    const response = await api.get('/contacts', {params:{'role':'responsible'}})
    responsables.value = response.data
}

const companyAddresses = ref([])

const setAddresses = (id) => {
    const company = companies.value.find((company) => company.id == id);
    companyAddresses.value = company.addresses
    selectedOrder.value.addresses = company.addresses[0]?.address
}

const companyContacts = ref([])
const selectedContact = ref({})
const selectedContactId = ref({})

const setContacts = (id) => {
    const company = companies.value.find((company) => company.id == id);
    companyContacts.value = company.contacts
    selectedContactId.value = companyContacts.value.length ? companyContacts.value[0].id : null
    selectedContact.value = getSelectedContact(selectedContactId)
    selectedOrder.value.contacts = selectedContactId
}

const changeSelectedContacts = (id) => {
    selectedContactId.value = id
    selectedContact.value = getSelectedContact(selectedContactId)
}

const getSelectedContact = () => {
    const contactSelected = companyContacts.value.find((contact) => contact.id == selectedContactId.value);
    selectedOrder.value.phones = contactSelected.phones[0].id
    return contactSelected
}

const storeServiceOrder = async () => {
    const response = await api.post('/service-orders', selectedOrder.value)
}
const updateServiceOrder = async () => {
    //do
}

const serviceTypes = [
    {
        'id': 'garantia',
        'label': 'Garantia'
    },
    {
        'id': 'mantenimiento',
        'label': 'Mantenimiento'
    },
    {
        'id': 'instalacion',
        'label': 'Instalacion'
    },
]

</script>

<style scoped>
.font {
    color: #5d5d5d;
}
</style>import type { idText } from 'typescript';

