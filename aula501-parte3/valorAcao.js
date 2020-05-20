import nameAcao from "./Acao.js";

export default{
    name: "valorAcao",
    data(){
        return{
            myAcao: ""
        };
    },
    methods:{
        puxarApimyMoneyAcao(){
            fetch('https://cloud.iexapis.com/stable/stock/googl/quote?token=pk_4cd1f2fb6ede4ae49e8f2c74b51ccc7d')
            .then(m => m.json())
            .then(m => {
                this. myAcao = m;
            });
        }
    },
    created(){
        this.puxarApimyMoneyAcao();
    },
    filters:{
        signReal(value){
            const real = "R$ ";            
            return real+value;
        }
    },
    components:{
        nameAcao
    },
    template: `
                <div>
                    ----------------------------------------------------- 
                    <name-acao></name-acao>                   
                    <p><b>Valor da Ação:</b> {{ myAcao.latestPrice | signReal}}</p>                
                </div>`

}