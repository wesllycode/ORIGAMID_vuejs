export default{
    name: "Tabela",
    data(){
        return {
            nameAcao:[
                        { name: "Facebook",symbol:"fb"},
                        {name:"Google",symbol:"goog"},
                        {name:"Microsoft",symbol:"msft"},
                        {name: "Amazon", symbol:"amzn"}
                    ],
            simboloAcao: ["fb","goog","msft","amzn"]
        }
    },
    template: `
    <section>
    <p class="h2" style="text-align:center"> Exemplos de códigos para pesquisar </p>
    <table class="mytable table table-bordered col-sm-8 text-center">
        <thead class="">
            <tr>                            
                <th scope="col">Nome da Ação</th>
                <th scope="col">Simbolo da Ação</th>                            
            </tr>
        </thead>
            <tbody>
                <tr v-for="(itemAcao,index) in nameAcao">                                                                                                
                    <td>{{itemAcao.name}}</td> 
                    <td>{{itemAcao.symbol}}</td>                      
                </tr> 
            </tbody> 
            
            

    </table>
</section>
    `
}