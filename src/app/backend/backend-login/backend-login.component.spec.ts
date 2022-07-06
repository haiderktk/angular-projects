import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendLoginComponent } from './backend-login.component';

describe('BackendLoginComponent', () => {
  let component: BackendLoginComponent;
  let fixture: ComponentFixture<BackendLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackendLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
