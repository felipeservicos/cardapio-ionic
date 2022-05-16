import { TestBed } from '@angular/core/testing';

import { ServicoDeCardapioService } from './servico-de-cardapio.service';

describe('ServicoDeCardapioService', () => {
  let service: ServicoDeCardapioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoDeCardapioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
