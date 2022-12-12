import { map, catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response ) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('Error en: ', err.message);
    return of([]);
}

// const fetchUsers = fetch(url);

// fetchUsers
//     .then(manejaErrores)
//     .then((response) => response.json())
//     .then((data) => console.log('Data: ', data))
//     .catch(err => console.warn('Error en Usuarios!', err));


ajax(url).pipe(
    map(resp => resp.response),
    catchError(atrapaError)
).subscribe(users => console.log('Usuarios: ', users));