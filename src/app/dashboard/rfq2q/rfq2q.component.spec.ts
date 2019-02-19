import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rfq2qComponent } from './rfq2q.component';

describe('Rfq2qComponent', () => {
  let component: Rfq2qComponent;
  let fixture: ComponentFixture<Rfq2qComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rfq2qComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rfq2qComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
