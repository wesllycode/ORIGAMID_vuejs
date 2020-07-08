export default{
    name: "eventoBotao",  
    data(){
        return {
        informacaoFilha: 100,
        }
    },  
    template: `
        <div>
           <button @click="handleClick">Enviar Mensagem</button>
        </div>
    `,    
    methods:{
        handleClick(){  
            console.log("clicou");               
        }
    },
    created(){
        setTimeout(() =>{                
                this.$emit("nomedoevento", this.informacaoFilha)
            }, 3000)
        },
    }
