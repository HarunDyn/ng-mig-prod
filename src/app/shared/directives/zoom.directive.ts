import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective {
  constructor(private elRef: ElementRef) {
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.zoomProduct({ scale: 1.03, duration: 0.5 });

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomProduct({ scale: 1, duration: 0.5 });
  }

  private zoomProduct(props: any) {
    this.elRef.nativeElement.style.transform = `scale(${props.scale})`;
    this.elRef.nativeElement.style.transition = `all ${props.duration}s ease-in-out`;
  }
}
