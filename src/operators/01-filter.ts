import { from, fromEvent, range } from "rxjs";
import { filter, map } from 'rxjs/operators';

interface Personaje {
    tipo: string;
    nombre: string;
}


range(20,30).pipe(
    filter( (value, i) => {
        console.log('Index ', i);
        return value % 2 === 0;
    })
)//.subscribe(console.log);

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Ironman'
    },
    {
        tipo: 'heroe',
        nombre: 'Spiderman'
    },
    {
        tipo: 'villano',
        nombre: 'Thanos'
    }
];


// Filter an array of objects for value of a property
from(personajes).pipe(
    filter( p => p.tipo === 'heroe')
).subscribe(console.log);


// Create an observable of keyup event
const keyup$ = fromEvent<KeyboardEvent >(document, 'keyup').pipe(
    map( event => event.key ),
    filter( key => key === 'Enter')
);

keyup$.subscribe(console.log);