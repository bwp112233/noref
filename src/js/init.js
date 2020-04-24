let customKey = [],
    keyCode = [];


const clearInput = () => {
    document.getElementById('input').value = '';
}


const init = async () => {

    document.addEventListener('keydown', (e) => {

        if (e.keyCode === 8) {

            clearInput();

            customKey.length = 0;
            keyCode.length = 0;

        } else {

            if (customKey.length < 3) {

                customKey.push(e.key);
                keyCode.push(e.keyCode);
            }

            clearInput();

            document.getElementById('input').value = customKey.join(' + ');
        }
    });
}
