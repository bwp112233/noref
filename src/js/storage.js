
const setStorage = (keys, type) => {
    const keysArray = [...keys];
    return browser.storage.local.set({ [type]: keysArray });
}

const setCodes = (keys, type) => {
    const keysArray = [...keys];
    return browser.storage.local.set({ [type]: keysArray });
}

const getStorage = (type) => {

    return browser.storage.local.get(type);
}

const deleteHistoryItem = (item) => {

    if (item === 'all') {
        return browser.storage.local.set({ clip: [] });
    } else {

        getStorage('clip').then((clips) => {
            const history = [...clips.clip]
            history.splice(history.indexOf(item), 1);
            return browser.storage.local.set({ clip: history });
        })
    }
    return getStorage('clip');
}

const setClip = (clip) => {


    getStorage('clip').then((clips) => {
        if (Object.keys(clips).length === 0) {
            const array = [];

            array.push(clip);
            return browser.storage.local.set({ clip: array });
        } else {
            const array = [...clips.clip]

            array.push(clip);

            return browser.storage.local.set({ clip: array });
        }
    });
}



export { setStorage, getStorage, setClip, setCodes, deleteHistoryItem }