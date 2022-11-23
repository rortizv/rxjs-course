import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next (observer)", value),
    error: error => console.error("error (observer)", error),
    complete: () => console.log("complete (observer)")
}

const interval$ = new Observable<number>(subscriber => {

    var counter = 0;

    const interval = setInterval(() => {
        counter++;
        subscriber.next(counter);
        console.log(counter);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Interval cleared');
    }
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);

subscription1.add(subscription2);

setTimeout(() => {
    subscription1.unsubscribe();
    console.log('Timeout cleared');
}, 6000);