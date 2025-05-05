<template>
    <EditPerfil :order="selectedOrder" v-if="flags.showEditPerfilModal"
        @exit="flags.showEditPerfilModal = false; openModal(true)" @image-updated="updateProfileImage" />
    <div>
        <div class="shadow m-5 p-3 position-relative">
            <div class="row">
                <div class="col-3">
                    <div class="text-center" style="width: 150px; height: 150px; border-radius: 50%; overflow: hidden;">
                        <img :src="profileImage" alt="Image perfil" class="w-100 h-100 " style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-7">
                    <div>
                        <!-- <h3>{{ order?.company?.name }}</h3> -->
                        <h3>Nombre de usuario</h3>
                        <h5>Rol de usuario</h5>
                        <h4>Email de usuario</h4>
                    </div>
                </div>
                <div class="col-2 align-content-start">
                    <a class="btn fs-5 border border-success bg-light position-absolute top-0 end-0 m-3"
                        @click="editPerfil">
                        <img src="../../public/pencil-solid.svg" alt=""
                            style="width: 20px; height: 20px; margin-right: 5px;">Editar
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import EditPerfil from '~/pages/serviceorders/editPerfil.vue'
import type { ServiceOrder } from '~/types/ServiceOrder'
import { useServiceOrders } from '@/composables/useServiceOrders'
import { ref } from 'vue'

const { serviceOrders, selectedOrder, openModal } = useServiceOrders()

const flags = ref({
    showEditPerfilModal: false
})

function editPerfil(order: ServiceOrder) {
    selectedOrder.value = { ...order }
    flags.value.showEditPerfilModal = true
}

// const orders = ref<ApiResponse<ServiceOrder[]>>([])

// interface ApiResponse<T> {
// data: T;
// }

const defaultImage = '/perfil.avif'
const profileImage = ref(defaultImage)

function updateProfileImage(imageUrl: string) {
    profileImage.value = imageUrl
}
</script>

<style scoped></style>