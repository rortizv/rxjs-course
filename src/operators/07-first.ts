import { fromEvent, tap } from 'rxjs';
import { take, first, map } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    tap<MouseEvent>( () => console.log("tap") ),
    map( ({ clientX, clientY }) => ({ clientX, clientY })),
    first( event => event.clientY >= 200 )
)
.subscribe({
    next: val => console.log("next", val),
    complete: () => console.log("complete")
});