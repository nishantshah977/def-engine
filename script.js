
function go(){
    let word = document.getElementById('input').value;
   
   
   /* Fetching API */
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
.then(function(response){
if(response.status == 404){
alert("No Word Found");
}
else{
    return response.json();
}
})
.then(function(data){
    const { definition } = data[0].meanings[0].definitions[0];
    def1(definition);    
    /* Show Definition*/
    
    document.querySelector("#ans").style.display="block";
});
}



function def1(definition){
document.getElementById('first').innerText = definition; 

}
