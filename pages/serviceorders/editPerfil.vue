<template>
    <div>
        <Modal @close="$emit('exit')" :closeModalGlobal='closeModal' btnCancelText="Salir">
            <template v-slot:header>
                Editar perfil de usuario:
            </template>

            <template v-slot:body>
                <div class="row">
                    <div class="col-12">
                        <label for="nameUser" class="font form-label fw-bold">Nombre:</label>
                        <input class="form-control" type="text" id="nameUser">
                    </div>
                    <div class="col-12 mt-3">
                        <label for="photo" class="font form-label fw-bold">Imagen de perfil:</label>
                        <input class="form-control" type="file" id="photo" accept=".png, .jpg, .jpeg, .svg" @change="fileChange">
                    </div>
                </div>
            </template>

            <template v-slot:footer>
                <button type="button" class="btn btn-success">Actualizar</button>
            </template>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
import type { ServiceOrder } from '~/types/ServiceOrder';
import { defineAsyncComponent } from 'vue';

const Modal = defineAsyncComponent<typeof import('~/components/Modal.vue')['default']>(
    () => import('~/components/Modal.vue')
)

const closeModal = ref(false)

const props = defineProps<({
    order?: ServiceOrder
})>()

const emit = defineEmits(['exit', 'image-updated'])

function fileChange(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            emit('image-updated', e.target?.result as string)
        }
        reader.readAsDataURL(file)
    }
}
</script>


<style scoped>
.font {
    color: #5d5d5d;
}
</style>