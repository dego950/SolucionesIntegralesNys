import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisiosComponent } from './servisios.component';

describe('ServisiosComponent', () => {
  let component: ServisiosComponent;
  let fixture: ComponentFixture<ServisiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServisiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServisiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
