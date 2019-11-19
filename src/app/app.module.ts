import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ServiceService } from './service/service.service';
import { FacultyPageComponent } from './faculty/faculty-page/faculty-page.component';
import { FacultyListComponent} from './faculty/faculty-list/faculty-list.component';
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
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FacultyPageComponent,
    FacultyListComponent,
    FacultyAddComponent,
    FacultyEditComponent,
    BuildingPageComponent,
    BuildingListComponent,
    BuildingAddComponent,
    BuildingEditComponent,
    LaboratoryPageComponent,
    LaboratoryListComponent,
    LaboratoryAddComponent,
    LaboratoryEditComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
