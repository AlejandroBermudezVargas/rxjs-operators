import Rx from "rxjs";

//Interval

/*
const ticker = Rx.Observable.interval(1000);

ticker.subscribe(a => console.log("A: " + a));

setTimeout(() => {
  ticker.subscribe(a => console.log("B: " + a));
}, 1000);*/

//TIMER

const stopwatch = Rx.Observable.timer(1000, 2000);

stopwatch.subscribe(a => console.log("A: " + a));
