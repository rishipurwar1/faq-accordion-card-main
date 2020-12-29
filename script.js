const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('click', (e) => {
        inputs.forEach(item => {
            if(item.checked){
                item.checked = false;
                e.target.checked = true;
            }
        });
    });
});
