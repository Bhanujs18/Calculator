var position = 0;

function reset () {
    document.getElementById('input').value = "";
}

function del() {
    document.getElementById('input').value = document.getElementById('input').value.slice(0,-1);
}

function input(input) {
document.getElementById('input').value += input;
position++;
}

function result() {
    document.getElementById('input').value = 0;
}