<template>
<div>
    <Modal @close="$emit('exit')" :closeModalGlobal='closeModal' btnCancelText="Salir">
        <template v-slot:header>
            Crear orden de servicio:
        </template>

        <template v-slot:body>
            <div class="d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-4 d-flex">
                        <h3 class="order">N° orden:</h3>
                        <input type="text" class="input form-control w-25 ms-2" v-model="selectedOrder.number" />
                    </div>

                    <div class="col-12 form-floating mt-3 mb-2">
                        <input type="text" id="company" class="form-control w-100" placeholder="" v-model="selectedOrder.company.name" />
                        <label for="company" class="form-label fw-bold ms-2">EMPRESA</label>
                    </div>
                    <div class="col-12 form-floating mb-2">
                        <input type="text" id="sede" class="form-control" placeholder="" v-model="selectedOrder.company.headquarters" />
                        <label for="sede" class="form-label fw-bold ms-2">SEDE</label>
                    </div>
                    <div class="col-6 form-floating mb-2">
                        <input type="text" id="address" class="form-control w-100" placeholder="" v-model="selectedOrder.addresses.address" />
                        <label for="address" class="form-label fw-bold ms-2">DIRECCION</label>
                    </div>
                    <div class="col-6 form-floating mb-2">
                        <input type="text" id="city" class="form-control w-100" placeholder="" v-model="selectedOrder.cities.city" />
                        <label for="city" class="form-label fw-bold ms-2">CIUDAD</label>
                    </div>
                    <div class="col-6 form-floating mb-2">
                        <input type="text" id="contact" class="form-control" placeholder="" v-model="selectedOrder.contacts.name" />
                        <label for="contact" class="form-label fw-bold ms-2">CONTACTO</label>
                    </div>
                    <div class="col-6 form-floating mb-2">
                        <input type="text" id="cc" class="form-control" placeholder="" v-model="selectedOrder.contacts.identification" />
                        <label for="cc" class="form-label fw-bold ms-2">C.C</label>
                    </div>
                    <div class="col-3 form-floating mb-2">
                        <input type="text" id="cel" class="form-control" placeholder="" v-model="selectedOrder.phones.phone" />
                        <label for="cel" class="form-label fw-bold ms-2">TELEFONO</label>
                    </div>
                    <div class="col-3 form-floating mb-2">
                        <input type="text" id="cell" class="form-control" placeholder="" v-model="selectedOrder.phones.phone" />
                        <label for="cell" class="form-label fw-bold ms-2">CELULAR</label>
                    </div>
                    <div class="col-6 form-floating">
                        <input type="email" id="email" class="form-control" placeholder="" v-model="selectedOrder.mails.mail" />
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
                                    <textarea class="text form-control text-center" rows="3" v-model="selectedOrder.type"></textarea>
                                </td>
                                <td>
                                    <textarea class="text form-control text-center" rows="3" v-model="selectedOrder.part_number"></textarea>
                                </td>
                                <td>
                                    <textarea class="text form-control text-center" rows="3" v-model="selectedOrder.equipment_types.name"></textarea>
                                </td>
                                <td>
                                    <textarea class="text form-control text-center" rows="3" v-model="selectedOrder.serial_number"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-bordered text-start mt-3">
                        <thead>
                            <tr>
                                <th class="text-center" colspan="2">
                                    DESCRIPCION DEL ESTADO EN EL QUE SE RECIBE
                                </th>
                                <th class="text-center">Responsable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2" class="w-75">
                                    <textarea class="text form-control text-center" rows="7" v-model="selectedOrder.description"></textarea>
                                </td>
                                <td>
                                    <input type="text" class="form-control input-large text-center"/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table table-bordered text-start mt-3" v-if="showSolution">
                        <thead>
                            <tr>
                                <th class="text-center" colspan="2">SOLUCIÓN</th>
                                <th class="text-center">Responsable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2" class="w-75">
                                    <textarea class="text form-control text-center" rows="7" v-model="selectedOrder.solution"></textarea>
                                </td>
                                <td>
                                    <input type="text" class="form-control input-large text-center" />
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
                                <th class="text-center">Responsable</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2" class="w-75">
                                    <textarea class="text form-control text-center" rows="7" v-model="selectedOrder.delivery_conditions.description"></textarea>
                                </td>
                                <td>
                                    <input type="text" class="form-control input-large text-center" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </template> 

        <template v-slot:footer>
            <button type="button" class="btn btn-success">Success</button>
        </template>
    </Modal>
</div>
</template>

<script setup>
import {defineAsyncComponent,ref, onMounted} from 'vue';

const closeModal = ref(false)
const Modal = defineAsyncComponent(() => import('@/components/globals/Modal.vue'))

const props = defineProps({
    order: {
        type: Object
    }
})


onMounted(() => {
    console.log('ola', props.order);
    console.log('solution', showSolution.value);
    
})

const selectedOrder = ref({})

watch(() => props.order, (newOrder) => {
    if (newOrder) {
        selectedOrder.value = { ...newOrder }
    } else {
        selectedOrder.value = {
        number: '',
        company: '',
        type: '',
        }
    }
}, { immediate: true })

const showSolution = computed(() => !!props.order?.id)
</script>
