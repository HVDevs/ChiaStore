import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExampleComponent } from './home-example.component';

describe('HomeExampleComponent', () => {
  let component: HomeExampleComponent;
  let fixture: ComponentFixture<HomeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
