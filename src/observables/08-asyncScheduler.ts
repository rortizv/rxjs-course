import { asyncScheduler } from "rxjs";

const saludar = () => console.log("Come to the dark side");
const saludar2 = (name) => console.log(`Welcome ${name} to the dark side`);

// asyncScheduler.schedule(saludar, 1500);
// asyncScheduler.schedule(saludar2, 2500, "Raph");

const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

// Unsubscribe with setTimeout
// setTimeout(() => {
//     subs.unsubscribe();
// }, 5000);


// Unsuscribe with asyncScheduler
asyncScheduler.schedule(() => subs.unsubscribe(), 6000);