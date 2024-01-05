var position = 0;
var resultv = 0;
var final = 0;

function reset () {
    document.getElementById('input').value = "";
    final = 0;
}

function del() {
    document.getElementById('input').value = document.getElementById('input').value.slice(0,-1);
}

function input(value) {
document.getElementById('input').value += value;
if(value=='result'){
result(final)
}
else if(value=='reset'){
    reset();
}
else{
    final =  eval(document.getElementById('input').value )
}
position++;
}

function result(res) {
    document.getElementById('input').value = res;
}