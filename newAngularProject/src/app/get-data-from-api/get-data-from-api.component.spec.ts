import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataFromAPIComponent } from './get-data-from-api.component';

describe('GetDataFromAPIComponent', () => {
  let component: GetDataFromAPIComponent;
  let fixture: ComponentFixture<GetDataFromAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataFromAPIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataFromAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
