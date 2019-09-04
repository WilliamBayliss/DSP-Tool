const totalSales = document.querySelector("#totalSales");
const morningSales = document.querySelector("#morningSales");
const noonSales = document.querySelector("#noonSales");
const nightSales = document.querySelector('#nightSales');
const button = document.querySelector("#button");





ly_sales.addEventListener('input', runCalculations);


function runCalculations() {
let salesFigure = document.getElementById('ly_sales').value;


sales = parseInt(salesFigure || 0, 10);
// -----------FUNCTIONS FOR CALCULATIONS------------------------
    function salesGoal() {
        let totalIncrease = sales * 0.05;
        let newGoal = sales + totalIncrease;
        return newGoal.toFixed(2);
    };

    function morningGoal() {

        let totalIncrease = sales * 0.05;
        let newGoal = sales + totalIncrease;

        let morningGoal = newGoal * 0.2;
        return morningGoal.toFixed(2);
    };

    function noonGoal() {
        
        let totalIncrease = sales * 0.05;
        let newGoal = sales + totalIncrease;


        let noonGoal = newGoal * 0.5;
        return noonGoal.toFixed(2);
    };

    function nightGoal() {

        let totalIncrease = sales * 0.05;
        let newGoal = sales + totalIncrease;


        let nightGoal = newGoal * 0.3;
        return nightGoal.toFixed(2);
    };


    if (isNaN(salesFigure)) {
        return 'ERROR'
    } else {
    totalSales.innerHTML = salesGoal();
    morningSales.innerHTML = morningGoal();
    noonSales.innerHTML = noonGoal();
    nightSales.innerHTML = nightGoal();
    }
    return;
};

console.log('hello world')