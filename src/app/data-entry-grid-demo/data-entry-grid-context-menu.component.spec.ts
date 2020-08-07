import { TestBed } from '@angular/core/testing';

import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';

import { expect } from '@skyux-sdk/testing';

import { SkyDataEntryGridCMComponent } from './data-entry-grid-context-menu.component' ;

describe('data-entry-grid-context-menu component', () => {
    let contextMenu: SkyDataEntryGridCMComponent ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });

    contextMenu = new SkyDataEntryGridCMComponent();
  });

  afterEach(() => {
  });

   // Test case for the form Creation
  it('Return action Name', () => {
      let output = contextMenu.actionClicked('Delete');
    // Using custom expect matchers
    expect(output).toBe('Delete');

    output = contextMenu.actionClicked('Mark Inactive');
    // Using custom expect matchers
    expect(output).toBe('Mark Inactive');

    output = contextMenu.actionClicked('More Info');
    // Using custom expect matchers
    expect(output).toBe('More Info');

  });
});
