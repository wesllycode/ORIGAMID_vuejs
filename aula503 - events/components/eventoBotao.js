export default{
    name: "eventoBotao",    
    template: `
        <div>
           <button @click="handleClick">Enviar Mensagem</button>
        </div>
    `,
    methods:{
        handleClick(){            
        }
    },
    created(){
        setTimeout(() =>{
                this.$emit("nomedoevento")
            }, 3000)
        },
    }
