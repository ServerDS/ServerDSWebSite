import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season6Component } from './season6.component';

describe('Season6Component', () => {
  let component: Season6Component;
  let fixture: ComponentFixture<Season6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Season6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
