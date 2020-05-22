import Produto from "./Produto.js";

export default{
    name: "ListaProdutos",
    props: ["frutas","titulo"],
    components:{
        Produto
    },
    template: `
        <div>
            <h1>{{titulo}}</h1>
            <ul>
                <li v-for="fruta in frutas">  {{fruta}} </li>
                <produto 
                    v-for="fruit, index in frutas" 
                    :key="fruit + index" 
                    :nomeDoProduto="fruit">
                </produto>
            </ul>
        </div>
    
    `,
}