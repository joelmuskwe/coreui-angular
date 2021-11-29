import { Injectable } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Injectable()
export class AccordionService {

  items: AccordionItemComponent[] = [];
  alwaysOpen = false;

  constructor() { }

  addItem(item: AccordionItemComponent): void {
    this.items.push(item);
  }

  removeItem(item: AccordionItemComponent): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  toggelItem(item: AccordionItemComponent): void {
    item.open = !item.open;
    this.closeOtherItems(item);
  }

  closeOtherItems(openItem: AccordionItemComponent): void {
    if (!this.alwaysOpen) {
      this.items.forEach((item: AccordionItemComponent) => {
        if (item !== openItem) {
          item.open = false;
        }
      });
    }
  }
}