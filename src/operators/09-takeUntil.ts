import { interval, fromEvent, takeUntil } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click');

counter$.pipe(
    takeUntil(clickBtn$)
)
    .subscribe({
        next: val => console.log('next:', val),
        complete: () => console.log('complete')
    })


// El takeUntil nos permite estar emitiendo los valores hasta q otro observable emita su primer valor