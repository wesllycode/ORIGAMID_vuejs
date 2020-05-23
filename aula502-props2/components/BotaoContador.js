export default {
    name: "BotaoContador",
    props: {
            valor: Number
    },
    // Atenção aqui, atribui o valor para variável valorAtual, por causa da mutação 
    // tem parada no vue.js que dá erro quando atualiza a informação entre components.
    // No Away - Código vem de cima para baixo. E nunca de baixo para cima.
    template: `
        <div>
            <button>Esse é o total {{valor}}</button>
        </div>
    `,
}