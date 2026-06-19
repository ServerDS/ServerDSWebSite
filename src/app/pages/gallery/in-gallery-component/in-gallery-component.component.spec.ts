import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGalleryComponentComponent } from './in-gallery-component.component';

describe('InGalleryComponentComponent', () => {
  let component: InGalleryComponentComponent;
  let fixture: ComponentFixture<InGalleryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InGalleryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InGalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
