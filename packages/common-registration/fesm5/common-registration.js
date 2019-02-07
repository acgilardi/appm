import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonRegistrationService = /** @class */ (function () {
    function CommonRegistrationService() {
    }
    CommonRegistrationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CommonRegistrationService.ctorParameters = function () { return []; };
    /** @nocollapse */ CommonRegistrationService.ngInjectableDef = defineInjectable({ factory: function CommonRegistrationService_Factory() { return new CommonRegistrationService(); }, token: CommonRegistrationService, providedIn: "root" });
    return CommonRegistrationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonRegistrationComponent = /** @class */ (function () {
    function CommonRegistrationComponent() {
    }
    /**
     * @return {?}
     */
    CommonRegistrationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    CommonRegistrationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-common-registration',
                    template: "\n    <p>\n      common-registration works! Yes it does\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    CommonRegistrationComponent.ctorParameters = function () { return []; };
    return CommonRegistrationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var CommonRegistrationModule = /** @class */ (function () {
    function CommonRegistrationModule() {
    }
    CommonRegistrationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [CommonRegistrationComponent],
                    exports: [CommonRegistrationComponent]
                },] }
    ];
    return CommonRegistrationModule;
}());

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