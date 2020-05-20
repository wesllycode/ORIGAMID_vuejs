export default {
    name: "Tempo",
    data(){
        return {
           tempe: ""
        };
    },   
    created(){
        this.puxarApi();
    },
    filters:{
        Graus(value){ 
            value += "º"          
            return value;
        }
    },
    methods:{
        puxarApi(){
            fetch("http://api.hgbrasil.com/weather?woeid=12578813&key=3367f5b5")
            .then(r => r.json())
            .then(r => {
                this.tempe = r.results;
            });
        }
    },
    template: ` 
        <div>
            <p><b>Nome da cidade</b>: {{tempe.city}}</p>
            <p><b>Temperatura: </b>: {{ tempe.temp | Graus}}</p>
            <p><b>Descrição</b>: {{tempe.description}}</p>  
        </div>`,    
}