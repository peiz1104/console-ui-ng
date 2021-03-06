import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'cui-layout',
    encapsulation: ViewEncapsulation.None,
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./style/index.scss']
})

export class LayoutComponent  {
    @HostBinding('class.cui-layout-nz') _nzLayout = true;
    @HostBinding('class.cui-layout-nz-has-sider') hasSider = false;
}
