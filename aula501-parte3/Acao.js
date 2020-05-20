export default{
    name: "nameAcao",
    data(){
        return {
            nameAcao : ""
        };
    },
    methods:{
        puxarApiNameAcao(){
            fetch('https://cloud.iexapis.com/stable/stock/googl/quote?token=pk_4cd1f2fb6ede4ae49e8f2c74b51ccc7d')
            .then(a => a.json())
            .then(a => {
                this.nameAcao = a;
            });
        
        }        
    }, 
    created(){
        this.puxarApiNameAcao();
    },   
    template: `<p><b>Nome da Ação:</b> {{nameAcao.companyName}}</p>`
}