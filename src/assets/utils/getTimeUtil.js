const now = new Date();

const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const seconds = ('0' + now.getSeconds()).slice(-2);

export function getYear () {
    return year;
}

export function getDateUtil () {
    return `${year}-${month}-${day}`;
}
export function getNowTimeUtil () {
    return `${hours}-${minutes}-${seconds}`;
}

