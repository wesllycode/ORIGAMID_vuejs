export default{
    name: "Produto",
    props:["nomeDoProduto"],
    template: `
         <div>
            <br><br>
                Aqui vai ser um exemplo usando prop de  um componente para outro componenete.

                <h1> {{nomeDoProduto}}</h1>
                <p> Nome da fruta é: {{nomeDoProduto}}</p>

            
         </div>
      

    `,
}