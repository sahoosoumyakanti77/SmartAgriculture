import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceLogComponent } from './maintenance-log.component';

describe('MaintenanceLogComponent', () => {
  let component: MaintenanceLogComponent;
  let fixture: ComponentFixture<MaintenanceLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaintenanceLogComponent]
    });
    fixture = TestBed.createComponent(MaintenanceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
