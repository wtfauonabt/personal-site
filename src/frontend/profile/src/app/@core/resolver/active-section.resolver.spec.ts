import { TestBed } from '@angular/core/testing';

import { ActiveSectionResolver } from './active-section.resolver';

describe('ActiveSectionResolver', () => {
  let resolver: ActiveSectionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ActiveSectionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
