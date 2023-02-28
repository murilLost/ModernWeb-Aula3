const sectionNotes = document.querySelector("#notas");

const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p"); //Cria elemento no DOM, para cada nota
        p.innerHTML = nota.text;//Antes de ir pro dom, atribuo o innerHTML
        sectionNotes.appendChild(p);//Adiciono ao section HTML #notas, os elementos criados acima
    });
}
const xmlHttp = new XMLHttpRequest();//Ajax, faz uma chamada a uma URL externa, sem precisar recarregar a página, uma chamada assíncrona
xmlHttp.open("GET", "http://localhost:3333/notes"); //Faz um chamada rest
xmlHttp.responseType = "json";//O tipo de response esperado
xmlHttp.onload = () => {//Quando terminar de carregar a URL (api rest)
    addNotes(xmlHttp.response);//Chama o método addNotes, e adiciona ao DOM o resultado trazido pela API
    // console.log(xmlHttp.response);}
}
xmlHttp.send();