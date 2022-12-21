import { fromEvent, tap, map, mergeMap, pluck, catchError, of } from "rxjs";
import { ajax } from "rxjs/ajax";


const peticionHttpLogin = (user) => ajax.post('https://reqres.in/api/login?delay=1', user)
                                    .pipe(
                                        pluck('response', 'token'),
                                        catchError(err => of('invalid credentials'))
                                    );

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const button = document.createElement('button');

inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.required = true;
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.required = true;

button.innerHTML = 'Login';
button.style.setProperty('border-radius', '5px');


form.append(inputEmail, inputPassword, button);
document.querySelector('body').append(form);

const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        email: ev.target[0].value,
        password: ev.target[1].value
    })),
    mergeMap(credentials => ajax.post('https://reqres.in/api/login?delay=1', credentials)),
    pluck('response', 'token'),
    catchError(err => of('invalid credentials'))    
);
    
submitForm$.subscribe(token => console.log(token));