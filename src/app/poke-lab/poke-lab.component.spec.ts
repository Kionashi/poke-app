import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeLabComponent } from './poke-lab.component';

describe('PokeLabComponent', () => {
  let component: PokeLabComponent;
  let fixture: ComponentFixture<PokeLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
