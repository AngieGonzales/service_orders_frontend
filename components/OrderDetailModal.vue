<template>
    <div>
        <Modal @close="$emit('exit')" :closeModalGlobal='closeModal' btnCancelText="Salir">
            <template v-slot:header>
                <h4>Detalle de la orden de servicio:</h4> 
            </template>
    
            <template v-slot:body>
                <div class="d-flex justify-content-center align-items-center">
                    <div v-if="order" class="row w-100">
                        <div class="card-body col-5 shadow shadow-lg m-2 p-3" >
                            <a href="#" class="text-decoration-none text-dark fw-bold fs-4">
                                <img src="../public/list-solid.svg" alt="" style="width: 16px; height: 16px; margin-right: 5px;" > 
                                <span style="color: #666168;">Información Géneral</span>
                            </a>
                            <ul>
                                <li class="mb-2 mt-4"><strong style="color: #5d5d5d;">Número Orden: </strong>{{ order.number }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Empresa: </strong>{{ order.company.number }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Sede: </strong>{{ order.company.headquarters }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Dirección: </strong>{{ order.addresses.address }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Ciudad: </strong>{{ order.cities.city }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Teléfono: </strong>{{ order.phones.phone }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Celular: </strong>{{ order.phones.phone }}</li>
                                <li><strong style="color: #5d5d5d;">Email: </strong>{{ order.mails.mail }}</li>
                            </ul>
                        </div>
                        <div class="card-body col-5 shadow shadow-lg m-2 p-3" >
                            <a href="#" class="text-decoration-none text-dark fw-bold fs-4">
                                <img src="../public/contact.svg" alt="" style="width: 16px; height: 16px; margin-right: 5px;" > 
                                <span style="color: #666168;">Información de Contacto</span>
                            </a>
                            <ul>
                                <li class="mb-2 mt-4"><strong style="color: #5d5d5d;">Nombre: </strong>{{ order.contacts.name }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Apellidos: </strong>{{ order.contacts.last_name }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Género: </strong>{{ order.contacts.gender }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Identificación: </strong>{{ order.contacts.identification }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Cargo: </strong>{{ order.contacts.charge }}</li>
                            </ul>
                        </div>
                        <div class="card-body col-6 shadow shadow-lg m-2 p-3" >
                            <a href="#" class="text-decoration-none text-dark fw-bold fs-4">
                                <img src="../public/house-solid.svg" alt="" style="width: 16px; height: 16px; margin-right: 5px;" > 
                                <span style="color: #666168;">Información del Servicio</span>
                            </a>
                            <ul>
                                <li class="mb-2 mt-4"><strong style="color: #5d5d5d;">Tipo servicio: </strong>{{ order.type }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Nombre del equipo: </strong>{{ order.equipment_types.name }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Número de parte: </strong>{{ order.part_number }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Numero de serie: </strong>{{ order.serial_number }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Descripción: </strong>{{ order.description }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Solución: </strong>{{ order.solution }}</li>
                                <li class="mb-2"><strong style="color: #5d5d5d;">Condiciones de entrega: </strong>{{ order.delivery_conditions.description }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </template> 
    
            <template v-slot:footer>
            </template>
        </Modal>
    </div>
    </template>


<script lang="ts" setup>
import {defineAsyncComponent,ref} from 'vue';

const closeModal = ref(false)
const Modal = defineAsyncComponent(() => import('@/components/globals/Modal.vue'))

defineProps ({
    order: Object
})

const emit = defineEmits(['exit'])
</script>


<style scoped>


</style>
