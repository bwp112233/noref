import fadeOut from './fadeEffect';
import confirmStyle from './confirmStyle';
import { setClip, getStorage } from './storage';

const checkKeys = (prevClip, type) => {
    const urlBox = document.createElement("textarea");

    document.body.appendChild(urlBox);

    let url = location.href

    if (type === 'noRef') {
        if (url.indexOf('?') >= 0) {
            url = url.substr(0, url.indexOf('?'));
        }
        if (url.indexOf("/ref") >= 0) {
            url = url.substr(0, url.indexOf('ref'));
        }
    }

    urlBox.value = url;
    urlBox.select();
    document.execCommand("copy");

    if (Object.keys(prevClip).length > 0) {
        if (!prevClip.clip.includes(url)) {
            setClip(url);
        }
    } else {
        setClip(url);
    }

    document.body.removeChild(urlBox);

    document.body.insertAdjacentHTML("beforeend", `<div id="confirmDivBox999" style="${confirmStyle}">Copied!</div>`);
    fadeOut();
}


const pressed = [];

const copyListener = () => {

    document.addEventListener('keydown', async (e) => {

        if (e.target.contains(document.getElementById('noRefRoot')) || e.target.attributes[0].value === 'noRefInput') {
            return
        }
        let keyList = await getStorage('keyCodes');
        let fullKeyList = await getStorage('fullCodes');

        if (!e.repeat) {

            if (pressed.length < 3) {
                pressed.push(e.keyCode);
            }

            document.addEventListener('keyup', (e) => {
                pressed.splice(pressed.indexOf(e.keyCode), 1);
            });


            if (pressed.sort().toString() === keyList.keyCodes.sort().toString()) {

                const prevClip = await getStorage('clip');
                const type = 'noRef';

                if (document.getElementById('confirmDivBox999')) {
                    document.getElementById('confirmDivBox999').parentNode.removeChild.document.getElementById('confirmDivBox999');
                }
                checkKeys(prevClip, type);

            } else if (pressed.sort().toString() === fullKeyList.fullCodes.sort().toString()) {

                const prevClip = await getStorage('clip');
                const type = 'full';

                if (document.getElementById('confirmDivBox999')) {
                    document.getElementById('confirmDivBox999').parentNode.removeChild.document.getElementById('confirmDivBox999');
                }
                checkKeys(prevClip, type);
            }
        }
    })
}

export default copyListener;