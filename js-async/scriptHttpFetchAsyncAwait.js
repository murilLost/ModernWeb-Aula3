const sectionNotes = document.querySelector("#notas");
const newNote = document.querySelector("#novaNota");
const addNotes = (notas = []) => {
    notas.forEach(nota => {
        const p = document.createElement("p");
        p.innerHTML = nota.text;
        sectionNotes.appendChild(p);
    });
}
const getNotes = async () => {
    try {
        const response = await fetch("http://localhost:3333/notes");//o await, ele torna o JS em síncrono, faz esperar a promessa do FETCH acontecer, para então prosseguir o processamento, para isso é obrigatório que a função seja async ().
        const json = await response.json();

        addNotes(json);
        // const resolves = await Promise.all([new Promise(), new Promise]);    } catch (error) {
    } catch (error){
        if (error.response) {
            return alert("Bad Request")
        }
        alert("Verifique a internet")
    } finally {
        console.log("finalizou");
    }
}
const createNote = async (event) => {
    event.preventDefault(); //PreventDefault serve para informar ao navegador, para ele evitar de o comportamento padrão do evento, que geralmente recarrega a página.

    const body = JSON.stringify({ text: newNote.value });
    const response = await fetch("http://localhost:3333/notes", {
        method: "POST",
        body,
        headers: {
            "Content-type": "application/json",
        }
    })
    const json = await response.json();
    addNotes([json]);
    event.target.reset();
}
getNotes();