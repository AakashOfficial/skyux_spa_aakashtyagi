import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

import { ICellRendererParams } from 'ag-grid-community';
import {SkyConfirmButtonAction, SkyConfirmInstance, SkyConfirmService, SkyConfirmType } from '@skyux/modals';

import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'data-entry-grid-context-menu',
  templateUrl: './data-entry-grid-context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridContextMenuComponent implements ICellRendererAngularComp {

  private movieName: string;
  private params: ICellRendererParams;

  public selectedAction: SkyConfirmButtonAction;

  public selectedText: string;

  constructor(
    private confirmService: SkyConfirmService,
    private route: Router
  ) { }

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.movieName = this.params.data && this.params.data.movieName;
  }

  public refresh(): boolean {
    return false;
  }

   public actionClicked(action: string): void {
      alert(`${action} clicked for ${this.movieName}`);
  }

  public openYesCancelConfirm() {

    const dialog: SkyConfirmInstance = this.confirmService.open({
      message: 'Do you wish to Delete?',
      type: SkyConfirmType.YesCancel
    });

    dialog.closed.subscribe((result: any) => {
      if(result.action === 'yes'){
        let dataservice = new DataService();
        let result = dataservice.removeData(this.movieName);
        if (result) {
          // window.location.reload();
          this.route.navigate(['/toptenmovie']);
          alert('Deleted');
        }
      }
    });
  }

}
