<template>
   
 <form>
    <div class="form-group">
        <input type="text" class="form-control" id="search" placeholder="Introduzca su busqueda" v-model="input" @input="addInput(input)">
    </div>
    <div class="form-check">
        <input type="radio" class="form-check-input" id="available" value="available" v-model="picked" @input="changeAvailability(picked)">
        <label class="form-check-label" for="available">Disponible</label>
        <input type="radio" class="form-check-input" id="notavailable" value="notavailable" v-model="picked" @input="changeAvailability(picked)">
        <label class="form-check-label" for="notavailable">No disponible</label>
    </div>
</form>
    
</template>

<script src="../scripts/search.js">

</script>

<style src="../styles/search.css" scoped>
label {
    
    margin-right:40px;
}
</style>