import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

import { ICellRendererParams } from 'ag-grid-community';

import { DataService} from '../services/data.service';

@Component({
  selector: 'data-entry-grid-context-menu',
  templateUrl: './data-entry-grid-context-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridContextMenuComponent implements ICellRendererAngularComp {
  private movieName: string;
  private params: ICellRendererParams;

  public agInit(params: ICellRendererParams): void {
    this.params = params;
    this.movieName = this.params.data && this.params.data.movieName;
  }

  public refresh(): boolean {
    return false;
  }

   public actionClicked(action: string): void {
    alert(`${action} clicked for ${this.movieName}`);
    let dataservice = new DataService();
    let result = dataservice.removeData(this.movieName);
    if (result) {
      alert('Deleted');
    }
  }
}
