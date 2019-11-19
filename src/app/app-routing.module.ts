import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacultyPageComponent } from './faculty/faculty-page/faculty-page.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { FacultyAddComponent } from './faculty/faculty-add/faculty-add.component';
import { FacultyEditComponent } from './faculty/faculty-edit/faculty-edit.component';
import { BuildingPageComponent } from './building/building-page/building-page.component';
import { BuildingListComponent } from './building/building-list/building-list.component';
import { BuildingAddComponent } from './building/building-add/building-add.component';
import { BuildingEditComponent } from './building/building-edit/building-edit.component';
import { LaboratoryPageComponent } from './laboratory/laboratory-page/laboratory-page.component';
import { LaboratoryListComponent } from './laboratory/laboratory-list/laboratory-list.component';
import { LaboratoryAddComponent } from './laboratory/laboratory-add/laboratory-add.component';
import { LaboratoryEditComponent } from './laboratory/laboratory-edit/laboratory-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'faculty', component: FacultyPageComponent},
  {path: 'faculty-list', component: FacultyListComponent},
  {path: 'faculty-add', component: FacultyAddComponent},
  {path: 'faculty-edit', component: FacultyEditComponent},
  {path: 'building', component: BuildingPageComponent},
  {path: 'building-list', component: BuildingListComponent},
  {path: 'building-add', component: BuildingAddComponent},
  {path: 'building-edit', component: BuildingEditComponent},
  {path: 'laboratory', component: LaboratoryPageComponent},
  {path: 'laboratory-list', component: LaboratoryListComponent},
  {path: 'laboratory-add', component: LaboratoryAddComponent},
  {path: 'laboratory-edit', component: LaboratoryEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
