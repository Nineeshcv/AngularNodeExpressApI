import { TestBed } from '@angular/core/testing';

import { NpmrcproviderService } from './npmrcprovider.service';

describe('NpmrcproviderService', () => {
  let service: NpmrcproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmrcproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
