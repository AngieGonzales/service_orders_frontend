<template>
    <div class="row">
        <div class="col-2 header p-5 d-flex justify-content-end">
            <font-awesome-icon :icon="['fas', 'clipboard-list']" style="color: #ffffff;" class="icon" />
        </div>
        <div class="col-8 header d-flex align-items-center">
            <h1 class="title text-white">ORDENES DE SERVICIO</h1>
        </div>
        <div class="col-2 p-5 d-flex justify-content-end header">
        <div class="btn-group dropstart">
            <button type="button" class="btn dropdown-toggle" style="width: auto;" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="../public/user-regular.svg" alt="" style="width: 32px; height: 32px; margin-right: 5px;">
            </button>
            <ul class="dropdown-menu">
                <li class="border-bottom">
                    <a class="dropdown-item" href="#">
                        <img src="../public/user-solid.svg" alt=""
                            style="width: 16px; height: 16px; margin-right: 5px;">
                        Ver Perfil
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                        <img src="../public/right-from-bracket-solid.svg" alt=""
                            style="width: 16px; height: 16px; margin-right: 5px;">
                        Cerrar Sesión
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </div>
    <slot />
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Boldonse&family=Concert+One&family=Lilita+One&display=swap');

.header {
    background-color: #2b293d;
}

.title {
    font-family: 'Concert One';
    font-size: 40px;
}

.icon {
    font-size: 30px;
}
</style>