import { Component, OnInit } from '@angular/core';

import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';

import { SkyModalInstance } from '@skyux/modals';

import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';

// import { SkyAgGridDemoRow } from './data-entry-grid-demo-data';
import { Movie } from './../model/movie';

import { GridEditModalContext } from './data-entry-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-edit-modal-form',
  templateUrl: './data-entry-grid-edit-model.component.html'
})
export class GridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: Movie[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: GridEditModalContext,
    public instance: SkyModalInstance
  ) { }

  public ngOnInit(): void {
    this.gridData = this.context.gridData;

    this.columnDefs = [      
      { headerName: 'Movie Name', field: 'movieName', sortable: true, filter: true },
      { headerName: 'Movie Director', field: 'movieDirector', sortable: true, filter: true, type: SkyCellType.Text, maxWidth: 100 , editable: true},
      { headerName: 'Movie Actor', field: 'movieActor', sortable: true, filter: true, type: SkyCellType.Text, maxWidth: 100 , editable: true},
      { headerName: 'Movie Type', field: 'movieType', sortable: false, filter: true , editable: true},
      { headerName: 'Movie Released Year', field: 'movieReleased', type: SkyCellType.Number, sortable: false, filter: true , editable: true},
      { headerName: 'Movie Rating', field: 'movieRating', type: SkyCellType.Number, sortable: false, filter: true, editable: true }
    ];

    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getEditableGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }
}
