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
import { SkyListModule, SkyListToolbarModule, SkyListPagingModule } from '@skyux/list-builder';
import { SkyListViewGridModule } from '@skyux/list-builder-view-grids';

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
    SkySearchModule,
    SkyListModule,
    SkyListToolbarModule,
    SkyListViewGridModule,
    SkyListPagingModule
  ],
  entryComponents: [ GridContextMenuComponent, GridEditModalComponent ],
  providers: [ GridContextMenuComponent, GridEditModalComponent ]
})
export class AppSkyModule { }
