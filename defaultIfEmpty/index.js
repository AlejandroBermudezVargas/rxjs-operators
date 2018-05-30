import Rx from 'rxjs';
import { defaultIfEmpty } from 'rxjs/operator/defaultIfEmpty';

Rx.Observable
.empty()
.defaultIfEmpty(42)
.subscribe(a => console.log("Where's the value?? ", a))