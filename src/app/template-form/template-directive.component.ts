import { HostListener, Directive } from '@angular/core';

@Directive({
    selector: "[domDirective]"
  })
  export class DomDirective {
    constructor() {}
  
    @HostListener('keydown.enter') onKeydownEnter() {
      var nextEl = this.getSelectionType(document.activeElement);
      nextEl.focus();
    }
  
    getSelectionType(el) {
      var html_tag = document.querySelectorAll(
        "mat-label, input, button, select, textarea, a[href]"
      );
      
      var list = Array.prototype.filter.call(html_tag, function(item) {
        return item.tabIndex >= "0";
      });
      var index = list.indexOf(el);
      return list[index + 1] || list[0];
    }
  }