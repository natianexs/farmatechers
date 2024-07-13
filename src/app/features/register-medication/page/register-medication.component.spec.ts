import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedicationComponent } from './register-medication.component';

describe('RegisterMedicationComponent', () => {
  let component: RegisterMedicationComponent;
  let fixture: ComponentFixture<RegisterMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterMedicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
