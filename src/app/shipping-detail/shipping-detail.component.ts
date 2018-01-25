import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ShippingDetail } from './shipping-detail';
import { CartService } from '../cart/cart.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from '../guards/pending-changes-guard';
@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit, ComponentCanDeactivate {
  
  isDirty:boolean=false;
  canDeactivate():boolean{
    return !this.isDirty;
  }
 
  constructor(private cartService: CartService, private notificationService: NotificationsService, private router: Router) { }
  cities = [];
  model: ShippingDetail = new ShippingDetail('', '', true, -1);
  ngOnInit() {
    this.cities.push(
      {
        "id": 1,
        "name": "Sliema"
      },
      {
        "id": "2",
        "name": "Gzira"
      },
      {
        "id": "3",
        "name": "Swieqi"
      },
      {
        "id": 4,
        "name": "Valetta"
      }
    );
  }
  checkout(form: NgForm) {
    if (form.invalid) return;
    this.cartService.clear();
    this.notificationService.info("Successfull", "Shopping completed !");
    this.router.navigate(["products"]);
  }

}
