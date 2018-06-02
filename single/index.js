import Rx from 'rxjs';

Rx.Observable
.range(0, 1)
.single()
.subscribe(n => console.log(n));