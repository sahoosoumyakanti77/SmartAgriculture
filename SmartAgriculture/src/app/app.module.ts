import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CropComponent } from './crop/crop.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { FarmerComponent } from './farmer/farmer.component';
import { MaintenanceLogComponent } from './maintenance-log/maintenance-log.component';
import { PackageInfoComponent } from './package-info/package-info.component';
import { PesticidesComponent } from './pesticides/pesticides.component';
import { UsersComponent } from './users/users.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    CropComponent,
    EquipmentComponent,
    FarmerComponent,
    MaintenanceLogComponent,
    PackageInfoComponent,
    PesticidesComponent,
    UsersComponent,
    WeatherComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule , FormsModule,
    
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
