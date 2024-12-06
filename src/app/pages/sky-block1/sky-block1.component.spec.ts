import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyBlock1Component } from './sky-block1.component';

describe('SkyBlock1Component', () => {
  let component: SkyBlock1Component;
  let fixture: ComponentFixture<SkyBlock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyBlock1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyBlock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
