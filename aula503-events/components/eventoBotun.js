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
            console.log("atualizou o componente meu , mas não o principal do index");
            this.$emit("update:contador", this.contadorComponente)
        }
       
    }

}