import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵtemplate, ɵɵtext, ɵɵadvance, ɵɵproperty, ɵɵtextInterpolate1, EventEmitter, ɵɵdefineComponent, ɵɵpropertyInterpolate, ɵɵpureFunction1, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgStyle, NgForOf, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

class FrDropdownService {
    constructor() { }
}
FrDropdownService.ɵfac = function FrDropdownService_Factory(t) { return new (t || FrDropdownService)(); };
FrDropdownService.ɵprov = ɵɵdefineInjectable({ token: FrDropdownService, factory: FrDropdownService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FrDropdownService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function FrDropdownComponent_div_5_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 7);
    ɵɵlistener("click", function FrDropdownComponent_div_5_input_1_Template_input_click_0_listener($event) { ɵɵrestoreView(_r4); const item_r1 = ɵɵnextContext().$implicit; const ctx_r3 = ɵɵnextContext(); ctx_r3.filterFunction($event.target.value); return ctx_r3.onChangeAction(item_r1); });
    ɵɵelementEnd();
} }
function FrDropdownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, FrDropdownComponent_div_5_input_1_Template, 1, 0, "input", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.show);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", item_r1[ctx_r0.optionLabel], " ");
} }
const _c0 = function (a0) { return { "display": a0 }; };
// import * as EventEmitter from 'events';
class FrDropdownComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.selectedItems = [];
        this.show = true;
        this.isDropdownOpen = false;
        // setInterval(()=>{
        //     console.log(this.options);
        //     console.log(this.optionsBackup);
        // },2000);
    }
    ngOnInit() {
        this.optionsBackup = [...this.options];
    }
    filterFunction(event) {
        if (event.type == 'keyup') {
            let value = event.target.value;
            if (value) {
                this.options = [];
                this.optionsBackup.forEach((obj) => {
                    if (obj[this.filterBy].toUpperCase().indexOf(value.toUpperCase()) > -1) {
                        this.options.push(obj);
                    }
                });
            }
            else {
                this.options = this.optionsBackup;
            }
        }
    }
    showDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
        console.log("ShowDropdown");
    }
    onChangeAction(item) {
        let existingIndex = -1;
        let existingObj = this.selectedItems.find((ele, index) => {
            existingIndex = index;
            return ele[this.optionValue] == item[this.optionValue];
        });
        if (existingObj) {
            this.selectedItems.splice(existingIndex, 1);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChange.emit(this.selectedItems);
    }
    getPlaceHolderString() {
        if (this.selectedItems.length > 1) {
            return this.selectedItems[0][this.optionLabel] + ' & ' + (this.selectedItems.length - 1) + " more items";
        }
        else if (this.selectedItems.length == 1) {
            return this.selectedItems[0][this.optionLabel] + " selected";
        }
        else {
            return "Search...";
        }
    }
    clearAllSelction() {
        this.selectedItems = [];
        this.show = false;
        setTimeout(() => {
            this.show = true;
        }, 500);
    }
}
FrDropdownComponent.ɵfac = function FrDropdownComponent_Factory(t) { return new (t || FrDropdownComponent)(); };
FrDropdownComponent.ɵcmp = ɵɵdefineComponent({ type: FrDropdownComponent, selectors: [["fr-fr-dropdown"]], inputs: { options: "options", optionLabel: "optionLabel", optionValue: "optionValue", filter: "filter", filterBy: "filterBy" }, outputs: { onChange: "onChange" }, decls: 6, vars: 5, consts: [[1, "dropdown"], ["type", "text", "id", "myInput", 3, "placeholder", "click", "keyup"], [1, "clearcls", 3, "click"], ["id", "myDropdown", 1, "dropdown-content", 3, "ngStyle"], ["class", "child", 4, "ngFor", "ngForOf"], [1, "child"], ["type", "checkbox", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "click"]], template: function FrDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "input", 1);
        ɵɵlistener("click", function FrDropdownComponent_Template_input_click_1_listener() { return ctx.showDropdown(); })("keyup", function FrDropdownComponent_Template_input_keyup_1_listener($event) { return ctx.filterFunction($event); });
        ɵɵelementEnd();
        ɵɵelementStart(2, "span", 2);
        ɵɵlistener("click", function FrDropdownComponent_Template_span_click_2_listener() { return ctx.clearAllSelction(); });
        ɵɵtext(3, "X ");
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 3);
        ɵɵtemplate(5, FrDropdownComponent_div_5_Template, 3, 2, "div", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵpropertyInterpolate("placeholder", ctx.getPlaceHolderString());
        ɵɵadvance(3);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(3, _c0, ctx.isDropdownOpen ? "block" : "none"));
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [NgStyle, NgForOf, NgIf], styles: [".dropbtn[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:16px;font-size:16px;border:none;cursor:pointer}.dropbtn[_ngcontent-%COMP%]:focus, .dropbtn[_ngcontent-%COMP%]:hover{background-color:#3e8e41}#myInput[_ngcontent-%COMP%]{box-sizing:border-box;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC\");background-position:100%;background-repeat:no-repeat;font-size:16px;padding:14px 20px 12px 5px;border:1px solid #ddd;cursor:pointer}#myInput[_ngcontent-%COMP%]:focus{outline:3px solid #ddd}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;border:1px solid #ddd;padding:10px;background-color:#dcdcdc}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f6f6f6;min-width:230px;overflow:auto;border:1px solid #ddd;z-index:1}.child[_ngcontent-%COMP%]:hover{background-color:#dcdcdc}.dropdown-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#000;padding:12px 16px;text-decoration:none;display:block;cursor:pointer}.dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#ddd}.clearcls[_ngcontent-%COMP%]{padding:10px;font-size:larger;cursor:pointer}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FrDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'fr-fr-dropdown',
                templateUrl: './fr-dropdown.component.html',
                styleUrls: ['./fr-dropdown.component.scss']
            }]
    }], function () { return []; }, { options: [{
            type: Input,
            args: ['options']
        }], optionLabel: [{
            type: Input,
            args: ['optionLabel']
        }], optionValue: [{
            type: Input,
            args: ['optionValue']
        }], filter: [{
            type: Input,
            args: ['filter']
        }], filterBy: [{
            type: Input,
            args: ['filterBy']
        }], onChange: [{
            type: Output
        }] }); })();

class FrDropdownModule {
}
FrDropdownModule.ɵmod = ɵɵdefineNgModule({ type: FrDropdownModule });
FrDropdownModule.ɵinj = ɵɵdefineInjector({ factory: function FrDropdownModule_Factory(t) { return new (t || FrDropdownModule)(); }, imports: [[
            BrowserModule, FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FrDropdownModule, { declarations: [FrDropdownComponent], imports: [BrowserModule, FormsModule], exports: [FrDropdownComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FrDropdownModule, [{
        type: NgModule,
        args: [{
                declarations: [FrDropdownComponent],
                imports: [
                    BrowserModule, FormsModule
                ],
                exports: [FrDropdownComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of fr-dropdown
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FrDropdownComponent, FrDropdownModule, FrDropdownService };
//# sourceMappingURL=fr-dropdown-pro.js.map
