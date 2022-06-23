document.querySelector('.send').onclick = 
function() {
    if(document.querySelector('.enter').
    value.length == 0){
    }
    else{
        document.querySelector('.privet').innerHTML
        += `<div class="task">
        <p class="hello">Hello ${document.querySelector
            ('.enter').value}!</p></div>`;
        }
    }