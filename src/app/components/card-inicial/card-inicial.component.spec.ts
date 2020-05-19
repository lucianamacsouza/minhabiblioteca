import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInicialComponent } from './card-inicial.component';

describe('CardInicialComponent', () => {
  let component: CardInicialComponent;
  let fixture: ComponentFixture<CardInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
