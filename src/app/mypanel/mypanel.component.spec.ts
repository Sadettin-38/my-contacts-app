import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypanelComponent } from './mypanel.component';

describe('MypanelComponent', () => {
  let component: MypanelComponent;
  let fixture: ComponentFixture<MypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
