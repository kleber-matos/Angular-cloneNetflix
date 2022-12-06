import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardRigthComponent } from './small-card-rigth.component';

describe('SmallCardRigthComponent', () => {
  let component: SmallCardRigthComponent;
  let fixture: ComponentFixture<SmallCardRigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardRigthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCardRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
