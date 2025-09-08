import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season8Component } from './season8.component';

describe('Season8Component', () => {
  let component: Season8Component;
  let fixture: ComponentFixture<Season8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Season8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
