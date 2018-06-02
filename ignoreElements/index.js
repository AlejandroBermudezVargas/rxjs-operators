import Rx from "rxjs";

Rx.Observable
.range(1, 10)
.ignoreElements()
.subscribe({
  next: n => console.log(n),
  complete: c => console.log("Completeee! ", c)
});
