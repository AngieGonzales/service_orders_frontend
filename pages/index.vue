<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="row shadow-lg w-100" style="max-width: 860px;">
            <div
                class="col-md-6 bg rounded-start-4 d-flex flex-column justify-content-center align-items-center text-center text-white p-4">
                <img src="../public/user.png" alt="" class="image mb-3" />
                <h2 class="message p-5 ">Bienvenido</h2>
                <h2 class="message">Sistema de ordenes de servicio</h2>
            </div>

            <div class="col-md-6 bg-white rounded-end-4 p-4 d-flex flex-column justify-content-center">
                <h2 class="title fw-bold text-center mb-4 fs-2">BIENVENIDO</h2>
                <form action="#" class="w-100 px-3">
                    <div class="mb-4">
                        <label for="email" class="form-label fw-bold">Correo Electrónico</label>
                        <input type="email" class="form-control p-3 shadow" name="email" id="email"
                            placeholder="Ingrese su email" v-model="form.email" @input="validateEmail()" />
                    </div>

                    <div class="mb-4 position-relative">
                        <label for="password" class="form-label fw-bold">Contraseña</label>
                        <div class="input-group shadow rounded">
                            <input id="password" type="password" class="form-control border-end-0 p-3" name="password"
                                placeholder="Ingrese su contraseña" required v-model="form.password"
                                @input="validatePassword()" />
                            <span class="input-group-text bg-transparent border border-start-0 pe-3"
                                @click="toggleInputPassword">
                                <i class="fas fa-eye"></i>
                            </span>
                        </div>
                    </div>

                    <div class="d-grid mt-4">
                        <button type="submit" class="btn p-3 text-white fw-bold" @click.prevent="checkLogin">Acceder</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { useAuthStore } from '~/stores/auth';

const form = ref({
    email: '',
    password: ''
})

const api = useApi()

definePageMeta({
    layout: "empty"
})


const toggleInputPassword = () => {
    const input = document.getElementById("password");
    const button = document.getElementById("password-button");
    if (input.type === "password") {
        input.type = "text";
        button.classList.remove("btn-outline-secondary");
        button.classList.add("btn-outline-primary");
    } else {
        input.type = "password";
        button.classList.remove("btn-outline-primary");
        button.classList.add("btn-outline-secondary");
    }
};

const router = useRouter();

const formFlag = ref(true)

const validateEmail = () => {
    if (!form.value.email) {
        alert("El email no puede estar vacío")
        formFlag.value = false
        return false
    }

    formFlag.value = true
    return true
}

const validatePassword = () => {
    if (!form.value.password) {
        alert("La contraseña no puede estar vacía")
        formFlag.value = false
        return false
    }
    formFlag.value = true
    return true
}

const validateForm = () => {

    if (!validateEmail()) {
        return
    }

    if (!validatePassword()) {
        return
    }

    formFlag.value = true
}

const checkLogin = async () => {

    validateForm()

    if (!formFlag.value) {
        return
    }
    
    await api.post('/login', form.value).then(
        (response) => {
            localStorage.setItem('access_token', response.data.access_token)
            window.location.href = '/serviceorders'
        }).catch(
            (error) => {

                if (error.response.data.message) {
                    alert(`Validacion Incorrecta: ${error.response.data.message}`)
                }
                else {
                    alert(`Validacion Incorrecta`)
                }

                form.value.email=""
                form.value.password=""
        })
}

</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Boldonse&display=swap");

.bg {
    background-image: url(../public/bg.jpeg);
    background-size: cover;
    background-position: center;
    min-height: 500px;
}

.title {
    font-family: "Boldonse";
}

.message {
    font-family: "Boldonse";
}

.form-label {
    color: #868a89;
}

.btn {
    background-color: #bd53f9;
}

.image {
    width: 100px;
}
</style>onMounted,import type { LazyModalToggleButton } from '#components';
import type { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';
import type { faLongArrowLeft } from '@fortawesome/free-solid-svg-icons';registerRuntimeCompiler,
