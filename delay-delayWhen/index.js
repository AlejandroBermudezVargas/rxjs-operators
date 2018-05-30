import Rx from "rxjs";

/*
Rx.Observable.of(42)
.do(() => console.log("Before first delay"))
.delay(1200)
.do(() => console.log("Before second delay"))
.delay(1200)
.subscribe(v => console.log("Subscribe: ", v));*/

console.log("STARTING!");
Rx.Observable.range(1, 9)
  .delayWhen(n => Rx.Observable.timer(n * 1000))
  .subscribe(a => console.log(a));
