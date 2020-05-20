export default{
    name: "ListaProdutos",
    props: ["frutas","titulo"],
    template: `
        <div>
            <h1>{{titulo}}</h1>
            <ul>
                <li>{{frutas}}</li>
            </ul>
        </div>
    
    `,
}