import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyCounterComponent } from "./my-counter/my-counter.component";
import { MySecondComponentComponent } from "./my-second-component/my-second-component.component";

const routes: Routes = [
  {
    path: "",
    component: MyCounterComponent
  },
  {
    path: "seconde",
    component: MySecondComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
