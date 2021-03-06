import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxMaskModule } from 'ngx-mask';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxUiHeroDataGridModule } from '../data-grid/data-grid.module';
import { UiModule } from '../ui/ui.module';
import { CurrencySymbolPipe } from './base/currency-symbol.pipe';
import { BlockUiComponent } from './components/block-ui/block-ui.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputCurrencyComponent } from './components/input-currency/input-currency.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { InputDropdownGridComponent } from './components/input-dropdown-grid/input-dropdown-grid.component';
import { InputDropdownSearchComponent } from './components/input-dropdown-search/input-dropdown-search.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputMonthYearComponent } from './components/input-month-year/input-month-year.component';
import { InputMultiselectComponent } from './components/input-multiselect/input-multiselect.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputPercentComponent } from './components/input-percent/input-percent.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputTextareaComponent } from './components/input-textarea/input-textarea.component';
import { InputUploadComponent } from './components/input-upload/input-upload.component';
import { InputValidationsComponent } from './components/input-validations/input-validations.component';
import { RadialButtonComponent } from './components/radial-button/radial-button.component';
import { InputFormsConfig } from './input-forms-config';
import { INPUT_FORMS_CONFIG } from './input-forms-config.constants';
import { MaxValueValidator } from './validators/max-value-validator';
import { MinValueValidator } from './validators/min-value-validator';

export { CurrencySymbolPipe } from './base/currency-symbol.pipe';
export { InputFormsConfig } from './input-forms-config';
export { InputTextComponent } from './components/input-text/input-text.component';
export { InputValidationsComponent } from './components/input-validations/input-validations.component';
export { InputSelectComponent } from './components/input-select/input-select.component';
export { InputEmailComponent } from './components/input-email/input-email.component';
export { InputMonthYearComponent } from './components/input-month-year/input-month-year.component';
export { InputTextareaComponent } from './components/input-textarea/input-textarea.component';
export { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
export { InputRadioComponent } from './components/input-radio/input-radio.component';
export { InputCurrencyComponent } from './components/input-currency/input-currency.component';
export { InputPercentComponent } from './components/input-percent/input-percent.component';
export { InputNumberComponent } from './components/input-number/input-number.component';
export { InputDateComponent } from './components/input-date/input-date.component';
export { InputDateConfig } from './components/input-date/input-date-config';
export { InputUploadComponent } from './components/input-upload/input-upload.component';
export { RadialButtonComponent } from './components/radial-button/radial-button.component';
export { InputMultiselectComponent } from './components/input-multiselect/input-multiselect.component';
export { InputSwitchComponent } from './components/input-switch/input-switch.component';
export { BlockUiComponent } from './components/block-ui/block-ui.component';
export { InputDropdownGridComponent } from './components/input-dropdown-grid/input-dropdown-grid.component';
export { MaxValueValidator } from './validators/max-value-validator';
export { MinValueValidator } from './validators/min-value-validator';
export { InputDropdownSearchComponent } from './components/input-dropdown-search/input-dropdown-search.component';
export { BlockUi } from './classes/block-ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule,    
    FileUploadModule,
    UiModule,
    NgxUiHeroDataGridModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    MaxValueValidator,
    MinValueValidator,
    CurrencySymbolPipe,
    InputTextComponent,
    InputValidationsComponent,
    InputSelectComponent,
    InputEmailComponent,
    InputTextareaComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    InputCurrencyComponent,
    InputPercentComponent,
    InputNumberComponent,
    InputDateComponent,
    InputUploadComponent,
    RadialButtonComponent,
    InputMultiselectComponent,
    InputMonthYearComponent,
    InputSwitchComponent,
    InputDropdownGridComponent,
    BlockUiComponent,
    InputDropdownSearchComponent,
  ],
  exports: [
    MaxValueValidator,
    MinValueValidator,
    CurrencySymbolPipe,
    FileUploadModule,
    InputTextComponent,
    InputValidationsComponent,
    InputSelectComponent,
    InputEmailComponent,
    InputTextareaComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    InputCurrencyComponent,
    InputPercentComponent,
    InputNumberComponent,
    InputDateComponent,
    InputUploadComponent,
    RadialButtonComponent,
    InputMultiselectComponent,
    InputMonthYearComponent,
    InputSwitchComponent,
    InputDropdownGridComponent,
    InputDropdownSearchComponent,
    BlockUiComponent
  ],
})
export class NgxUiHeroInputFormsModule {
  static forRoot(config: InputFormsConfig): ModuleWithProviders {
    return {
      ngModule: NgxUiHeroInputFormsModule,
      providers: [
        {
          provide: INPUT_FORMS_CONFIG,
          useValue: config
        },
        {
          provide: CURRENCY_MASK_CONFIG,
          useValue: config.currency
        }
      ]
    };
  }
}
