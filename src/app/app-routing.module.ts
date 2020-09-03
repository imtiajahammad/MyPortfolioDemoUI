import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';


const routes: Routes = [
  {path:'client-panel',component:ClientPanelComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'',component:ClientPanelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ClientPanelComponent,AdminPanelComponent]