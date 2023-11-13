import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropComponent } from './crop/crop.component';

const routes: Routes = [
  {
    path:'crop',
    component:CropComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
