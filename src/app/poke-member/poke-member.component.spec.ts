import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeMemberComponent } from './poke-member.component';

describe('PokeMemberComponent', () => {
  let component: PokeMemberComponent;
  let fixture: ComponentFixture<PokeMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
