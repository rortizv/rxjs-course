import { from, map, reduce, scan } from 'rxjs';

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalAcumulador = (acc, curr) => acc + curr;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);


// Redux
interface User {
    id?: string;
    autenticated?: boolean;
    token?: string;
    age?: number;
}

const user: User[] = [
    { id: '001', autenticated: false, token: null },
    { id: '001', autenticated: true, token: 'ABC' },
    { id: '001', autenticated: true, token: 'ABC123' }
];

const state$ = from(user).pipe(
    scan<User>( (acc, curr) => {
        return ({ ...acc, ...curr });
    } )
);

const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe(console.log);