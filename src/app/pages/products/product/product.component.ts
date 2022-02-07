import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent  {
  @Input() product!: Product;
  @Output() addToCartClick = new EventEmitter<Product>();
 

  ngOnInit(): void {
  }

  onClick():void{
    this.addToCartClick.emit(this.product);
  }

}
