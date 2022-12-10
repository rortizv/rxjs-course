import { interval, fromEvent, takeUntil, skip, tap } from 'rxjs';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('tap antes del skip')),
    skip(2),
    tap(() => console.log('tap despues del skip'))
);

counter$.pipe(
    takeUntil(clickBtn$)
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    })


// El takeUntil nos permite estar emitiendo los valores hasta q otro observable emita su primer valor