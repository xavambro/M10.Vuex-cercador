<template>
  <div>
    <Flip>
    <div key="key" v-if="getInput.length >= 3 || getInput.length ==0" class="row">
      <div
        v-for="item in getFilteredFilms"
        :key="item.id"
        class="card col-md-5"
      >
        <div class="card-header" :style="item.available ? {'background-color':'rgb(185, 226, 185)'} : ''">
          {{ item.title }}
          <p>Available: {{ item.available }}</p>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
    </Flip>
    <transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__fadeOut" >
    <div v-if="getFilteredFilms.length == 0" class="alert alert-danger">
      No s'ha trobat cap pelicula
    </div>
    </transition>
    
  </div>
</template>

<script src="../scripts/films.js">

</script>

<style src="../styles/films.css" scoped>

</style>