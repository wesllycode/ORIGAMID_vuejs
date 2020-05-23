import Tabela from "./Tabela.js";
export default {
    name: "inputDados",
    data(){
        return {   
            acao: {},
            simbolo: "",
            camposimbolo: "", 
        }      
    },
    components:{
        Tabela
    },
    watch:{
        simbolo(camposimbolo){
            // Aqui estou verificando se o input onde digita o simbolo está se vazio, se estiver vazio ele coloca
            // A variavel acao e assim apagando os dados da pesquisa anterior
            if(camposimbolo == "")
            this.acao = ""
        }
    },
    methods:{            
            puxarApiAcao(){
                fetch(`https://cloud.iexapis.com/stable/stock/${this.simbolo}/quote?token=pk_4cd1f2fb6ede4ae49e8f2c74b51ccc7d`)
                .then( m => m.json())
                .then( m => {
                    this.acao = m;
                });
            }
        },    
    template: `
        <div class="container">
            <section class="conteudo">
                <p class="h1"> DESCUBRA O VALOR DA AÇÃO </p>                     
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon3">Digite a Sigla</span>
                        </div>
                        <input type="text" v-model="simbolo" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                        <div class="input-group-append" id="button-addon4">   
                            <button @click="puxarApiAcao" class="btn btn-outline-secondary">Buscar</button>
                        </div>
                    </div>               
            </section>           
               
            <section>
                <table class="mytable table table-striped table-bordered col-sm-8 text-center ">
                    <thead class="thead-dark">
                        <tr>                            
                            <th scope="col">Nome da Ação</th>
                            <th scope="col">Valor da Ação</th>                            
                        </tr>
                    </thead>
                        <tbody>
                            <tr>                                                                                                
                                <td>{{acao.companyName}}</td>
                                <td>{{acao.latestPrice | simboloReal }}</td>                                                          
                            </tr>                           
                        </tbody>                   
                </table>
            </section>

            <tabela></tabela>
        </div>`,
    filters:{    
            /* 
                Tive fazer o seguinte para R$ sumir
                primeiro verifiquei value é igual vazio, se for, ele vai exibir, contudo
                fiz outra verificação se value for diferente de vazio, retorna value junto
                com o o simbolo R$
            
            */
            simboloReal(value = ""){ 
                const real = "R$ ";            
                if(value != ""){
                    return real+value; 
                }           
            }    
    },
}
