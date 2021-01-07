import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CountService } from "../shared/service/counter.service";
// import { CountService } from "../shared/service/counter.service";

@Component({
  selector: "app-my-second-component",
  templateUrl: "./my-second-component.component.html",
  styleUrls: ["./my-second-component.component.css"]
})
export class MySecondComponentComponent {
  private localCount;
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,
    private countService: CountService // private CountService: CountService
  ) {
    this.count$ = store.select("count");
    this.count$.subscribe(localCount => {
      console.log("countchange", localCount);
      this.localCount = localCount;
    });
  }
  consoleCount() {
    console.log("count", this.localCount);
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
