import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SampleGuard } from './guards/sample.guard';
import { PlaygroundComponent } from './components/playground/playground.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', canActivate: [SampleGuard], component: MainComponent},
  {path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
