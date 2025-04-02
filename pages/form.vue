<template>
    <div class="d-flex justify-content-center align-items-center">
        
        <div class="row w-75">
            <div class="col-8">
                <img src="../public/has.png" alt="" class="w-25">
            </div>
            <div class="col-4">
                <h3>N° ORDEN</h3>
                <input type="text">
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

            <div class="m-3">
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
                            <textarea class=" text form-control" rows="3"></textarea>
                        </td>
                        <td>
                            <textarea class=" text form-control" rows="3"></textarea>
                        </td>
                        <td>
                            <textarea class=" text form-control" rows="3"></textarea>
                        </td>
                        <td>
                            <textarea class=" text form-control" rows="3"></textarea>
                        </td>
                    </tr>
                </tbody>
        </table>
        <table class="table table-bordered text-start m-4">
                <thead>
                    <tr>
                        <th class="text-center" colspan="2">DESCRIPCION DEL ESTADO EN EL QUE SE RECIBE</th>
                        <th class="text-center">Fecha y Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="w-75">
                            <textarea class=" text form-control" rows="6"></textarea>
                        </td>
                        <td>
                            <input type="date" class="form-control mb-2">
                            <input type="text" class="form-control" placeholder="Responsable">
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered text-start m-4">
                <thead>
                    <tr>
                        <th class="text-center" colspan="2">SOLUCIÓN</th>
                        <th class="text-center">Fecha y Responsable</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="w-75">
                            <textarea class=" text form-control" rows="6" placeholder="Escribe la solución aquí..."></textarea>
                        </td>
                        <td>
                            <input type="date" class="form-control mb-2">
                            <input type="text" class="form-control" placeholder="Responsable">
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="m-3">
                <h2 class="text-center">Entrega</h2>
            </div>
            <table class="table table-bordered text-start m-4">
                <thead>
                    <tr>
                        <th class="text-center" colspan="2">RECOMENDACIONES</th>
                        <th class="text-center">Firma y Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2" class="w-75">
                            <textarea class=" text form-control" rows="6"></textarea>
                        </td>
                        <td>
                            
                            <input type="date" class="form-control mb-2">
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
}
.text {
    border: none;
}
</style>