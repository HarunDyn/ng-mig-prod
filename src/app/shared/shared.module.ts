import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CardHoverDirective } from './directives/zoom.directive';

@NgModule({
  declarations: [HeaderComponent, CardHoverDirective],
  exports: [HeaderComponent, CardHoverDirective],
  imports: [
    CommonModule,
    MenubarModule,
    BadgeModule

  ]
})
export class SharedModule { }
