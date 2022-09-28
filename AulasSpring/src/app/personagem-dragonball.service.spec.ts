import { TestBed } from '@angular/core/testing';

import { PersonagemDragonballService } from './personagem-dragonball.service';

describe('PersonagemDragonballService', () => {
  let service: PersonagemDragonballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonagemDragonballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
