import Rx from "rxjs";

Rx.Observable.empty().subscribe({
  complete: a => console.log("Completed: ", a),
  next: a => console.log("Emit: ", a)
});
