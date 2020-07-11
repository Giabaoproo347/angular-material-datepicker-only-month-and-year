import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';

import * as _moment from 'moment';
// @ts-ignore
import {default as _rollupMoment, Moment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM',
    },
};

@Component({
    selector: 'datepicker-views-selection-example',
    templateUrl: 'datepicker-views-selection-example.html',
    styleUrls: ['datepicker-views-selection-example.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },

        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class DatepickerViewsSelectionExample {
    date = new FormControl(moment());

    constructor(private _adapter: DateAdapter<any>) {
        this._adapter.setLocale('vi');
    }

    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
        const ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        ctrlValue.year(normalizedMonth.year());
        this.date.setValue(ctrlValue);
        datepicker.close();
    }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
