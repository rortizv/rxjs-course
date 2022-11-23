import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next (observer)", value),
    error: error => console.error("error (observer)", error),
    complete: () => console.log("complete (observer)")
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next("Hello");
    subscriber.next("World");

    // const x = null;
    // x.name = 'Raph';
    subscriber.complete();
});

obs$.subscribe(
    observer
//   {    
//     next: value => console.log('next', value),
//     error: err => console.error('error', err),
//     complete: () => console.log('complete')
//}
);