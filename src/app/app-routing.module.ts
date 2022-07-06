import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLoginComponent } from './backend/backend-login/backend-login.component';

const routes: Routes = [
  { path: 'login', component: BackendLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
