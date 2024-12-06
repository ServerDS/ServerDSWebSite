import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Season4Component } from './season4.component';

describe('Season4Component', () => {
  let component: Season4Component;
  let fixture: ComponentFixture<Season4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Season4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Season4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
