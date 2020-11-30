import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem } from '../../shared/models/product.model';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private cs: CartService) {}

  @Output() public sidenavToggle = new EventEmitter();
  listItem: number = 0;
  // totaItem: number = 0;
  // cartItem: CartItem[] = this.cs.getItem;

  ngOnInit(): void {
    this.cs.list$.subscribe((list) => {
      this.listItem = this.cs.getListItems;
      // this.totaItem = this.cs.getTotal;
    });
  }

  // onRemove(event: any, item: CartItem) {
  //   event.stopPropagation();
  //   this.cs.removeItem(item);
  // }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
