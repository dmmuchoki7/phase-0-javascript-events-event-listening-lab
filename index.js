//Adding event listeners

function addingEventListener() {
    const elemnt= document.querySelector('#input');
    elemnt.addEventListener('click',addingEventListener);
    alert('I was clicked')
}
