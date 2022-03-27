import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLargeBlockComponent } from './document-large-block.component';

describe('DocumentBlockComponent', () => {
  let component: DocumentLargeBlockComponent;
  let fixture: ComponentFixture<DocumentLargeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentLargeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLargeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
