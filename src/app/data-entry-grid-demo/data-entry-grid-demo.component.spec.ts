import { TestBed } from '@angular/core/testing';

import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';

import { expect } from '@skyux-sdk/testing';

import { SkyDataEntryGridDemoComponent } from './data-entry-grid-demo.component';

describe('data-entry-grid-context-menu component', () => {
    let fixture: any;
    let component: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
        imports: [SkyAppTestModule]
        });

        fixture = TestBed.createComponent(SkyDataEntryGridDemoComponent);
        component = fixture.componentInstance;

        // fixture.detectChanges();

    });

    afterEach(() => {
    });

    it('datagrid is not available until  `detectChanges`', () => {
        expect(component.gridOptions).not.toBeTruthy();
    });

    it('datagrid is available after `detectChanges`', () => {
        fixture.detectChanges();
        expect(component.gridOptions.api).toBeTruthy();
    });

});
