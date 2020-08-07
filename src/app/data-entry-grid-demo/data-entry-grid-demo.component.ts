import { Component, OnInit } from '@angular/core';

import { GridApi, GridReadyEvent, GridOptions } from 'ag-grid-community';

import { SkyCellType, SkyAgGridService } from '@skyux/ag-grid';

import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';

import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';

import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-edit-modal.component';

import { SkyDataEntryGridCMComponent } from './data-entry-grid-context-menu.component';

// import { SKY_AG_GRID_DEMO_DATA } from './data-entry-grid-demo-data';

import { SkyAgGridDemoRow } from './data-entry-grid-demo-data';

import { DataService} from '../services/data.service';

@Component({
  selector: 'sky-data-entry-grid-demo',
  templateUrl: './data-entry-grid-demo.component.html',
  styleUrls: ['data-entry-grid-demo.component.scss']
})
export class SkyDataEntryGridDemoComponent implements OnInit {

  public gridData: SkyAgGridDemoRow [] ;
  public columnDefs = [
    { field: 'selected', type: SkyCellType.RowSelector },
    { colId: 'context', headerName: '', maxWidth: 50, sortable: false, cellRendererFramework: SkyDataEntryGridCMComponent },
    { headerName: 'First Name', field: 'firstname', sortable: true, filter: true },
    { headerName: 'Last Name', field: 'lastname', sortable: true, filter: true },
    { headerName: 'Contact', field: 'contact', sortable: true, filter: true, type: SkyCellType.Number, maxWidth: 60 },
    { headerName: 'Email', field: 'email', sortable: false, filter: true },
    { headerName: 'DateOfBirth', field: 'dob', type: SkyCellType.Date },
    { headerName: 'Address', field: 'address' }
  ];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;

  constructor(
    private agGridService: SkyAgGridService,
    private modalService: SkyModalService,
    private userservice: DataService
  ) { }

  public ngOnInit(): void {
    this.gridData = this.userservice.getUser();
    this.gridOptions = {
      columnDefs: this.columnDefs,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
      // rowStyle: { background: 'black' },
      // defaultColDef: {
      //   flex: 1,
      //   minWidth: 150,
      //   resizable: true,
      // },
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  public openModal(): void {
    const context = new SkyDataEntryGridEditModalContext();
    context.gridData = this.gridData;

    const options = {
      providers: [{ provide: SkyDataEntryGridEditModalContext, useValue: context }],
      ariaDescribedBy: 'docs-edit-grid-modal-content',
      size: 'large'
    };

    const modalInstance = this.modalService.open(SkyDataEntryGridEditModalComponent, options);

    modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
      if (result.reason === 'cancel' || result.reason === 'close') {
        alert('Edits canceled!');
      } else {
        this.gridData = result.data;
        this.gridApi.refreshCells();
        alert('Saving data!');
      }
    });
  }

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }
}
