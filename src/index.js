import { log } from './getLog'

log();
console.log('wizard');

const obj = {
    a: 'alpha',
    b: 'bravo',
};

const newObj = {
    ...obj,
    c: 'charlie',
};

console.log(newObj);
