import { NgModule } from '@angular/core';

import { AppSkyModule } from './app-sky.module';

import { AgGridModule } from 'ag-grid-angular';
import { MyLibraryResourcesModule } from './shared/my-library-resources.module';
// import { TestLocaleProvider } from './test-locale-provider';
// import { SkyAppLocaleProvider } from '@skyux/i18n';

@NgModule({
  exports: [
    AppSkyModule,
    AgGridModule,
    MyLibraryResourcesModule
  ]
  // imports: [
  //   MyLibraryResourcesModule
  // ]
  // ,
  //  providers: [{
  //   provide: SkyAppLocaleProvider,
  //   useClass: TestLocaleProvider
  // }]
})
export class AppExtrasModule { }
