import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewViewPage } from './new-view.page';

describe('NewViewPage', () => {
  let component: NewViewPage;
  let fixture: ComponentFixture<NewViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
