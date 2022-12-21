import { ajax } from "rxjs/ajax";
import { startWith } from 'rxjs/operators';

const loading = document.createElement("div");
loading.classList.add("loading");
loading.innerHTML = "Loading...";

const body = document.querySelector("body");

ajax.getJSON('https://reqres.in/api/users/2?delay=2')
.pipe(
    startWith(true)
)
.subscribe(resp => {
    if (resp === true) {
        body.append(loading);
    } else {
        document.querySelector(".loading").remove();
    }

    console.log(resp);
});