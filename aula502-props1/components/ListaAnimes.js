export default{
    name: "ListaAnimes",
    props: ["animes","titulo"],
    template: `
        <ul>   
            <h1> {{titulo}}</h1>         
            <li v-for="anime in animes"> {{anime}} </li>            
        </ul>    
    `,


}