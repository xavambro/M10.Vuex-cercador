<template>
   
 <form>
    <div class="form-group">
        <input type="text" class="form-control" id="search" placeholder="Introduzca su busqueda" v-model="input" @input="addInput(input)">
    </div>
    <div class="form-check">
        <input type="radio" class="form-check-input" id="available" value="true" v-model="picked" @input="changeAvailability(picked)">
        <label class="form-check-label" for="available">Disponible</label>
        <input type="radio" class="form-check-input" id="notavailable" value="false" v-model="picked" @input="changeAvailability(picked)">
        <label class="form-check-label" for="notavailable">No disponible</label>
    </div>
</form>
    
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    
    name:'Search',
    methods: {...mapMutations(['addInput','changeAvailability']),
            
    },
    computed: {
        input: {
            get(){
                return this.$store.state.input
            },
            set( value ){
                this.$store.commit('addInput',value)
            }
        },
        picked:{
            get(){
                return this.$store.state.availability
            },
            set( value ){
                this.$store.commit('changeAvailability', value)
            }
        }
    }
}
</script>
<style scoped>
label {
    margin-right:40px;
}
</style>