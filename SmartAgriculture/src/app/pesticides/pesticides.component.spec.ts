import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticidesComponent } from './pesticides.component';

describe('PesticidesComponent', () => {
  let component: PesticidesComponent;
  let fixture: ComponentFixture<PesticidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PesticidesComponent]
    });
    fixture = TestBed.createComponent(PesticidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
