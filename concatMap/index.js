import Rx from 'rxjs';

Rx.Observable
.interval(100)
.concatMap(n => Rx.Observable.range(0, n + 1))
//.map(n => `range #${n}`)
.subscribe(a => console.log(a));
