import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasCalidadComponent } from './sistemas-calidad.component';

describe('SistemasCalidadComponent', () => {
  let component: SistemasCalidadComponent;
  let fixture: ComponentFixture<SistemasCalidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasCalidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasCalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
