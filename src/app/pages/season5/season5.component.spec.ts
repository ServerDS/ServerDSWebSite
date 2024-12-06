import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season5Component } from './season5.component';

describe('Season5Component', () => {
  let component: Season5Component;
  let fixture: ComponentFixture<Season5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Season5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
