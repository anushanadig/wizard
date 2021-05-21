import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component'

import { RouterModule } from '@angular/router';
import { RtlService } from '@fundamental-ngx/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FundamentalNgxCoreModule, GridListModule } from '@fundamental-ngx/core';
// import { FundamentalNgxPlatformModule } from '@fundamental-ngx/platform';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { WizardCustomizableExampleComponent } from '../app/wizard/wizard-customizable-example.component';

@NgModule({
    declarations: [
      AppComponent,
        WizardCustomizableExampleComponent
    ],
    imports: [
        BrowserModule,
FormsModule,
ReactiveFormsModule,
BrowserAnimationsModule,
FundamentalNgxCoreModule, GridListModule,
HttpClientModule,
CdkTableModule,
DragDropModule,
        RouterModule.forRoot([{path: '#', component:WizardCustomizableExampleComponent}],
        { useHash: true }),
    ],
    providers: [
        RtlService,
        
    ],
    entryComponents: [
        
    ],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule {}

// @NgModule({
//   declarations: [
//     AppComponent,
//     ServerComponent,
//     ServersComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
