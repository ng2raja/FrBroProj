import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FrDropdownComponent implements OnInit {
    constructor();
    options: any[];
    optionLabel: any;
    optionValue: any;
    filter: boolean;
    filterBy: string;
    onChange: EventEmitter<any[]>;
    selectedItems: any[];
    optionsBackup: any[];
    show: boolean;
    isDropdownOpen: boolean;
    ngOnInit(): void;
    filterFunction(event: any): void;
    showDropdown(): void;
    onChangeAction(item: any): void;
    getPlaceHolderString(): string;
    clearAllSelction(): void;
    static ɵfac: i0.ɵɵFactoryDef<FrDropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FrDropdownComponent, "fr-fr-dropdown", never, { "options": "options"; "optionLabel": "optionLabel"; "optionValue": "optionValue"; "filter": "filter"; "filterBy": "filterBy"; }, { "onChange": "onChange"; }, never, never>;
}
//# sourceMappingURL=fr-dropdown.component.d.ts.map