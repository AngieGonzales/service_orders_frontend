<template>
<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true"  data-bs-keyboard="false">
    <div :class="`modal-dialog modal-${maxWidth} modal-dialog-scrollable`">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="modal">
                    <slot name="header" />
                </h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true" @click="closeModal"></button>
            </div>
            <div class="modal-body">
                <slot name="body" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-danger" @click="closeModal">Cancelar</button>
                <slot name="footer" />
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

import {onMounted, watch} from 'vue'
import {defineEmits} from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps({
    maxWidth: {
        type: String,
        default: 'lg'
    },
    closeModalGlobal: Boolean
})

const emit = defineEmits(['close'])

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
