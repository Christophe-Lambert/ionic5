import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppareilFormPage } from './appareil-form.page';

describe('AppareilFormPage', () => {
  let component: AppareilFormPage;
  let fixture: ComponentFixture<AppareilFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareilFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppareilFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
