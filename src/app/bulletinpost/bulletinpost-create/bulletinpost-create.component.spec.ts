import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinpostCreateComponent } from './bulletinpost-create.component';

describe('BulletinpostCreateComponent', () => {
  let component: BulletinpostCreateComponent;
  let fixture: ComponentFixture<BulletinpostCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletinpostCreateComponent]
    });
    fixture = TestBed.createComponent(BulletinpostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
