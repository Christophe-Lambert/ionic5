import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetCoordinatesPage } from './set-coordinates.page';

describe('SetCoordinatesPage', () => {
  let component: SetCoordinatesPage;
  let fixture: ComponentFixture<SetCoordinatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCoordinatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetCoordinatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
