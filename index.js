let chek= document.querySelectorAll('input[type="checkbox"]');

let selectCount = 0;
function addInfo (event){
    const checkbox = event.target;
    if(checkbox.checked){
        selectCount += 1;
    }
    else{
        selectCount -= 1;
    }
    document.getElementById('selet').innerText = selectCount;
}

chek.forEach(checkbox => {
    checkbox.addEventListener('click', addInfo)
});