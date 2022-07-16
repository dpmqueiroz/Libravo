import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCampeonatoComponent } from './page-campeonato.component';

describe('PageCampeonatoComponent', () => {
  let component: PageCampeonatoComponent;
  let fixture: ComponentFixture<PageCampeonatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCampeonatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
