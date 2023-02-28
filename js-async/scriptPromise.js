const sectionNotes = document.querySelector("#notas");
const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p");
        p.innerHTML = nota.text;
        sectionNotes.appendChild(p);
    });
}
const doRequestAjax = () => {
    return new Promise((resolve, reject) => {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://localhost:3333/notes");
        xmlHttp.responseType = "json";
        xmlHttp.onload = () => {
            if(xmlHttp.status !== 200){//Quando status code for diferente de 200
                reject("Ops, algo deu errado " + xmlHttp.status );//rejeito a promessa, e passo um argumento.
            }else{//Se der tudo certo, status 200
                resolve(xmlHttp.response);//Passo a resposta como parâmetro.
            }
        }
        xmlHttp.onerror = () => {//Caso seja outro status code
            reject("Ops, verifique sua conexão");//Rejeito a promessa, enviando uma mensagem.
        }

        xmlHttp.send();
    });
}
const showError = (err) => {
    const p = document.createElement("p");
    p.textContent = err;
    p.style.color = "red";
    sectionNotes.appendChild(p);
}
doRequestAjax()//Aqui é onde executa o Ajax
    .then((body) => addNotes(body)) //chamado no resolve, chamando o método addNotes, para adicionar as notas ao DOM.
    .catch((error) => alert(error)) //chamado no reject, manda um Alert com a mensagem de erro.
    .finally() //chamado independente do resultado