(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('common-registration', ['exports', '@angular/core'], factory) :
    (factory((global['common-registration'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonRegistrationService = /** @class */ (function () {
        function CommonRegistrationService() {
        }
        CommonRegistrationService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CommonRegistrationService.ctorParameters = function () { return []; };
        /** @nocollapse */ CommonRegistrationService.ngInjectableDef = i0.defineInjectable({ factory: function CommonRegistrationService_Factory() { return new CommonRegistrationService(); }, token: CommonRegistrationService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.CommonRegistrationService = CommonRegistrationService;
    exports.CommonRegistrationComponent = CommonRegistrationComponent;
    exports.CommonRegistrationModule = CommonRegistrationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=common-registration.umd.js.map