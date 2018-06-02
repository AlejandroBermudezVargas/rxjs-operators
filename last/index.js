import Rx from 'rxjs';

Rx.Observable
//.range(1, 9)
.interval(5)
.take(8)
//.last()
.last(n => n % 2 == 0)
.subscribe(e => console.log(e)) 