import { NgModule } from '@angular/core';

import { SkyAvatarModule } from '@skyux/avatar';

import { SkyAlertModule, SkyKeyInfoModule } from '@skyux/indicators';

import { SkyFluidGridModule } from '@skyux/layout';

import { SkyNavbarModule } from '@skyux/navbar';

import { SkyAppLinkModule } from '@skyux/router';

import { SkyAgGridModule } from '@skyux/ag-grid';
import { SkyDropdownModule } from '@skyux/popovers';
import { SkyToolbarModule } from '@skyux/layout';
import { SkySearchModule } from '@skyux/lookup';
import { SkyModalModule } from '@skyux/modals';

import { GridContextMenuComponent } from './allmovies/data-entry-grid-context-menu.component';
import { GridEditModalComponent } from './allmovies/data-entry-grid-edit-modal.component';

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule,
    SkyAppLinkModule,
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
  entryComponents: [ GridContextMenuComponent, GridEditModalComponent ],
  providers: [ GridContextMenuComponent, GridEditModalComponent ]
})
export class AppSkyModule { }
