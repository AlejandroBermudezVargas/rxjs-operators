import Rx from 'rxjs';
import { fromStandardInput } from '../utility';

fromStandardInput()
.sample(
    Rx.Observable.interval(1000)
)
.subscribe(n => console.log(n))