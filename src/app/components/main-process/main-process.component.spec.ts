import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProcessComponent } from './main-process.component';

describe('MainProcessComponent', () => {
  let component: MainProcessComponent;
  let fixture: ComponentFixture<MainProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
