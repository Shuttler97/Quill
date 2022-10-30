import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TooltipComponent } from '../shared/tooltip/tooltip.component';


@Directive({ selector: '[tooltip]' })
export class TooltipDirective implements OnInit {

  @Input('tooltip') text = '';
  @Input('image') image = '';
  private overlayRef: OverlayRef | undefined;

  constructor(private overlay: Overlay,
              private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
        offsetY: -4,
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    if(this.overlayRef){
    const tooltipRef: ComponentRef<TooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
    tooltipRef.instance.text = this.text;
    tooltipRef.instance.image = this.image;
    }
  }

  @HostListener('mouseout')
  hide() {
    if(this.overlayRef){
    this.overlayRef.detach();
    }
  }
}
