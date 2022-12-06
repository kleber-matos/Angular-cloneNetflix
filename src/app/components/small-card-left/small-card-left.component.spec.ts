import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardLeftComponent } from './small-card-left.component';

describe('SmallCardLeftComponent', () => {
  let component: SmallCardLeftComponent;
  let fixture: ComponentFixture<SmallCardLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
