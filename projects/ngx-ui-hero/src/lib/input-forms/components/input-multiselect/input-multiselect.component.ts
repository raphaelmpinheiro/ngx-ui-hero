import { Component, DoCheck, Inject, Input, IterableDiffers, OnInit, Optional, ViewChild } from '@angular/core';
import { NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';

import { ElementBase } from '../../base/element-base';
import { AsyncValidatorArray, ValidatorArray } from '../../base/validate';
import { InputFormsConfig } from '../../input-forms-config';
import { INPUT_FORMS_CONFIG } from '../../input-forms-config.constants';

let identifier = 0;

@Component({
  selector: 'input-multiselect',
  templateUrl: './input-multiselect.component.html',
  styleUrls: ['./input-multiselect.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputMultiselectComponent,
    multi: true
  }]
})
export class InputMultiselectComponent extends ElementBase<any> implements OnInit, DoCheck {
  private _differModel: any;  
  private _differOptions: any;  
  private _options: Array<any>;
  showOptions: boolean;
  comboTouched: boolean;
  modelInitialized: boolean;
  search: string;

  @Input() public placeholder = 'Select...';
  @Input() public searchPlaceholder = 'Search...';
  @Input() public displayTextProperty: string = 'text';
  @Input() public valueProperty: string = 'value';
  @Input() public emptyMessage: string = 'No results found.';
  @Input() public selectAllButtonLabel: string = 'Select all';
  @Input() public clearSelectionButtonLabel: string = 'Clear selection';
  @Input() public maxCountOfLabelsToShow: number = 3;
  @ViewChild(NgModel) model: NgModel;

  get options(): Array<any> {
    return this._options;
  }    
  @Input('options')
  set options(value: Array<any>) {
    this._options = value;
    this.Init();
  }
  
  public identifier = `input-multiselect-${identifier++}`;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: ValidatorArray,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: AsyncValidatorArray,
    @Inject( INPUT_FORMS_CONFIG ) public config: InputFormsConfig,
    private iterableDiffers: IterableDiffers,
  ) {
    super(validators, asyncValidators, config);

    if (config.multiSelect) {
      Object.assign(this, config.multiSelect);
    }

    this._differModel = this.iterableDiffers.find([]).create(null);
    this._differOptions = this.iterableDiffers.find([]).create(null);
  }

  ngOnInit(): void {
    this.Init();
  }
  ngDoCheck(): void {
    let changesInModel = this._differModel.diff(this.value);
    let changesInOptions = this._differOptions.diff(this._options);

    if (changesInModel || (changesInOptions && !this.modelInitialized)) {
      this.Init();
    }
  }

  Init(): void {
    if (!this.value || !this.options || this.value.length == 0 || this.options.length == 0) {      
      if ((!this.value || this.value.length == 0) && this.options) {
        this.ToggleAllItemsSelection(false);
      }

      return;
    }

    for (let i = 0; i < this.options.length; i++) {
      this.options[i].selected = this.value.filter(x => this.options[i][this.valueProperty] == x[this.valueProperty]).length > 0;
    }

    this.modelInitialized = true;
  }

  ToggleDropDown(value?: boolean): void {
    if ((value == false && !this.showOptions) || (value == undefined && this.disabled)) return;

    if (value == undefined) { 
      if (this.showOptions) {
        this.setComboTouched();
      }

      this.showOptions = !this.showOptions;      
    } else {
      if (!value && this.showOptions) {
        this.setComboTouched();
      }

      this.showOptions = value;
    }
    
    this.clearSearch();
  }
  ToggleItemSelected(item: any): void {
    if (this.disabled) {
      return;
    }
    
    item.selected = !item.selected;
    this.updateModel();
  }
  ToggleAllItemsSelection(value: boolean): void {
    if (this.disabled) {
      return;
    }
    
    if (!this.options || this.options.length == 0) return;

    for (let i = 0; i < this.options.length; i++) {
      this.options[i].selected = value;
    }

    this.updateModel();
    this.clearSearch();
  }
  ItemSelectedCheckChanged(): void {
    if (this.disabled) {
      return;
    }
    
    this.updateModel();
  }  

  RemoveItem(item: any, index: number, event: any) {
    if (this.disabled || !this.options || this.options.length == 0) {
      return;
    }
    
    let itemToRemove = this.options.find(x => x[this.valueProperty] == item[this.valueProperty]);

    if (itemToRemove) {
      this.ToggleItemSelected(itemToRemove);
      this.clearSearch();
    } else {
      this.value.splice(index, 1);
    }

    event.stopPropagation();
  }
  
  OnComboPressed(e: KeyboardEvent): void {
    if (e.keyCode == 13) {
      this.ToggleDropDown();
      e.preventDefault();
    }
  }

  private clearSearch(): void {
    this.search = '';
  }
  private updateModel(): void {
    if (!this.options || this.options.length == 0) {
      this.value = [];
      return;
    }
    
    this.value = this.options.filter(x => x.selected);
  }
  private setComboTouched(): void {
    this.comboTouched = true;
  }

}
