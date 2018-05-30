import Rx from "rxjs";

Rx.Observable.throw()
.subscribe({
  next: n => console.log("N value was emitted!", n),
  error: e => console.log("Enter error state!", e)
});
