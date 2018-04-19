import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  code: string;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
  // Ecriture avec snapshot
   // this.code = this._route.snapshot.params['id'];

   // Ecriture avec observable
   this._route.params.subscribe(params => this.code = params['id'])
  }

}
