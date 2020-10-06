import { getMainElement } from "./utils/objects.js";

/* returns an empty array of size max */
export const range = (max) => Array(max).fill(null);

/* returns a randomInteger */
export const randomInteger = (max = 1) => Math.floor(Math.random()*max);

/* returns a randomHexString */
const randomHex = () => randomInteger(256).toString(16);

/* returns a randomColor */
export const randomColor = () => '#'+range(3).map(randomHex).join('');


export function padNum(num, pad_by = 2, pad_with = '0') {
    return num.toString().padStart(pad_by, pad_with);
}

