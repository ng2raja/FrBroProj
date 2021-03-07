(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('fr-dropdown-pro', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['fr-dropdown-pro'] = {}, global.ng.core, global.ng.common, global.ng.platformBrowser, global.ng.forms));
}(this, (function (exports, i0, i1, platformBrowser, forms) { 'use strict';

    var FrDropdownService = /** @class */ (function () {
        function FrDropdownService() {
        }
        return FrDropdownService;
    }());
    FrDropdownService.ɵfac = function FrDropdownService_Factory(t) { return new (t || FrDropdownService)(); };
    FrDropdownService.ɵprov = i0.ɵɵdefineInjectable({ token: FrDropdownService, factory: FrDropdownService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FrDropdownService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function FrDropdownComponent_div_5_input_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 7);
            i0.ɵɵlistener("click", function FrDropdownComponent_div_5_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var item_r1 = i0.ɵɵnextContext().$implicit; var ctx_r3 = i0.ɵɵnextContext(); ctx_r3.filterFunction($event.target.value); return ctx_r3.onChangeAction(item_r1); });
            i0.ɵɵelementEnd();
        }
    }
    function FrDropdownComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5);
            i0.ɵɵtemplate(1, FrDropdownComponent_div_5_input_1_Template, 1, 0, "input", 6);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.show);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", item_r1[ctx_r0.optionLabel], " ");
        }
    }
    var _c0 = function (a0) { return { "display": a0 }; };
    // import * as EventEmitter from 'events';
    var FrDropdownComponent = /** @class */ (function () {
        function FrDropdownComponent() {
            this.onChange = new i0.EventEmitter();
            this.selectedItems = [];
            this.show = true;
            this.isDropdownOpen = false;
            // setInterval(()=>{
            //     console.log(this.options);
            //     console.log(this.optionsBackup);
            // },2000);
        }
        FrDropdownComponent.prototype.ngOnInit = function () {
            this.optionsBackup = __spread(this.options);
        };
        FrDropdownComponent.prototype.filterFunction = function (event) {
            var _this = this;
            if (event.type == 'keyup') {
                var value_1 = event.target.value;
                if (value_1) {
                    this.options = [];
                    this.optionsBackup.forEach(function (obj) {
                        if (obj[_this.filterBy].toUpperCase().indexOf(value_1.toUpperCase()) > -1) {
                            _this.options.push(obj);
                        }
                    });
                }
                else {
                    this.options = this.optionsBackup;
                }
            }
        };
        FrDropdownComponent.prototype.showDropdown = function () {
            this.isDropdownOpen = !this.isDropdownOpen;
            console.log("ShowDropdown");
        };
        FrDropdownComponent.prototype.onChangeAction = function (item) {
            var _this = this;
            var existingIndex = -1;
            var existingObj = this.selectedItems.find(function (ele, index) {
                existingIndex = index;
                return ele[_this.optionValue] == item[_this.optionValue];
            });
            if (existingObj) {
                this.selectedItems.splice(existingIndex, 1);
            }
            else {
                this.selectedItems.push(item);
            }
            this.onChange.emit(this.selectedItems);
        };
        FrDropdownComponent.prototype.getPlaceHolderString = function () {
            if (this.selectedItems.length > 1) {
                return this.selectedItems[0][this.optionLabel] + ' & ' + (this.selectedItems.length - 1) + " more items";
            }
            else if (this.selectedItems.length == 1) {
                return this.selectedItems[0][this.optionLabel] + " selected";
            }
            else {
                return "Search...";
            }
        };
        FrDropdownComponent.prototype.clearAllSelction = function () {
            var _this = this;
            this.selectedItems = [];
            this.show = false;
            setTimeout(function () {
                _this.show = true;
            }, 500);
        };
        return FrDropdownComponent;
    }());
    FrDropdownComponent.ɵfac = function FrDropdownComponent_Factory(t) { return new (t || FrDropdownComponent)(); };
    FrDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FrDropdownComponent, selectors: [["fr-fr-dropdown"]], inputs: { options: "options", optionLabel: "optionLabel", optionValue: "optionValue", filter: "filter", filterBy: "filterBy" }, outputs: { onChange: "onChange" }, decls: 6, vars: 5, consts: [[1, "dropdown"], ["type", "text", "id", "myInput", 3, "placeholder", "click", "keyup"], [1, "clearcls", 3, "click"], ["id", "myDropdown", 1, "dropdown-content", 3, "ngStyle"], ["class", "child", 4, "ngFor", "ngForOf"], [1, "child"], ["type", "checkbox", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "click"]], template: function FrDropdownComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "input", 1);
                i0.ɵɵlistener("click", function FrDropdownComponent_Template_input_click_1_listener() { return ctx.showDropdown(); })("keyup", function FrDropdownComponent_Template_input_keyup_1_listener($event) { return ctx.filterFunction($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "span", 2);
                i0.ɵɵlistener("click", function FrDropdownComponent_Template_span_click_2_listener() { return ctx.clearAllSelction(); });
                i0.ɵɵtext(3, "X ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 3);
                i0.ɵɵtemplate(5, FrDropdownComponent_div_5_Template, 3, 2, "div", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵpropertyInterpolate("placeholder", ctx.getPlaceHolderString());
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx.isDropdownOpen ? "block" : "none"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.options);
            }
        }, directives: [i1.NgStyle, i1.NgForOf, i1.NgIf], styles: [".dropbtn[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:16px;font-size:16px;border:none;cursor:pointer}.dropbtn[_ngcontent-%COMP%]:focus, .dropbtn[_ngcontent-%COMP%]:hover{background-color:#3e8e41}#myInput[_ngcontent-%COMP%]{box-sizing:border-box;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC\");background-position:100%;background-repeat:no-repeat;font-size:16px;padding:14px 20px 12px 5px;border:1px solid #ddd;cursor:pointer}#myInput[_ngcontent-%COMP%]:focus{outline:3px solid #ddd}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;border:1px solid #ddd;padding:10px;background-color:#dcdcdc}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f6f6f6;min-width:230px;overflow:auto;border:1px solid #ddd;z-index:1}.child[_ngcontent-%COMP%]:hover{background-color:#dcdcdc}.dropdown-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#000;padding:12px 16px;text-decoration:none;display:block;cursor:pointer}.dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#ddd}.clearcls[_ngcontent-%COMP%]{padding:10px;font-size:larger;cursor:pointer}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FrDropdownComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'fr-fr-dropdown',
                        templateUrl: './fr-dropdown.component.html',
                        styleUrls: ['./fr-dropdown.component.scss']
                    }]
            }], function () { return []; }, { options: [{
                    type: i0.Input,
                    args: ['options']
                }], optionLabel: [{
                    type: i0.Input,
                    args: ['optionLabel']
                }], optionValue: [{
                    type: i0.Input,
                    args: ['optionValue']
                }], filter: [{
                    type: i0.Input,
                    args: ['filter']
                }], filterBy: [{
                    type: i0.Input,
                    args: ['filterBy']
                }], onChange: [{
                    type: i0.Output
                }] });
    })();

    var FrDropdownModule = /** @class */ (function () {
        function FrDropdownModule() {
        }
        return FrDropdownModule;
    }());
    FrDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: FrDropdownModule });
    FrDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FrDropdownModule_Factory(t) { return new (t || FrDropdownModule)(); }, imports: [[
                platformBrowser.BrowserModule, forms.FormsModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FrDropdownModule, { declarations: [FrDropdownComponent], imports: [platformBrowser.BrowserModule, forms.FormsModule], exports: [FrDropdownComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FrDropdownModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [FrDropdownComponent],
                        imports: [
                            platformBrowser.BrowserModule, forms.FormsModule
                        ],
                        exports: [FrDropdownComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of fr-dropdown
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FrDropdownComponent = FrDropdownComponent;
    exports.FrDropdownModule = FrDropdownModule;
    exports.FrDropdownService = FrDropdownService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fr-dropdown-pro.umd.js.map
