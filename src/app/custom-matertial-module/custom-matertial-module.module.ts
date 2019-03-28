import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatRadioModule, MatGridListModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatTabsModule, MatTabLink} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatGridListModule,
    MatTabsModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatGridListModule,
    MatTabsModule,
    MatTabLink
  ]
})
export class CustomMatertialModuleModule { }
