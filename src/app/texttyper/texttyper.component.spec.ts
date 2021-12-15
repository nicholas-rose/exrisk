import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttyperComponent } from './texttyper.component';

describe('TexttyperComponent', () => {
  let component: TexttyperComponent;
  let fixture: ComponentFixture<TexttyperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexttyperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexttyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
