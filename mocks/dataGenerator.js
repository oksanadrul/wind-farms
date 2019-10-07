const moment = require('moment');

module.exports = () => {

  const data = {
    winds: [
      {'id': 1, name: 'Wind Farm 1', result: []},
      {'id': 2, name: 'Wind Farm 2', result: []},
    ]
  };

  /* Define dates */
  const monthsOfYear = 12;
  // Set current date, get months and year from current date
  const currentDate = moment('2018-09-03', 'YYYY/MM/DD').toDate();
  const previousMonth = moment(currentDate).subtract(1, 'month').month();
  const currentYear = moment(currentDate).year();

  // Get previous months and year from current day
  const previousYear = moment(currentDate).subtract(1, 'year').year();

  /* Define budgets */
  const firstFarmBudg = 450000;
  const secondFarmBudg = 600000;

  // Calculate range budget to each month
  const firstFarmBudgRang = firstFarmBudg/monthsOfYear;
  const secondFarmBudgRang = secondFarmBudg/monthsOfYear;

  // Define min and max number for generating randomly realized numbers
  const percent = 20/100;

  function getMinRange(farm) {
    return farm * (1-percent);
  }

  function getMaxRange(farm) {
    return farm * (1+percent);
  }

  // generate random realized numbers
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // return random number and round down to full hundred
    return Math.floor(((Math.random() * (max - min + 1)) + min)/100)*100;
  }

  /* Generate data for winds*/
  for (let i = 0; i < monthsOfYear; i++) {
    // Generate data for first wind in current year
    let generationData1 = {
      year: currentYear,
      month: moment().month(i).format('MMM'),
      budget: secondFarmBudgRang,
      realized: getRandomInt(getMinRange(secondFarmBudgRang), getMaxRange(secondFarmBudgRang))
    };

    // Generate data for second wind for previous year
    let generationData2 = {
      year: previousYear,
      month: moment().month(i).format('MMM'),
      budget: firstFarmBudgRang,
      realized: getRandomInt(getMinRange(firstFarmBudgRang), getMaxRange(firstFarmBudgRang))
    };
    // Clear realized numbers in current and next months
    if (i > previousMonth) {
      generationData1.realized = null;
    }

    data.winds[0].result.push(generationData1);
    data.winds[1].result.push(generationData2);
  }

  return data;
};
