import Rx from 'rxjs';


Rx.Observable
//.range(1, 9)
.interval(500)
.take(5)
.subscribe(a => console.log("Take Operator: ", a));


Rx.Observable
//.range(1, 9)
.interval(500)
.takeWhile(n => n < 7)
.subscribe(a => console.log("takeWhile Operator: ", a));


Rx.Observable
//.range(1, 9)
.interval(100)
.takeUntil(Rx.Observable.timer(2000))
.subscribe(a => console.log("takeUntil Operator: ", a));



