import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { TrendingComponent } from './trending.component';


@NgModule({
    declarations: [TrendingComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
    ]
})
export class TrendingModule { }