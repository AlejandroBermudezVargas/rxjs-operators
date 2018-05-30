import Rx from "rxjs";

Rx.Observable
.interval(1000)
.first(n => n === 3)
.subscribe(a => console.log(a))
