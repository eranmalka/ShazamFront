import { NgModule } from '@angular/core';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';


@NgModule({
    imports:[MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule],
    exports:[MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule],
        providers:[ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
})

export class MaterialModule{}