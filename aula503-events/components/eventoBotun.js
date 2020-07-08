export default{
    name: "eventoBotun",    
    props:["contador"],
    data(){
        return {
            contadorComponente: this.contador
        }
    },
    template:`<button @click="incrementar">Clique {{ contadorComponente }}</button>`,    
    methods:{
        incrementar(){
            this.contadorComponente++;            
            this.$emit("update:contador", this.contadorComponente)
        }
       
    }

}