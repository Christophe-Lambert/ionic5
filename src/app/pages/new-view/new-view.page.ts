import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-view',
  templateUrl: './new-view.page.html',
  styleUrls: ['./new-view.page.scss'],
})
export class NewViewPage implements OnInit {

  natureViewForm: FormGroup;
  latitude: number;
  longitude: number;
  imageUrl: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.natureViewForm = this.formBuilder.group({
      name: ['', Validators.required],
      date: [new Date().toISOString(), Validators.required],
      description: ['']
    });
  }
}
