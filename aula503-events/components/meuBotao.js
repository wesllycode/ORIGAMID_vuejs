export default{
    name: "meuBotao",
    template: '<button @click="handleclick">Clique</button>',
    methods:{
        handleclick(){
            /*
                    Aqui estou dizendo que quero selecionar elemento @origamid quando passo essa informação
                via vue.js para o componente que está na página ele vai corresponder a palavra que estiver lá
                @meucodigoaqui(pode ser origamid, teste, qualquernome).

            */
            this.$emit("origamid")
        }
    }
}