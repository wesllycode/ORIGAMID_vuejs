export default {
    name: "Tempo",
    data() {
        return {
            tempoHoje: {}
            }
        },     
    template: "<p>Tianguá, Máxima {{ tempoHoje }} </p>",
    methods: {
        puxarAPI(){
            fetch(`http://api.hgbrasil.com/weather?woeid=12578813&key=3367f5b5 `)
            .then(res => res.json())
            .then( res =>  {
                this.tempoHoje = res.results.temp;
                });
            }
         },
         created() {
             this.puxarAPI();
         }
}
 
