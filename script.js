var input = document.getElementById("inputTarefa");

function criarTarefa() {
    var boxTarefas = document.getElementById("boxTarefas");
    var t1 = "<div class='col s12 task'><p><label><input type='checkbox'/><span>";
    var t2 = "</span></label></p><i class='tiny material-icons' onclick='remover(this)'>clear</i></div>";

    boxTarefas.innerHTML += t1 + input.value + t2;
    inputvalue.style.fontWeight="bolder";
    inputvalue.style.color="black";
    input.value = "";
}

input.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
        criarTarefa();
    }
});

function remover(btn) {
    btn.parentElement.remove();
}