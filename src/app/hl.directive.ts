import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appHl]',
  standalone: true,
})
export class HlDirective {

  // Inject ElementRef to manipulate the DOM safely
  private el = inject(ElementRef);

  // Accept a custom color from the template, fallback to 'yellow'
  @Input() appHoverHighlight = 'yellow';

  // Listen for the mouseenter event on the host element
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHoverHighlight);
  }

  // Listen for the mouseleave event on the host element
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
