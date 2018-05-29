import Rx from "rxjs";

Rx.Observable.of(1, 2, 3, "Four", [], {})
.subscribe(e => console.log(e));
