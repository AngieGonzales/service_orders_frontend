<template>
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" 
        data-bs-keyboard="false">
        <div :class="`modal-dialog modal-${size} modal-dialog-scrollable`">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="modal">
                        <slot name="header" />
                    </h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" 
                        @click="closeModal"></button>
                </div>
                <div class="modal-body">
                    <slot name="body" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click="closeModal">Cancelar</button>
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { onMounted, watch } from 'vue'
import { Modal } from 'bootstrap'

interface Props {
    size?: 'xl' | 'md' | 'lg'; 
    closeModalGlobal : boolean
} 
const props = withDefaults(defineProps<Props>(), {
    size: 'lg',
})

const emit = defineEmits<{
    (e: 'close'): void
}>()

const closeModal = () => {
    const modalEl = document.getElementById('modal')
    if (modalEl) {
        const modal = Modal.getInstance(modalEl) || new Modal(modalEl)
        modal.hide()
    }
    emit('close')
}

watch(() => props.closeModalGlobal, (newVal) => {
    if (newVal) {
        closeModal()
    }
})

onMounted(() => {
    const modalEl = document.getElementById('modal')
    if (modalEl) {
        const modal = new Modal(modalEl)
        modal.show()
    }
})
</script>
