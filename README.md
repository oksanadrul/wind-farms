# WindFarm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Introduction
1. For generation data was created a server.
    * [json server](https://github.com/typicode/json-server) was used for it.
    * proxy was configured for API calls  with Angular CLI.
2. [Angular Material](https://material.angular.io/) was used for UI view.
    * Preferable for using because there are a lot of unit tests out of the box.
3. [Highcharts](https://www.highcharts.com/) was used for graphics.
4. [ngrx](https://ngrx.io/) was used for storing data. 
     
## Features
1. For the toggle menu was created button.
2. Menu items were added to the URL. Also, data from the filter was added to the URL. 
    * After reloading or sending URL with all parameters users can see relevant information.
3.  Button for showing data was not added it sorts in real-time. It means, after selecting the wind farm, you will see this information on the URL and on the dashboard.
4. Delay was added for loading data
    * that's why the memoization was used for loading data. It means that we load only once from the server and all next times we load it from our store.
5. Filtering by Wind Farm id was added on the backend part.
6. Added `404 Page` if the URL doesn't include in our app.
  
## Development server

Run `npm run start:proxy:mock:server` for running application. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
