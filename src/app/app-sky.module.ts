import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';

import { SkyAlertModule, SkyKeyInfoModule } from '@skyux/indicators';

import { SkyFluidGridModule } from '@skyux/layout';

import { SkyNavbarModule } from '@skyux/navbar';

import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalModule } from '@skyux/modals';
import { SkyAppLinkModule } from '@skyux/router';

import { SkyDataEntryGridCMComponent } from './data-entry-grid-demo/data-entry-grid-context-menu.component';
import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-demo/data-entry-grid-edit-modal.component';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyAppLinkModule,
    SkyAgGridModule,
    SkyToolbarModule,
    SkyDropdownModule,
    SkyModalModule,
    SkySearchModule
  ],
  entryComponents: [ SkyDataEntryGridCMComponent, SkyDataEntryGridEditModalComponent ],
  providers: [ SkyDataEntryGridCMComponent, SkyDataEntryGridEditModalComponent ]
})
export class AppSkyModule { }
