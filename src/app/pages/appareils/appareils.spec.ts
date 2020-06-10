import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppareilsComponent } from './appareils.component';

describe('AppareilsComponent', () => {
  let component: AppareilsComponent;
  let fixture: ComponentFixture<AppareilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppareilsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppareilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
