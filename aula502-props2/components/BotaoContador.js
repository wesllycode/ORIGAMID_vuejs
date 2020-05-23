export default {
    name: "BotaoContador",
    props: {
            valor: Number
    },
    // Atenção aqui, atribui o valor para variável valorAtual, por causa da mutação 
    // tem parada no vue.js que dá erro quando atualiza a informação entre components.
    data(){
        return{
            valorAtual: this.valor
        }
    },
    template: `
        <div>
            <button @click="valorAtual++">Esse é o total {{valorAtual}}</button>
        </div>
    `,
}