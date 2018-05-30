import Rx from "rxjs";

const customObsevable = Rx.Observable.create(observer => {
    observer.next(42);
    //observer.complete(108);
    setInterval(() => {
        observer.next("Interval!!!")
    }, 500);

    setTimeout(() => {
        observer.complete();
    }, 2500);

});


customObsevable
.subscribe({
    next: a =>  console.log("NEXT: ", a),
    complete: b => console.log("COMPLETE: ", b)
})