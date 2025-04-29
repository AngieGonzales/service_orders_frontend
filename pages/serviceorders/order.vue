<template>
    <div>
        <Modal @close="$emit('exit')" size="xl" :closeModalGlobal='closeModal' btnCancelText="Salir">
            <template v-slot:header>{{ modalTitle }}</template>

            <template v-slot:body>
                <div>
                    <div class="row">
                        <div class="mb-3 col-2">
                            <label for="number" class="font form-label fw-bold">N° orden:</label>
                            <input type="email" id="number" class="form-control" v-model="selectedOrder.number">
                        </div>

                        <div class="mb-3 col-6 ">
                            <label for="company" class="font form-label fw-bold">Empresa:</label>
                            <input type="text" id="company" class="form-control" v-model="selectedOrder.company.name" />
                        </div>

                        <div class="col-4 mb-3 form-floating">
                            <label for="sede" class="font form-label fw-bold">Sede:</label>
                            <select type="text" id="sede" class="form-select"
                                v-model="selectedOrder.company.headquarters" multiple>
                                <option value="1">Opción 1</option>
                            </select>
                        </div>

                        <div class="col-4 mb-3">
                            <label for="address" class="font form-label fw-bold">Dirección:</label>
                            <input type="text" id="address" class="form-control w-100"
                                v-model="selectedOrder.addresses.address" />
                        </div>

                        <div class="col-3 mb-3">
                            <label for="city" class="font form-label fw-bold">Ciudad:</label>
                            <input type="text" id="city" class="form-control" v-model="selectedOrder.cities.city" />
                        </div>
                        <div class="col-5 mb-3">
                            <label for="contact" class="font form-label fw-bold">Contacto:</label>
                            <input type="text" id="contact" class="form-control"
                                v-model="selectedOrder.contacts.name" />
                        </div>

                        <div class="col-2 mb-3">
                            <label for="cc" class="font form-label fw-bold">C.C</label>
                            <input type="text" id="cc" class="form-control"
                                v-model="selectedOrder.contacts.identification" />
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cel" class="font form-label fw-bold">Teléfono:</label>
                            <input type="text" id="cel" class="form-control" v-model="selectedOrder.phones.phone" />
                        </div>

                        <div class="col-3 mb-3">
                            <label for="cell" class="font form-label fw-bold">Celular:</label>
                            <input type="text" id="cell" class="form-control" v-model="selectedOrder.phones.phone" />
                        </div>

                        <div class="col-4 mb-3">
                            <label for="email" class="font form-label fw-bold">Email:</label>
                            <input type="email" id="email" class="form-control" v-model="selectedOrder.mails.mail" />
                        </div>

                        <div class="mt-5 mb-1">
                            <label class="form-label fw-bold">Información del servicio</label>
                            <hr>
                        </div>
                        <div class="col-4 mb-3">
                            <label for="type" class="font form-label fw-bold">Tipo de servicio:</label>
                            <input type="text" id="type" class="form-control" v-model="selectedOrder.type" />
                        </div>
                        <div class="col-2 mb-3">
                            <label for="partNumber" class="font form-label fw-bold">Número de parte:</label>
                            <input type="text" id="partNumber" class="form-control"
                                v-model="selectedOrder.part_number" />
                        </div>
                        <div class="col-4 mb-3">
                            <label for="contact" class="font form-label fw-bold">Nombre equipo:</label>
                            <input type="text" id="contact" class="form-control"
                                v-model="selectedOrder.equipment_types.name" />
                        </div>
                        <div class="col-2 mb-3">
                            <label for="serialNumber" class="font form-label fw-bold">Número de serie:</label>
                            <input type="text" id="serialNumber" class="form-control"
                                v-model="selectedOrder.serial_number" />
                        </div>

                        <div class="col-9 mb-3">
                            <label for="floatingTextarea" class="font form-label fw-bold">Descripción:</label>
                            <textarea class="form-control"
                                placeholder="Ingrese aqui la descripción del estado en el que se recibe el equipo"
                                rows="5" id="floatingTextarea" v-model="selectedOrder.description"></textarea>
                        </div>

                        <div class="col-3 mb-3">
                            <label for="responsable" class="font form-label fw-bold">Responsable:</label>
                            <input type="text" id="responsable" class="form-control" />
                        </div>

                        <div v-if="showSolution" class="row">
                            <div class="col-9 mb-3">
                                <label for="solution" class="font form-label fw-bold">Solución:</label>
                                <textarea class="form-control" rows="5" id="solution"
                                    v-model="selectedOrder.solution"></textarea>
                            </div>
                            <div class="col-3 mb-3">
                                <label for="responsable2" class="font form-label fw-bold">Responsable:</label>
                                <input type="text" id="responsable2" class="form-control" />
                            </div>
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
                            <input type="text" id="responsable2" class="form-control" />
                        </div>
                        <div class="col-12">
                            <input type="file" class="form-control">
                        </div>
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-success">{{ actionButtonText }}</button>
            </template>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, computed } from 'vue';
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
</script>

<style scoped>
.font {
    color: #5d5d5d;
}
</style>
