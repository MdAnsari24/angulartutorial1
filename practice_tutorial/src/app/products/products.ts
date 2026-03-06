import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductCatalogue } from '../../../public/product-catalogue';

@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
  protected productCatalogueList: ProductCatalogue[] = [
    {
      id: 0,
      title: 'Acme Fresh Start Housing',
      size: 'Chicago',
      imageUrl: 'model 4.jpg'
    },
    {
      id: 1,
      title: 'A113 Transitional Housing',
      size: 'CA',
      imageUrl: 'model 3.jpg'
    },
    {
      id: 2,
      title: 'Warm Beds Housing Support',
      size: 'AK',
      imageUrl: 'model 2.jpg'
    },
    {
      id: 3,
      title: 'Homesteady Housing',
      size: 'Chicago',
      imageUrl: 'model 1.jpg'
    },
  ];
}

