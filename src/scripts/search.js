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