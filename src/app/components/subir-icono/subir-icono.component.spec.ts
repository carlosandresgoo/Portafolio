import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirIconoComponent } from './subir-icono.component';

describe('SubirIconoComponent', () => {
  let component: SubirIconoComponent;
  let fixture: ComponentFixture<SubirIconoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirIconoComponent]
    });
    fixture = TestBed.createComponent(SubirIconoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
