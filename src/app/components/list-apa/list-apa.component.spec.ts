import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApaComponent } from './list-apa.component';

describe('ListApaComponent', () => {
  let component: ListApaComponent;
  let fixture: ComponentFixture<ListApaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
