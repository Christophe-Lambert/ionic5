import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleViewPage } from './single-view.page';

describe('SingleViewPage', () => {
  let component: SingleViewPage;
  let fixture: ComponentFixture<SingleViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
