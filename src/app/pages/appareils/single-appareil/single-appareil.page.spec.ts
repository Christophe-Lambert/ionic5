import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleAppareilPage } from './single-appareil.page';

describe('SingleAppareilPage', () => {
  let component: SingleAppareilPage;
  let fixture: ComponentFixture<SingleAppareilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAppareilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleAppareilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
