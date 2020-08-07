import { TestBed } from '@angular/core/testing';

import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';

import { expect } from '@skyux-sdk/testing';

import { SkyDataEntryGridEditModalComponent } from './data-entry-grid-edit-modal.component';
// import { SkyModalInstance } from '@skyux/modals';
// import { SkyDataEntryGridEditModalContext } from './data-entry-grid-edit-modal-context';
// import { SkyAgGridService } from '@skyux/ag-grid';

describe('data-entry-grid-context-menu component', () => {
    let fixture: any;
    let component: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [SkyAppTestModule]
        });

        fixture = TestBed.createComponent(SkyDataEntryGridEditModalComponent);
        component = fixture.componentInstance;

        // fixture.detectChanges();

    });

    afterEach(() => {
    });

    // it('edit modal is not available until  `detectChanges`', () => {
    //     expect(component.gridOptions).not.toBeTruthy();
    // });

    // it('edit modal is available after `detectChanges`', () => {
    //     fixture.detectChanges();
    //     expect(component.gridOptions).toBeTruthy();
    // });

});
