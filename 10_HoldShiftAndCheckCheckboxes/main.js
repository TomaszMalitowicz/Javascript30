const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
console.log(checkboxes);

let lastChecked;

const handleCheck = function (e) {
    // console.log(e);
    // if shift key is down
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Sprawdzam co jest pomiedzy!');
            }
            if (inBetween) {
                checkbox.checked = true;
                console.log('zaznaczam!')
            }
        })

    }

    lastChecked = this;
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));