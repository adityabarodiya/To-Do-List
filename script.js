const input = document.getElementById('input-box');
const list = document.getElementById('list-container');

function addTask(){
    if(input.value !== ''){
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li)
        input.value = '';

    }
    else{
        alert('You must write something!!')
    }
}



