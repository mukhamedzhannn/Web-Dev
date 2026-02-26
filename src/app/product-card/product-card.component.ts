import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`Посмотри этот товар: ${product.name}`);
    const url = encodeURIComponent(product.link);
    window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
  }

  shareOnTelegram(product: Product): void {
    const text = encodeURIComponent(product.name);
    const url = encodeURIComponent(product.link);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
