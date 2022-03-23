import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAseguramientoComponent } from './control-aseguramiento.component';

describe('ControlAseguramientoComponent', () => {
  let component: ControlAseguramientoComponent;
  let fixture: ComponentFixture<ControlAseguramientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAseguramientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAseguramientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
