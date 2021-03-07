import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'fr-fr-dropdown',
  templateUrl: './fr-dropdown.component.html',
  styleUrls: ['./fr-dropdown.component.scss']
})
export class FrDropdownComponent implements OnInit {

  constructor() { 
      // setInterval(()=>{
      //     console.log(this.options);
      //     console.log(this.optionsBackup);
      // },2000);
  }

  @Input('options') options : any[];
  @Input('optionLabel') optionLabel : any;
  @Input('optionValue') optionValue : any;
  @Input('filter') filter : boolean;
  @Input('filterBy') filterBy : string;
 
  @Output() onChange = new EventEmitter<any[]>();


  selectedItems = [];
  optionsBackup : any[];
  show = true;
  isDropdownOpen : boolean = false;
  ngOnInit(): void {
    this.optionsBackup = [...this.options];
  }

  filterFunction(event : any){
    if(event.type =='keyup'){
        
        let value = event.target.value
        if(value){
          this.options = [];

          this.optionsBackup.forEach((obj)=>{
            if (obj[this.filterBy].toUpperCase().indexOf(value.toUpperCase()) > -1) {
                this.options.push(obj);
            }
          });
        }else{
          this.options = this.optionsBackup;
        }
    }
  }

  showDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;
    console.log("ShowDropdown");
  }

  onChangeAction(item : any){
    let existingIndex = -1;
    let existingObj = this.selectedItems.find((ele: any, index)=>{ 
      existingIndex = index;
      return ele[this.optionValue] == item[this.optionValue];
      
    })
    if(existingObj){
      this.selectedItems.splice(existingIndex, 1);
    }else{
      this.selectedItems.push(item);
    }
   
    this.onChange.emit(this.selectedItems);
  }


  getPlaceHolderString(){
    
    if(this.selectedItems.length > 1 ){
      return this.selectedItems[0][this.optionLabel] + ' & '+ (this.selectedItems.length -1) + " more items";
    }else  if(this.selectedItems.length == 1 ){
      return this.selectedItems[0][this.optionLabel] + " selected";
    }else{
      return "Search..."
    }
  }
  clearAllSelction(){
    this.selectedItems = [];
    this.show = false;
    setTimeout(()=>{
        this.show = true;
    },500);
  }

}
