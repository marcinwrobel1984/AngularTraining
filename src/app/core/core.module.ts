import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHttpClientService } from './base-http-client.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BaseHttpClientService
  ]
})
export class CoreModule { }
