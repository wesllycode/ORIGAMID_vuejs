export default{
    name: "ListaProdutos",
    props: ["frutas","titulo"],
    template: `
        <div>
            <h1>{{titulo}}</h1>
            <ul>
                <li v-for="fruta in frutas">{{fruta}}</li>
            </ul>
        </div>
    
    `,
}