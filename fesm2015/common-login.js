import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonLoginService {
    constructor() { }
}
CommonLoginService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommonLoginService.ctorParameters = () => [];
/** @nocollapse */ CommonLoginService.ngInjectableDef = defineInjectable({ factory: function CommonLoginService_Factory() { return new CommonLoginService(); }, token: CommonLoginService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonLoginComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CommonLoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-common-login',
                template: `
    <p>
      common login is a go again
    </p>
  `
            }] }
];
/** @nocollapse */
CommonLoginComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonLoginModule {
}
CommonLoginModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [CommonLoginComponent],
                exports: [CommonLoginComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { CommonLoginService, CommonLoginComponent, CommonLoginModule };

//# sourceMappingURL=common-login.js.map