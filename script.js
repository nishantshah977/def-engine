
function go(){
    let word = document.getElementById('input').value;
   document.querySelector("#word").innerHTML=word;
   
   /* Fetching API */
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
.then(function(response){
if(response.status == 404){
document.querySelector('#modal').style.display="block";
}
else{
    return response.json();
}
})
.then(function(data){
    const { definition } = data[0].meanings[0].definitions[0];
    const { audio } = data[0].phonetics[0];

    /* Show Definition*/
    document.querySelector('#audio').src=audio;
document.getElementById('first').innerText = definition;    document.querySelector("#ans").style.display="block";
});
}
function play(){
    document.querySelector("#audio").play();
}

let close = document.querySelector(".btn-red");
close.addEventListener("click",function(){
    document.querySelector("#modal").style.display="none";
})
