(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('common-login', ['exports', '@angular/core'], factory) :
    (factory((global['common-login'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonLoginService = /** @class */ (function () {
        function CommonLoginService() {
        }
        CommonLoginService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CommonLoginService.ctorParameters = function () { return []; };
        /** @nocollapse */ CommonLoginService.ngInjectableDef = i0.defineInjectable({ factory: function CommonLoginService_Factory() { return new CommonLoginService(); }, token: CommonLoginService, providedIn: "root" });
        return CommonLoginService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonLoginComponent = /** @class */ (function () {
        function CommonLoginComponent() {
        }
        /**
         * @return {?}
         */
        CommonLoginComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        CommonLoginComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-common-login',
                        template: "\n    <p>\n      common login is a go\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        CommonLoginComponent.ctorParameters = function () { return []; };
        return CommonLoginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CommonLoginModule = /** @class */ (function () {
        function CommonLoginModule() {
        }
        CommonLoginModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [CommonLoginComponent],
                        exports: [CommonLoginComponent]
                    },] }
        ];
        return CommonLoginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CommonLoginService = CommonLoginService;
    exports.CommonLoginComponent = CommonLoginComponent;
    exports.CommonLoginModule = CommonLoginModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=common-login.umd.js.map