import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinpostDisplayComponent } from './bulletinpost-display.component';

describe('BulletinpostDisplayComponent', () => {
  let component: BulletinpostDisplayComponent;
  let fixture: ComponentFixture<BulletinpostDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinpostDisplayComponent]
    });
    fixture = TestBed.createComponent(BulletinpostDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
