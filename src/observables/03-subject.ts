import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next (observer)", value),
    error: error => console.error("error (observer)", error),
    complete: () => console.log("complete (observer)")
}

const interval$ = new Observable<number>(subscriber => {

    const interval = setInterval(
        () => subscriber.next(Math.random() ), 2000
    );

    return () => {
        clearInterval(interval);
    }
});

// Multiple Cast
// It is also an observer
// Next, error and complete

const subject$ = new Subject();
const mySubscription = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(45);
    subject$.complete();
    mySubscription.unsubscribe();
}, 4000);