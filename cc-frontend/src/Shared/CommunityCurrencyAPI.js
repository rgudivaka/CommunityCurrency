export default class CommunityCurrencyAPI {
    constructor(funcs){
        this.chartData = funcs.httpsCallable('chartData');
        this.boxData = funcs.httpsCallable('boxData');
        this.updateChartData = funcs.httpsCallable('updateChartData');
    }
    
}