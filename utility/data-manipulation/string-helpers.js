export function getKeys(obj) {
    if(obj instanceof Object) {
        const keyArr = [];
        return Object.keys(obj);
    } else return null;
}