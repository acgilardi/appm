import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonRegistrationService {
    constructor() { }
}
CommonRegistrationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CommonRegistrationService.ctorParameters = () => [];
/** @nocollapse */ CommonRegistrationService.ngInjectableDef = defineInjectable({ factory: function CommonRegistrationService_Factory() { return new CommonRegistrationService(); }, token: CommonRegistrationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonRegistrationComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
CommonRegistrationComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-common-registration',
                template: `
    <p>
      common-registration works! Yes it does
    </p>
  `
            }] }
];
/** @nocollapse */
CommonRegistrationComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class CommonRegistrationModule {
}
CommonRegistrationModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [CommonRegistrationComponent],
                exports: [CommonRegistrationComponent]
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

export { CommonRegistrationService, CommonRegistrationComponent, CommonRegistrationModule };

//# sourceMappingURL=common-registration.js.map