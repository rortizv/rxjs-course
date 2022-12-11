import { auditTime, fromEvent, tap } from 'rxjs';
import { map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, "click");

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    tap(val => console.log("tap", val)),
    auditTime(3000)
).subscribe(console.log);