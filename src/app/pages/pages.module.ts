// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Aplicação
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})

export class PagesModule { }
