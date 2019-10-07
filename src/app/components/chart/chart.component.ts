import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../core/store';
import {WindFarmResult} from '../../core/shared';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  data: WindFarmResult[];
  highcharts = Highcharts;
  updateFlag = false;
  chartConstructor = 'chart';
  chartCallback;
  // Set up all subscriptions
  subscriptions: Subscription[] = [];
  chartOptions = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [],
      crosshair: true,
      lineWidth: 2,
    },
    yAxis: {
      title: {
        text: 'MWh',
        style: {
          fontWeight: 'bold'
        },
        align: 'high',
        rotation: 0,
        y: -25,
        offset: 0
      },
      tickPixelInterval: 200,
      lineWidth: 2,
      minorGridLineWidth: 0,
      minorTickLength: 0,
      tickLength: 0,
      gridLineWidth: 0,
    },
    tooltip: {
      headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
        '<td style = "padding:0"><b>{point.y:.1f} MWh</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Budget',
      data: [],
      color: '#673ab7',
    },
      {
        name: 'Realized',
        data: [],
        color: '#4343485c'
      }
    ]
  };

  constructor(private store: Store<fromStore.WindManagementState>) {
    const self = this;

    this.chartCallback = chart => {
      // saving chart reference
      self.highcharts = chart;
    };
  }


  ngOnInit() {
    /* Subscriptions */
    this.subscriptions.push(
    this.store.pipe(select(fromStore.getFilteredEntitiesState)).subscribe(
      data => {
        this.data = data;
        if (this.data !== null) {
          // Redraw chart
          const self = this;
          this.highcharts = Highcharts;
          // Set data to chart from store
          self.chartOptions.xAxis.categories = this.data.map(wind => wind.month);
          self.chartOptions.title.text = (this.data[0].year).toString();
          self.chartOptions.series.forEach(el => {
            if (el.name === 'Budget') {
              el.data = this.data.map(wind => wind.budget);
            }

            if (el.name === 'Realized') {
              el.data = this.data.map(wind => wind.realized);
            }

          });
          self.updateFlag = true;
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
