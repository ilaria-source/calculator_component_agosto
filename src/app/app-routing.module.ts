import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent  } from './home/home.component';
import { ClassicComponent } from './classic/classic.component';
import { ScientificComponent } from './scientific/scientific.component';
import { ProgrammerComponent } from './programmer/programmer.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'classic', component:ClassicComponent},
  {path: 'scientific', component:ScientificComponent},
  {path: 'programmer', component:ProgrammerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
