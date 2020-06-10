import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeNatureViewPage } from './home-nature-view.page';

describe('HomeNatureViewPage', () => {
  let component: HomeNatureViewPage;
  let fixture: ComponentFixture<HomeNatureViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNatureViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNatureViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
