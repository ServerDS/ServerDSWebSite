import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season7Component } from './season7.component';

describe('Season7Component', () => {
  let component: Season7Component;
  let fixture: ComponentFixture<Season7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Season7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
