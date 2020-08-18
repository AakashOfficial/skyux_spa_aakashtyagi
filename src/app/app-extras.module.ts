import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  exports: [
    AppSkyModule,
    AgGridModule
  ]
})
export class AppExtrasModule { }
