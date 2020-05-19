import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesqLivrosComponent } from './pesq-livros.component';

describe('PesqLivrosComponent', () => {
  let component: PesqLivrosComponent;
  let fixture: ComponentFixture<PesqLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesqLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesqLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
