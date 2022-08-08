import { TestBed } from '@angular/core/testing';

import { AppClienteService } from './app-cliente.service';

describe('AppClienteService', () => {
  let service: AppClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
