<template>
    <div class="d-flex justify-content-center align-items-center">
        
        <div class="row">
            <div class="col-8">
                <img src="../public/haslogo.png" alt="" class="w-50">
            </div>
            <div class="col-4 d-flex m-auto">
                <h3 class="order ms-5">N° ORDEN</h3>
                <input type="text" class="input form-control w-25 ms-2">
            </div>

            <div class="col-12 form-floating mt-5 mb-2">
                <input type="text"  id="company" class="form-control w-100" placeholder="">
                <label for="company" class="form-label fw-bold ms-2">EMPRESA</label>
            </div>
            <div class="col-12 form-floating mb-2">
                <input type="text" id="sede" class="form-control" placeholder="">
                <label for="sede" class="form-label fw-bold ms-2">SEDE</label>
            </div>
            <div class="col-6 form-floating mb-2">
                <input type="text" id="address" class="form-control w-100" placeholder="">
                <label for="address" class="form-label fw-bold ms-2">DIRECCION</label>
            </div>
            <div class="col-6 form-floating mb-2">
                <input type="text" id="city" class="form-control w-100" placeholder="">
                <label for="city" class="form-label fw-bold ms-2">CIUDAD</label>
            </div>
            <div class="col-6 form-floating mb-2">
                <input type="text" id="contact" class="form-control" placeholder="">
                <label for="contact" class="form-label fw-bold ms-2">CONTACTO</label>
            </div>
            <div class="col-6 form-floating mb-2">
                <input type="text" id="cc" class="form-control" placeholder="">
                <label for="cc" class="form-label fw-bold ms-2">C.C</label>
            </div>
            <div class="col-3 form-floating mb-2">
                <input type="text" id="cel" class="form-control" placeholder="">
                <label for="cel" class="form-label fw-bold ms-2">TELEFONO</label>
            </div>
            <div class="col-3 form-floating mb-2">
                <input type="text" id="cell" class="form-control" placeholder="">
                <label for="cell" class="form-label fw-bold ms-2">CELULAR</label>
            </div>
            <div class="col-6 form-floating">
                <input type="email" id="email" class="form-control" placeholder="">
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
                            <textarea class=" text form-control text-center" rows="3"></textarea>
                        </td>
                        <td>
                            <textarea class=" text form-control text-center" rows="3"></textarea>
                        </td>
                        <td>
                            <textarea class=" text form-control text-center" rows="3"></textarea>
                        </td>
                        <td>
                            <textarea class=" text form-control text-center" rows="3"></textarea>
                        </td>
                    </tr>
                </tbody>
        </table>

        <table class="table table-bordered text-start mt-3">
                <thead>
                    <tr>
                        <th class="text-center" colspan="2">DESCRIPCION DEL ESTADO EN EL QUE SE RECIBE</th>
                        <th class="text-center">Fecha y Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="w-75">
                            <textarea class=" text form-control text-center" rows="7"></textarea>
                        </td>
                        <td>
                            <input type="date" class="form-control mb-2">
                            <input type="text" class="form-control input-large text-center">
                        </td>
                    </tr>
                </tbody>
            </table>

            <table class="table table-bordered text-start mt-3">
                <thead>
                    <tr>
                        <th class="text-center" colspan="2">SOLUCIÓN</th>
                        <th class="text-center">Fecha y Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="w-75">
                            <textarea class=" text form-control text-center" rows="7"></textarea>
                        </td>
                        <td>
                            <input type="date" class="form-control mb-2">
                            <input type="text" class="form-control input-large text-center">
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
                        <th class="text-center">Firma y Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="w-75">
                            <textarea class=" text form-control text-center" rows="7"></textarea>
                        </td>
                        <td>
                            <input type="date" class="form-control mb-2">
                            <input type="text" class="form-control input-large text-center">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.form-control {
    border-color: #878888;
    resize: none;
}
.text {
    border: none;
}
.row {
    width: 60%;
}
.order {
    margin-top: 15%;
}
.input {
    margin-top: 15%;
}
.input-large {
    grid-row: span 2; /* Hace que el input ocupe dos filas */
    height: 100px; /* Ajusta la altura según necesidad */
    border: none;
}
.table {
    border-color: #878888;
}

</style>