export default{
    name: "componenteUm", 
    template:`<p @click="executarEvento">Componente 1</p>`,
    methods:{
        executarEvento(){
            EventBus.$emit("novoevento");
        }
    }, 
    created(){
        EventBus.$on("novoevento", (event)=>{
            console.log(event)
            });
    }
}


