const panels = document.querySelectorAll('.panel');

function toogleopen() {
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName.includes('flex'))
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click',toogleopen));
panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));