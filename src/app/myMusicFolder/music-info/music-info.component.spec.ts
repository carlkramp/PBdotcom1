import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicInfoComponent } from './music-info.component';

describe('MusicInfoComponent', () => {
  let component: MusicInfoComponent;
  let fixture: ComponentFixture<MusicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
