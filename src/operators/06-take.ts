import { of, take, tap } from 'rxjs';

const numeros$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numeros$.pipe(
    tap( x => console.log('tap', x) ),
    take(3)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});