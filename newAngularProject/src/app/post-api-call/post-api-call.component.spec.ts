import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiCallComponent } from './post-api-call.component';

describe('PostApiCallComponent', () => {
  let component: PostApiCallComponent;
  let fixture: ComponentFixture<PostApiCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostApiCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
