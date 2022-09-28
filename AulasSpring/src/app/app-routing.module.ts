import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragonballComponent } from './dragonball/dragonball.component';

const routes: Routes = [
  {path: 'db', component : DragonballComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
