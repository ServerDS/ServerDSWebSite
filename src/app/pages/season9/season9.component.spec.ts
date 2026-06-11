import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season9Component } from './season9.component';

describe('Season9Component', () => {
  let component: Season9Component;
  let fixture: ComponentFixture<Season9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Season9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
