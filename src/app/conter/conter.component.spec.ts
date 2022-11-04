import { ComponentFixture, TestBed } from '@angular/core/testing';
import { count } from 'rxjs';

import { ConterComponent } from './conter.component';

describe('ConterComponent', () => {
  let component: ConterComponent;
  let fixture: ComponentFixture<ConterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConterComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add one when click plus button', () => {
    // given
    component.count = 0;
    const plusBtn = fixture.nativeElement.querySelector('[data-test="plusBtn"]');
    // when
    plusBtn.click();
    fixture.detectChanges();
    // then
    const displayCount = fixture.nativeElement.querySelector('[data-test="displayCount"]');
    expect(displayCount.textContent).toEqual('number: 1');
  });
});
