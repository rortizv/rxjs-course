import { interval, reduce, take, tap } from 'rxjs';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalReducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
};

const total = numbers.reduce( totalReducer, 0);
console.log('total arr', total);

interval(500).pipe(
    take(10),
    tap(console.log),
    reduce( totalReducer)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
});