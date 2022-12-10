import { from } from "rxjs";
import { distinctUntilKeyChanged } from "rxjs/operators";

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Kakaroto'
    },
    {
        nombre: 'Vegeta'
    },
    {
        nombre: 'Gojan'
    },
    {
        nombre: 'Kakaroto'
    }
];

from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);