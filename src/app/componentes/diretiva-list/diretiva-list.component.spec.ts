import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaListComponent } from './diretiva-list.component';

describe('DiretivaListComponent', () => {
  let component: DiretivaListComponent;
  let fixture: ComponentFixture<DiretivaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
