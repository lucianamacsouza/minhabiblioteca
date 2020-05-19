import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesqProprietariosComponent } from './pesq-proprietarios.component';

describe('PesqProprietariosComponent', () => {
  let component: PesqProprietariosComponent;
  let fixture: ComponentFixture<PesqProprietariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesqProprietariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesqProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
