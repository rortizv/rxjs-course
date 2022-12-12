import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, of } from 'rxjs';

const url = 'https://httpbin.org/delay/1';

// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp: AjaxError) => {
    console.warn('Error: ', resp.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.pipe(
    catchError(manejaError)
)
.subscribe(data => console.log('data:', data));