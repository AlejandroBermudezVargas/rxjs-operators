import Rx from 'rxjs';

Rx.Observable
.range(1, 20)
.groupBy(n => n % 2 == 0)
.mergeMap(nGroup => nGroup.toArray())
.subscribe(a => console.log(a))