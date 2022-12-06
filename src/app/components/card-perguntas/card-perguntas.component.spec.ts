import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPerguntasComponent } from './card-perguntas.component';

describe('CardPerguntasComponent', () => {
  let component: CardPerguntasComponent;
  let fixture: ComponentFixture<CardPerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPerguntasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
