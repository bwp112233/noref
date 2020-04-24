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

    // document.getElementById('setKey').addEventListener('click', setKey);

    // let storedKey = await getStorage('keyCommand');
    // console.log(storedKey.keyCommand);

    // document.getElementById('currentKey').innerText = `Current Hotkey: ${storedKey.keyCommand.join(' + ')}`;
    // document.getElementById('prevClips').addEventListener('click', async () => {
    //     const prev = await getStorage('clip');
    //     console.log(prev);

    //     prev.clip.map((e) => {
    //         document.getElementById('previousClips').insertAdjacentHTML('beforeend', `<p>${e}</p>`);
    //     });
    // })

}
