import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductCatalogue } from '../../../public/product-catalogue';

@Component({
  selector: 'app-products',
  imports: [NgForOf],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class Products {
 @Input() productCatalogue!: ProductCatalogue;
 protected productCatalogueList: ProductCatalogue[] = [
    {
      id: 0,
      title: 'Acme Fresh Start Housing',
      size: 'Chicago',
      imageUrl: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg'
    },
    {
      id: 1,
      title: 'A113 Transitional Housing',
      size: 'CA',
      imageUrl: '/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg'
    },
    {
      id: 2,
      title: 'Warm Beds Housing Support',
      size: 'AK',
      imageUrl: '/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg'
    },
    {
      id: 3,
      title: 'Homesteady Housing',
      size: 'Chicago',
      imageUrl: '/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg'
    },
  ];
}

