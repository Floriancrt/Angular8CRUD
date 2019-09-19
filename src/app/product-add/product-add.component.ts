import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForms: FormGroup;

  constructor(private fb: FormBuilder) 
  {

    this.createForm();

  }

  createForm()
  {
    this.angForms = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['',Validators.required ],
      ProductPrice: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
