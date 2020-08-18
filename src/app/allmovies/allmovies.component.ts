import { Component, OnInit } from '@angular/core';

import { GridApi, GridReadyEvent, GridOptions } from 'ag-grid-community';

import { SkyCellType, SkyAgGridService } from '@skyux/ag-grid';

import { SkyModalService, SkyModalCloseArgs } from '@skyux/modals';

import { GridEditModalContext } from './data-entry-grid-edit-modal-context';

import { GridEditModalComponent } from './data-entry-grid-edit-modal.component';

import { GridContextMenuComponent } from './data-entry-grid-context-menu.component';

import { DataService} from '../services/data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'all-movie',
  templateUrl: './allmovies.component.html'
})
export class AllmoviesComponent implements OnInit {
    public gridData: Movie [] ;

    public columnDefs = [
        { field: 'selected', type: SkyCellType.RowSelector },
        { colId: 'context', headerName: '', maxWidth: 50, sortable: false, cellRendererFramework: GridContextMenuComponent },
        { headerName: 'Movie Name', field: 'movieName', sortable: true, filter: true },
        { headerName: 'Movie Director', field: 'movieDirector', sortable: true, filter: true, type: SkyCellType.Text, maxWidth: 100 },
        { headerName: 'Movie Actor', field: 'movieActor', sortable: true, filter: true, type: SkyCellType.Text, maxWidth: 100 },
        { headerName: 'Movie Type', field: 'movieType', sortable: false, filter: true },
        { headerName: 'Movie Released Year', field: 'movieReleased', type: SkyCellType.Number, sortable: false, filter: true },
        { headerName: 'Movie Rating', field: 'movieRating', type: SkyCellType.Number, sortable: false, filter: true }
    ];

    public movieData: Movie[] ;

    public gridApi: GridApi;
    public gridOptions: GridOptions;
    public searchText: string;

    constructor(
        private userservice: DataService,
        private agGridService: SkyAgGridService,
        private modalService: SkyModalService
    ) { }

    public ngOnInit(): void {
        this.getMovies();
        this.gridOptions = {
            columnDefs: this.columnDefs,
            onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
        };
        this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
    }

     public ngOnChange ()  {

     }

     public getMovies () {
         let movieData = this.userservice.getMovies();
         if ( movieData != null) {
             this.gridData = movieData;
         }
     }

     public onGridReady(gridReadyEvent: GridReadyEvent): void {
        this.gridApi = gridReadyEvent.api;

        this.gridApi.sizeColumnsToFit();
    }

     public openModal(): void {
        const context = new GridEditModalContext();
        context.gridData = this.gridData;

        const options = {
        providers: [{ provide: GridEditModalContext, useValue: context }],
        ariaDescribedBy: 'docs-edit-grid-modal-content',
        size: 'large'
        };

        const modalInstance = this.modalService.open(GridEditModalComponent, options);

        modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
        if (result.reason === 'cancel' || result.reason === 'close') {
            alert('Edits canceled!');
        } else {
            this.gridData = result.data;
            let output = this.editData(result.data);
            this.gridApi.refreshCells();

            alert('Saving data! ' + output);
        }
        });
    }

    public editData (movieData: Movie[]) {
        let result = this.userservice.editData(movieData);
        return result;
    }

    public searchApplied(searchText: string): void {
        this.searchText = searchText;
        this.gridApi.setQuickFilter(searchText);
    }
}
