import { of } from "rxjs";

const obs$ = of(...[1,2,3,4,5,6],2,3,4,5);

console.log('Start of obs$');

obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('End of sequence')
);
console.log('End of obs$');