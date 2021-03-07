import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function FrDropdownComponent_div_5_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 7);
    i0.ɵɵlistener("click", function FrDropdownComponent_div_5_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const item_r1 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(); ctx_r3.filterFunction($event.target.value); return ctx_r3.onChangeAction(item_r1); });
    i0.ɵɵelementEnd();
} }
function FrDropdownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, FrDropdownComponent_div_5_input_1_Template, 1, 0, "input", 6);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.show);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r1[ctx_r0.optionLabel], " ");
} }
const _c0 = function (a0) { return { "display": a0 }; };
// import * as EventEmitter from 'events';
export class FrDropdownComponent {
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
FrDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FrDropdownComponent, selectors: [["fr-fr-dropdown"]], inputs: { options: "options", optionLabel: "optionLabel", optionValue: "optionValue", filter: "filter", filterBy: "filterBy" }, outputs: { onChange: "onChange" }, decls: 6, vars: 5, consts: [[1, "dropdown"], ["type", "text", "id", "myInput", 3, "placeholder", "click", "keyup"], [1, "clearcls", 3, "click"], ["id", "myDropdown", 1, "dropdown-content", 3, "ngStyle"], ["class", "child", 4, "ngFor", "ngForOf"], [1, "child"], ["type", "checkbox", 3, "click", 4, "ngIf"], ["type", "checkbox", 3, "click"]], template: function FrDropdownComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵpropertyInterpolate("placeholder", ctx.getPlaceHolderString());
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, ctx.isDropdownOpen ? "block" : "none"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [i1.NgStyle, i1.NgForOf, i1.NgIf], styles: [".dropbtn[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:16px;font-size:16px;border:none;cursor:pointer}.dropbtn[_ngcontent-%COMP%]:focus, .dropbtn[_ngcontent-%COMP%]:hover{background-color:#3e8e41}#myInput[_ngcontent-%COMP%]{box-sizing:border-box;background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABiUlEQVRIie2Wu04CQRSGP0G2EUtIbHwA8B3EQisLIcorEInx8hbEZ9DKy6toDI1oAgalNFpDoYWuxZzJjoTbmSXERP7kZDbZ859vdmb27MJcf0gBUAaugRbQk2gBV3IvmDa0BLwA4Zh4BorTACaAU6fwPXAI5IAliTxwBDScvJp4vWWhH0BlTLEEsC+5Fu6lkgNdV/gKDnxHCw2I9rSiNQNV8baBlMZYJtpTn71KAg9SY3dUYn9xezLPgG8P8BdwLteq5X7CzDbnAbXKS42WxtQVUzoGeFlqdEclxXrnhmhhkqR+8KuMqzHA1vumAddl3IwB3pLxVmOyr1NjwKQmURJ4lBp7GmOAafghpg1qdSDeDrCoNReJWmZB4dsAPsW7rYVa1Rx4FbOEw5TEPKmFvgMZX3DCgYeYNniMaQ5piTXghGhPLdTmZ33hYNpem98f/UHRwSxvhqhXx4anMA3/EmhiOlJPJnSBOb3uQcpOE65VhujPpAms/Bu4u+x3swRbeB24mTV4LgB+AFuLedkPkcmmAAAAAElFTkSuQmCC\");background-position:100%;background-repeat:no-repeat;font-size:16px;padding:14px 20px 12px 5px;border:1px solid #ddd;cursor:pointer}#myInput[_ngcontent-%COMP%]:focus{outline:3px solid #ddd}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block;border:1px solid #ddd;padding:10px;background-color:#dcdcdc}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#f6f6f6;min-width:230px;overflow:auto;border:1px solid #ddd;z-index:1}.child[_ngcontent-%COMP%]:hover{background-color:#dcdcdc}.dropdown-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:#000;padding:12px 16px;text-decoration:none;display:block;cursor:pointer}.dropdown[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{background-color:#ddd}.clearcls[_ngcontent-%COMP%]{padding:10px;font-size:larger;cursor:pointer}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FrDropdownComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnItZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZnItZHJvcGRvd24vc3JjL2xpYi9mci1kcm9wZG93bi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9mci1kcm9wZG93bi9zcmMvbGliL2ZyLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0lDZXRFLGdDQUNFO0lBRGtDLHlTQUFrRTtJQUF0RyxpQkFDRTs7O0lBRk4sOEJBQ0k7SUFBQSw4RUFDRTtJQUFBLFlBQ047SUFBQSxpQkFBTTs7OztJQUZNLGVBQVU7SUFBVixrQ0FBVTtJQUNoQixlQUNOO0lBRE0sNERBQ047OztBRGhCTiwwQ0FBMEM7QUFPMUMsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QjtRQWFVLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBRy9DLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixtQkFBYyxHQUFhLEtBQUssQ0FBQztRQWxCN0Isb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUNqQyx1Q0FBdUM7UUFDdkMsV0FBVztJQUNmLENBQUM7SUFlRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBVztRQUN4QixJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUcsT0FBTyxFQUFDO1lBRXBCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzlCLElBQUcsS0FBSyxFQUFDO2dCQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUVsQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO29CQUNoQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDMUI7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtpQkFBSTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7YUFDbkM7U0FDSjtJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVU7UUFDdkIsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFRLEVBQUUsS0FBSyxFQUFDLEVBQUU7WUFDM0QsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUN0QixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6RCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUcsV0FBVyxFQUFDO1lBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQUk7WUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBR0Qsb0JBQW9CO1FBRWxCLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSyxHQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDO1NBQ3hHO2FBQU0sSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxXQUFXLENBQUM7U0FDOUQ7YUFBSTtZQUNILE9BQU8sV0FBVyxDQUFBO1NBQ25CO0lBQ0gsQ0FBQztJQUNELGdCQUFnQjtRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFVBQVUsQ0FBQyxHQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDVCxDQUFDOztzRkFsRlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNBOUIsOEJBQ0U7UUFDQSxnQ0FDQTtRQURPLCtGQUFTLGtCQUFjLElBQUMsd0ZBQTRFLDBCQUFzQixJQUFsRztRQUEvQixpQkFDQTtRQUFBLCtCQUFvRDtRQUE5Qyw4RkFBUyxzQkFBa0IsSUFBQztRQUFrQixrQkFBRTtRQUFBLGlCQUFPO1FBRTdELDhCQUNFO1FBQUEsb0VBR007UUFFUixpQkFBTTtRQUNSLGlCQUFNOztRQVZ3QyxlQUF3QztRQUF4QyxtRUFBd0M7UUFHL0UsZUFBMkQ7UUFBM0QsMkZBQTJEO1FBQ3hDLGVBQVU7UUFBVixxQ0FBVTs7a0RETnpCLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7c0NBVW1CLE9BQU87a0JBQXhCLEtBQUs7bUJBQUMsU0FBUztZQUNNLFdBQVc7a0JBQWhDLEtBQUs7bUJBQUMsYUFBYTtZQUNFLFdBQVc7a0JBQWhDLEtBQUs7bUJBQUMsYUFBYTtZQUNILE1BQU07a0JBQXRCLEtBQUs7bUJBQUMsUUFBUTtZQUNJLFFBQVE7a0JBQTFCLEtBQUs7bUJBQUMsVUFBVTtZQUVQLFFBQVE7a0JBQWpCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0ICogYXMgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZyLWZyLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZyLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZnItZHJvcGRvd24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGckRyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgXG4gICAgICAvLyBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMub3B0aW9ucyk7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5vcHRpb25zQmFja3VwKTtcbiAgICAgIC8vIH0sMjAwMCk7XG4gIH1cblxuICBASW5wdXQoJ29wdGlvbnMnKSBvcHRpb25zIDogYW55W107XG4gIEBJbnB1dCgnb3B0aW9uTGFiZWwnKSBvcHRpb25MYWJlbCA6IGFueTtcbiAgQElucHV0KCdvcHRpb25WYWx1ZScpIG9wdGlvblZhbHVlIDogYW55O1xuICBASW5wdXQoJ2ZpbHRlcicpIGZpbHRlciA6IGJvb2xlYW47XG4gIEBJbnB1dCgnZmlsdGVyQnknKSBmaWx0ZXJCeSA6IHN0cmluZztcbiBcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuXG4gIHNlbGVjdGVkSXRlbXMgPSBbXTtcbiAgb3B0aW9uc0JhY2t1cCA6IGFueVtdO1xuICBzaG93ID0gdHJ1ZTtcbiAgaXNEcm9wZG93bk9wZW4gOiBib29sZWFuID0gZmFsc2U7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9uc0JhY2t1cCA9IFsuLi50aGlzLm9wdGlvbnNdO1xuICB9XG5cbiAgZmlsdGVyRnVuY3Rpb24oZXZlbnQgOiBhbnkpe1xuICAgIGlmKGV2ZW50LnR5cGUgPT0na2V5dXAnKXtcbiAgICAgICAgXG4gICAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICBpZih2YWx1ZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gW107XG5cbiAgICAgICAgICB0aGlzLm9wdGlvbnNCYWNrdXAuZm9yRWFjaCgob2JqKT0+e1xuICAgICAgICAgICAgaWYgKG9ialt0aGlzLmZpbHRlckJ5XS50b1VwcGVyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9VcHBlckNhc2UoKSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9uc0JhY2t1cDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3dEcm9wZG93bigpe1xuICAgIHRoaXMuaXNEcm9wZG93bk9wZW4gPSAhdGhpcy5pc0Ryb3Bkb3duT3BlbjtcbiAgICBjb25zb2xlLmxvZyhcIlNob3dEcm9wZG93blwiKTtcbiAgfVxuXG4gIG9uQ2hhbmdlQWN0aW9uKGl0ZW0gOiBhbnkpe1xuICAgIGxldCBleGlzdGluZ0luZGV4ID0gLTE7XG4gICAgbGV0IGV4aXN0aW5nT2JqID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQoKGVsZTogYW55LCBpbmRleCk9PnsgXG4gICAgICBleGlzdGluZ0luZGV4ID0gaW5kZXg7XG4gICAgICByZXR1cm4gZWxlW3RoaXMub3B0aW9uVmFsdWVdID09IGl0ZW1bdGhpcy5vcHRpb25WYWx1ZV07XG4gICAgICBcbiAgICB9KVxuICAgIGlmKGV4aXN0aW5nT2JqKXtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5zcGxpY2UoZXhpc3RpbmdJbmRleCwgMSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG4gICBcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG5cbiAgZ2V0UGxhY2VIb2xkZXJTdHJpbmcoKXtcbiAgICBcbiAgICBpZih0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMSApe1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtc1swXVt0aGlzLm9wdGlvbkxhYmVsXSArICcgJiAnKyAodGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtMSkgKyBcIiBtb3JlIGl0ZW1zXCI7XG4gICAgfWVsc2UgIGlmKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT0gMSApe1xuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtc1swXVt0aGlzLm9wdGlvbkxhYmVsXSArIFwiIHNlbGVjdGVkXCI7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gXCJTZWFyY2guLi5cIlxuICAgIH1cbiAgfVxuICBjbGVhckFsbFNlbGN0aW9uKCl7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH0sNTAwKTtcbiAgfVxuXG59XG4iLCIgIDwhLS0gPHA+XHJcbiAgICBmci1kcm9wZG93biB3b3JrcyEgbmV3IHJhamEge3tSYWphfX1cclxuICA8L3A+XHJcbiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGNsaWNrKT1cInNob3dEcm9wZG93bigpXCIgKGtleXVwKT1cImZpbHRlckZ1bmN0aW9uKCRldmVudC50YXJnZXQudmFsdWUpXCI+XHJcblxyXG4gIDxicj5cclxuICA8YnI+IC0tPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIj5cclxuICAgIDwhLS08YnV0dG9uIG9uY2xpY2s9XCJteUZ1bmN0aW9uKClcIiBjbGFzcz1cImRyb3BidG5cIj5Ecm9wZG93bjwvYnV0dG9uPi0tPlxyXG4gICAgPGlucHV0IChjbGljayk9XCJzaG93RHJvcGRvd24oKVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7e2dldFBsYWNlSG9sZGVyU3RyaW5nKCl9fVwiIGlkPVwibXlJbnB1dFwiIChrZXl1cCk9XCJmaWx0ZXJGdW5jdGlvbigkZXZlbnQpXCI+IFxyXG4gICAgPHNwYW4gKGNsaWNrKT1cImNsZWFyQWxsU2VsY3Rpb24oKVwiIGNsYXNzPVwiY2xlYXJjbHNcIj5YIDwvc3Bhbj5cclxuXHJcbiAgICA8ZGl2IFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IChpc0Ryb3Bkb3duT3Blbj8gJ2Jsb2NrJyA6ICdub25lJyl9XCIgaWQ9XCJteURyb3Bkb3duXCIgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygb3B0aW9uc1wiIGNsYXNzPVwiY2hpbGRcIj5cclxuICAgICAgICAgIDxpbnB1dCAqbmdJZj1cInNob3dcIiB0eXBlPVwiY2hlY2tib3hcIiAoY2xpY2spPVwiZmlsdGVyRnVuY3Rpb24oJGV2ZW50LnRhcmdldC52YWx1ZSk7b25DaGFuZ2VBY3Rpb24oaXRlbSlcIj5cclxuICAgICAgICAgICAge3tpdGVtW29wdGlvbkxhYmVsXX19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4iXX0=