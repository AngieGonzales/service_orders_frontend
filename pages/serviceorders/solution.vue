<template>
<div>
    <Modal @close="$emit('exit')" :closeModalGlobal='closeModal' btnCancelText="Salir">
        <template v-slot:header>
            Crear solución:
        </template>

        <template v-slot:body>
            <div class="space-y-4">
                <label for="solution"class="font form-label fw-bold">Solución:</label>
                <textarea id="solution" class="w-100 form-control border p-2 rounded" rows="4" placeholder="Describe la solución aquí..."></textarea>
            </div>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-success">Success</button>
        </template>
    </Modal>
</div>
</template>

<script lang="ts" setup>
import {defineAsyncComponent,ref} from 'vue';

const closeModal = ref(false)
const Modal = defineAsyncComponent(() => import('~/components/Modal.vue'))

defineProps ({
    order: Object
})

const emit = defineEmits(['exit', 'save'])
</script>

<style scoped>

</style>
