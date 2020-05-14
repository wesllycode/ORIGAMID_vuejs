/*
const ListAnime ={
    template: `<button> Cadastrar Anime </button>`
}

export default ListAnime;

*/

// Outro formato de exportar direito
export default {
    name: "ListAnime",
    data(){
        return {
            total: 0,
        }
    },
    template: `<button @click="total++">{{total}} Cadastrar Anime  </button>`
}