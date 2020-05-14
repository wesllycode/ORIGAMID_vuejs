/*
    Aqui posso fazer com quê o ListAnime seja componente
    do MenuAnime.js
*/

import MenuAnime from "./ListAnime.js";

export default{
    name:"MenuAnime",
    template: `
    
        <ul>
            <li> Página Inicial </li>
            <li> Animes Dublados </li>
        </ul>

    `,
    components: {
        MenuAnime
    }
}