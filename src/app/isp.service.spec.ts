import { TestBed } from '@angular/core/testing';

import { IspService } from './isp.service';

describe('IspService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IspService = TestBed.get(IspService);
    expect(service).toBeTruthy();
  });
});
