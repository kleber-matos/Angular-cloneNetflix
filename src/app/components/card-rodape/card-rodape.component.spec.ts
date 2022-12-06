import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRodapeComponent } from './card-rodape.component';

describe('CardRodapeComponent', () => {
  let component: CardRodapeComponent;
  let fixture: ComponentFixture<CardRodapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRodapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
