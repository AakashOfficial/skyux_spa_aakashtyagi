import { Component, OnInit } from '@angular/core';

import { SkyAgGridService, SkyCellType } from '@skyux/ag-grid';

import { SkyModalInstance } from '@skyux/modals';

import { ColDef, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';

import { SkyAgGridDemoRow } from './data-entry-grid-demo-data';

import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';

@Component({
  selector: 'sky-demo-edit-modal-form',
  templateUrl: './data-entry-grid-edit-modal.component.html'
})
export class SkyDataEntryGridEditModalComponent implements OnInit {
  public columnDefs: ColDef[];
  public gridApi: GridApi;
  public gridData: SkyAgGridDemoRow[];
  public gridOptions: GridOptions;

  constructor(
    private agGridService: SkyAgGridService,
    public context: SkyDataEntryGridEditModalContext,
    public instance: SkyModalInstance
  ) { }

  public ngOnInit(): void {
    this.gridData = this.context.gridData;

    this.columnDefs = [    
      {headerName: 'First Name', field: 'firstname' },
      {headerName: 'Last Name', field: 'lastname' },

      {headerName: 'Contact', field: 'contact',sortable: true, filter: true, 
      type: SkyCellType.Number, maxWidth: 200, editable: true},
    {headerName: 'Email', field: 'email',sortable: false, filter: true , editable: true},
    {headerName: 'DateOfBirth', field: 'dob', type: SkyCellType.Date},
    {headerName: 'Address', field: 'address', editable: true}  ,
      
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