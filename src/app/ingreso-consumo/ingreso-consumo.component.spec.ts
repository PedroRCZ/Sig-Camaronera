import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoConsumoComponent } from './ingreso-consumo.component';

describe('IngresoConsumoComponent', () => {
  let component: IngresoConsumoComponent;
  let fixture: ComponentFixture<IngresoConsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoConsumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
