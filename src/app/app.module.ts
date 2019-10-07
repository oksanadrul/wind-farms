import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {effects, reducers} from './core/store';
import {HighchartsChartModule} from 'highcharts-angular';
import {RestApiService} from './core/services/rest-api.service';
import {MaterialModule} from './angular-material.module';

/* COMPONENTS */
import {AppComponent} from './app.component';
import {AppNavigationComponent} from './components/navigation/navigation.component';
import {FilterComponent} from './components/filter/filter.component';
import {ChartComponent} from './components/chart/chart.component';
import {TableComponent} from './components/table/table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavigationComponent,
    ChartComponent,
    TableComponent,
    FilterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MATERIAL_MODULES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('winds', reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    RestApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

