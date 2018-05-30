import Rx from "rxjs";
import { fromStandardInput } from "../utility";


fromStandardInput()
.skip(10)
.subscribe(k => console.log(k));

fromStandardInput()
.skipWhile(v => v !== "g")
.subscribe(k => console.log(k));

fromStandardInput()
.skipUntil(Rx.Observable.timer(2000))
.subscribe(k => console.log(k));


