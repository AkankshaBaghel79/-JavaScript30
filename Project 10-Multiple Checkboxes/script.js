const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastchecked;
function handlecheck(e)
{
    let inBetween = false;
    if(e.shiftKey && this.checked)
    {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastchecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }

            if(inBetween) {
                checkbox.checked = true;
            }
        });
        
    }
    lastchecked = this;
}
checkboxes.forEach(checkbox =>checkbox.addEventListener('click',handlecheck));