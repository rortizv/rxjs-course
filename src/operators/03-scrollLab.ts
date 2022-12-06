import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id neque. Lorem ipsum dolor sit amet. Dignissim sodales ut eu sem integer vitae. Mollis aliquam ut porttitor leo a. Sed velit dignissim sodales ut eu sem integer vitae. Eget nunc scelerisque viverra mauris. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Tellus orci ac auctor augue mauris. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Habitasse platea dictumst quisque sagittis purus sit. Lectus sit amet est placerat in egestas erat imperdiet. Ornare quam viverra orci sagittis eu volutpat. Leo a diam sollicitudin tempor id eu nisl. Blandit aliquam etiam erat velit scelerisque in dictum. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Convallis aenean et tortor at risus viverra adipiscing at.
<br/><br/>
Viverra nibh cras pulvinar mattis nunc sed blandit. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer eget aliquet nibh praesent tristique. Arcu dui vivamus arcu felis bibendum. Non consectetur a erat nam at lectus. Eu consequat ac felis donec et odio pellentesque. Potenti nullam ac tortor vitae purus. Id diam maecenas ultricies mi eget. Quis hendrerit dolor magna eget est. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Aliquet sagittis id consectetur purus ut faucibus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet.
<br/><br/>
Magna etiam tempor orci eu lobortis elementum nibh tellus. Varius vel pharetra vel turpis nunc eget. Odio morbi quis commodo odio. Vestibulum lectus mauris ultrices eros in cursus turpis. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Id consectetur purus ut faucibus pulvinar elementum integer enim. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Pretium aenean pharetra magna ac. Viverra justo nec ultrices dui. Mauris a diam maecenas sed.
<br/><br/>
Amet facilisis magna etiam tempor orci. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Elementum tempus egestas sed sed risus pretium quam vulputate. A scelerisque purus semper eget duis at tellus at. Netus et malesuada fames ac turpis egestas sed tempus urna. Vel quam elementum pulvinar etiam non. Sollicitudin ac orci phasellus egestas tellus. Sagittis purus sit amet volutpat consequat mauris nunc congue. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. In cursus turpis massa tincidunt dui. Urna neque viverra justo nec ultrices dui sapien eget mi. Vel fringilla est ullamcorper eget nulla. Eu facilisis sed odio morbi quis commodo odio. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Sagittis orci a scelerisque purus semper eget duis at. Sit amet cursus sit amet dictum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
<br/><br/>
Et netus et malesuada fames ac turpis egestas sed. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Justo nec ultrices dui sapien eget mi. Proin libero nunc consequat interdum. Enim nec dui nunc mattis enim. Eget felis eget nunc lobortis mattis. Sagittis vitae et leo duis ut diam quam. Est sit amet facilisis magna etiam tempor orci eu. Eleifend quam adipiscing vitae proin sagittis. Risus viverra adipiscing at in. Maecenas sed enim ut sem viverra aliquet eget sit amet. Tincidunt arcu non sodales neque sodales ut etiam sit. Nibh tellus molestie nunc non blandit massa enim. Potenti nullam ac tortor vitae purus. Consequat mauris nunc congue nisi vitae. Risus sed vulputate odio ut enim blandit volutpat maecenas. Mollis aliquam ut porttitor leo a diam.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;    
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( event => calcularPorcentajeScroll(event) ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});