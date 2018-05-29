import Rx from "rxjs";

//map
const range = Rx.Observable.range(1, 9);
range.map(n => n * n).subscribe(a => console.log(a));


//mapTo
const notificationAPI = Rx.Observable.interval(1000);

notificationAPI
  .mapTo({ type: "NOTIFICATION_ARRIVED" })
  .subscribe(e => console.log(e));
