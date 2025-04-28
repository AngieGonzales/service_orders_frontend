<template>
    <Order :order="selectedOrder" v-if="flags.showServiceOrderModal"
        @exit="flags.showServiceOrderModal = false; openModal(true)" />
    <Detail :order="selectedOrder" v-if="flags.showOrderDetailModal"
        @exit="flags.showOrderDetailModal = false; openModal(true)" />
    <Solution :order="selectedOrder" v-if="flags.showSolutionModal"
        @exit="flags.showSolutionModal = false; openModal(true)" @save="updateSolution" />
    <div class="border border-1 m-2 shadow shadow-lg">
        <div class="container-fluid">
            <div class="row w-100 p-2 mt-4 d-flex justify-content-around">
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
                    <button class="btn btn-danger" @click="flags.showServiceOrderModal = true">
                        Nuevo
                        <font-awesome-icon :icon="['fas', 'clipboard-list']" style="color: #ffffff;" />
                    </button>
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
                                    <button type="button" class="btn btn-danger dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="../../public/gear-solid.svg" alt=""
                                            style="width: 16px; height: 16px; margin-right: 5px; color: white;">
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li class="border-bottom">
                                            <a class="dropdown-item" href="#" @click="editOrder(order)">
                                                <img src="../../public/pencil-solid.svg" alt=""
                                                    style="width: 16px; height: 16px; margin-right: 5px;">
                                                Editar
                                            </a>
                                        </li>
                                        <li class="border-bottom">
                                            <a class="dropdown-item" href="#" @click="OrderDetails(order)">
                                                <img src="../../public/circle-info-solid.svg" alt=""
                                                    style="width: 16px; height: 16px; margin-right: 5px;">
                                                Detalles
                                            </a>
                                        </li>
                                        <li class="border-bottom">
                                            <a class="dropdown-item" href="#" @click="SolutionModal(order)">
                                                <img src="../../public/tag-solid.svg" alt=""
                                                    style="width: 16px; height: 16px; margin-right: 5px;">
                                                Solución
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#"">
                                                <img src="../../public/eraser-solid.svg" alt=""
                                                    style="width: 16px; height: 16px; margin-right: 5px;">
                                                Eliminar
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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Order from '~/pages/serviceorders/order.vue'
import Detail from '~/pages/serviceorders/detail.vue'
import Solution from '~/pages/serviceorders/solution.vue'
import type { ServiceOrder } from '~/types/ServiceOrder'

import { useServiceOrders } from '@/composables/useServiceOrders'

const { serviceOrders, selectedOrder, openModal } = useServiceOrders()

const flags = ref({
    showServiceOrderModal: false,
    showOrderDetailModal: false,
    showSolutionModal: false
})

function editOrder(order: ServiceOrder) {
    selectedOrder.value = { ...order }
    flags.value.showServiceOrderModal = true
}
function OrderDetails(order: ServiceOrder) {
    selectedOrder.value = { ...order }
    flags.value.showOrderDetailModal = true
}

function SolutionModal(order: ServiceOrder) {
    selectedOrder.value = order
    flags.value.showSolutionModal = true
}

const updateSolution = () => {

}
</script>

<style scoped>
.tableOrder {
    width: 95%;

}
</style>