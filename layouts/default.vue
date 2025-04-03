<template>
    <div class="row w-100">
        <div class="col-2 header p-5 d-flex justify-content-end">
            <font-awesome-icon :icon="['fas', 'clipboard-list']" style="color: #ffffff;" class="icon" />
        </div>
        <div class="col-10 header d-flex align-items-center">
            <h1 class="title text-white">SERVICE ORDERS</h1>
        </div>
    </div>
    <slot/>
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