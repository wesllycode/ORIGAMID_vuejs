/*
    Aqui posso fazer com quê o ListAnime seja componente
    do MenuAnime.js
*/

import ListAnime from "./ListAnime.js";

export default{
    name:"MenuAnime",
    template: `
       
            <ul>
                <li> Página Inicial </li>
                <li> Animes Dublados </li>
                <list-anime></list-anime>            
            </ul>
    `,
    components: {
        ListAnime
    }
}