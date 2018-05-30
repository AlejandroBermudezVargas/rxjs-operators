import Rx from "rxjs";

const range =  Rx.Observable
.interval(100)
.take(100);

range
.map(n => n*2)
.do(value => console.log("Map Value: ", value))
.every(n => n % 2 == 0)
.subscribe(a => console.log(a))