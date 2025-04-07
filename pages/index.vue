<template>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    </head>

    <div class="container d-flex justify-content-center">
        <div class="row mt-5 w-75 shadow-lg">
            <div class="col bg rounded-4">
                <div class="d-flex justify-content-center mt-5">
                    <img src="../public/user.png" alt="" class="image" />
                </div>
                <div>
                    <h2 class="message text-white text-center">Bienvenido al sistema de ordenes de servicio</h2>
                </div>
            </div>

            <div class="col h-75">
                <h2 class="title fw-bold text-center mb-5">BIENVENIDO</h2>
                <form action="#" class="form">
                <div class="md-4">
                    <label for="email" class="form-label fw-bold">Correo Electrónico</label>
                    <input type="email" class="form-control p-3 mb-4 shadow" name="email" id="email" placeholder="Ingrese su email"/>
                </div>

                <div class="md-4 position-relative">
                    <label for="password" class="form-label fw-bold">Contraseña</label>
                    <div class="input-group shadow rounded">
                        <input id="password" type="password" class="form-control border-end-0 p-3" name="password" placeholder="Ingrese su contraseña" required/>
                        <span class="input-group-text bg-transparent border border-start-0 pe-3" @click="toggleInputPassword">
                            <i class="fas fa-eye"></i>
                        </span>
                    </div>
                </div>

                <div class="d-grid mt-5">
                    <button type="submit" class="btn p-3 text-white fw-bold">Acceder</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout : "empty"
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
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Boldonse&display=swap");

.bg {
    background-image: url(../public/bg.jpeg);
    background-position: center center;
    height: 500px;
}
.title {
    margin-top: 30%;
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
.form {
    width: 270px;
    margin-left: 70px;
}
.image {
    width: 100px;
}
</style>
