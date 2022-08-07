import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "./../authentication/page404/page404.component";
import { ProfileComponent } from "./profile/profile.component";
const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentuserRoutingModule {}