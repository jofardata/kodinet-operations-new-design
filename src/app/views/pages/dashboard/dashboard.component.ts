// Angular
import { Component, OnInit } from '@angular/core';
// Lodash
import { shuffle } from 'lodash';
// Services
import { LayoutConfigService } from '../../../core/_base/layout';
// Widgets model
import { SparklineChartOptions } from '../../../core/_base/layout';
import { Widget4Data } from '../../partials/content/widgets/widget4/widget4.component';
import { StatsService } from './stats.service';
// import { WeatherService } from '../services/weather.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Chart} from 'chart.js';
import {Chart} from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';
import {monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
// import "core-js/shim";
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	stats;
	chart = [];
	lineChart = [];
	BarChart = [];
  
	data : any[]; 
	mois = [];  
	montant =[];
	constructor(private layoutConfigService: LayoutConfigService,
		private statsService:StatsService) {
			monkeyPatchChartJsTooltip();
	  monkeyPatchChartJsLegend();
	}
	 // chartOptions1: SparklineChartOptions;
	// chartOptions2: SparklineChartOptions;
	// chartOptions3: SparklineChartOptions;
	// chartOptions4: SparklineChartOptions;
	// widget4_1: Widget4Data;
	// widget4_2: Widget4Data;
	// widget4_3: Widget4Data;
	// widget4_4: Widget4Data;
	// data;

	// getStat() {
	// 	this.statsService.getAllStats().subscribe(res=>{
	// 	  this.stats = res.body.data
	// 	//   alert(this.stats);
	//   })
	// } 

	// public pieChartLabels: Label[] = ['Trancom','Mines','PMEA','Industry','Energie'];
	// public pieChartData: SingleDataSet = [300, 500, 200,500,50];
	public pieChartData: SingleDataSet = [500];
	public pieChartType: ChartType = 'pie';
	public pieChartLegend = true;
	public pieChartPlugins = [];
	public barChartOptions: ChartOptions = {
		responsive: true,
	  };
	  public pieChartOptions: ChartOptions = {
		responsive: true,
	  };

	//   public barChartData: ChartDataSets[] = [
	// 	{ data: [25, 32, 35, 38, 40, 21, 19,41,43,40,17,32] },
	// 	// {data : this.stats },
	//   ];

	  public barChartData: ChartDataSets[] = [
		{ data: this.montant },
		// {data : this.stats },
	  ];

	  public barChartColors: Color[] = [
		{ backgroundColor: '#3b79d5' },
		{borderColor:['red']}
	  ]

  		// public barChartLabels: Label[] = ['Janv', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','oct','Nov','Dec'];
	  	public barChartLabels: Label[];
  		public barChartType: ChartType = 'bar';
	  	public barChartLegend = localStorage.getItem('entityName');
		  public barChartPlugins = [];
		  
		  //2eme graphique

		//   public lineChartData: ChartDataSets[] = [
		// 	{ data: this.montant },
		// 	// {data : this.stats },
		//   ];
	
		//   public lineChartColors: Color[] = [
		// 	{ backgroundColor: '#3b79d5' },
		// 	{borderColor:['red']}
		//   ]
	
		// 	  // public barChartLabels: Label[] = ['Janv', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sept','oct','Nov','Dec'];
		// 	  public lineChartLabels: Label[];
		// 	  public lineChartType: ChartType = 'bar';
		// 	  public lineChartLegend = localStorage.getItem('entityName');
		// 	  public lineChartPlugins = [];

	ngOnInit() {

		this.statsService.dataOrdonnancee().subscribe(response=>{
			console.log(response.body.data);    
	  
			this.data = response.body.data;      
	  
			this.data.forEach(obj=>{        
			  this.mois.push(String(obj['mois']));
			  this.montant.push(Number(obj['montant']));
			});
	  
			this.data = this.montant;
			this.barChartLabels = this.mois;
			// this.lineChartLabels = this.mois;
			this.getdataStat();
			
			//BAR CHART
		  //=========
		//   this.BarChart = new Chart('barChart',{
		// 	type: 'bar',
		// 	data: {
		// 	  labels: this.mois,
		// 	  datasets: [{
		// 		label: localStorage.getItem('entityName'),
		// 		data: this.montant,
		// 		backgroundColor: [
		// 		  "#3cb371",  
		// 		  "#0000FF",  
		// 		  "#9966FF",  
		// 		  "#4C4CFF",  
		// 		  "#00FFFF",  
		// 		  "#f990a7",  
		// 		  "#aad2ed",  
		// 		  "#FF00FF",  
		// 		  "Blue",  
		// 		  "Red",  
		// 		  "Blue",
		// 		  "Gray",
		// 		  "white",
		// 		  "green"  
		// 		],
		// 		borderColor:[
		// 		  "#3cb371",  
		// 		  "#0000FF",  
		// 		  "#9966FF",  
		// 		  "#4C4CFF",  
		// 		  "#00FFFF",  
		// 		  "#f990a7",  
		// 		  "#aad2ed",  
		// 		  "#FF00FF",  
		// 		  "Blue",  
		// 		  "Red",  
		// 		  "Blue",
		// 		  "Gray",
		// 		  "white",
		// 		  "green"  
		// 		],
		// 		borderwidth: 1
		// 	  }]
		// 	},
		// 	options:{
		// 	  title:{
		// 		text:"Recettes Ordonnancées",
		// 		display:true
		// 	  },
		// 	  scales:{
		// 		yAxes:[{
		// 		  ticks: {
		// 			beginAtZero:true
		// 		  }
		// 		}]
		// 	  }
		// 	}
		//   });
	  
		  //LINE CHART
		  //==========
		//   this.LineChart = new Chart('lineChart',{
		// 	type: 'line',
		// 	data:{
		// 	  labels:this.mois,
		// 	  datasets:[{
		// 		label: localStorage.getItem('entityName'),
		// 		data: this.montant,
		// 		fill:false,
		// 		lineTension:0.2,
		// 		borderColor:"red",
		// 		borderWidth:1 
		// 	  }]
		// 	},
		// 	options:{
		// 	  title:{
		// 		text:"Recettes Ordonnancées",
		// 		display:true
		// 	  },
		// 	  scales:{
		// 		yAxes:[{
		// 		  ticks: {
		// 			beginAtZero:true
		// 		  }
		// 		}]
		// 	  }
		// 	}
		//   });
	  
		  });
  
		//   this.statsService.getAllStats().subscribe(res=>{
		// 	this.stats = res.body.data
		// });

	}

	
	
		// this.weatherService.getStats().subscribe(res=>{
		// 	const t_board = res['data'].map(res => res.t.totalBoarding);
		// 	const t_gopas = res['data'].map(res => res.t.totalGopass);
		// 	const t_vignette = res['data'].map(res => res.t.totalVignette);
		// 	const t_freigth = res['data'].map(res => res.t.totalFreight);
		// 	const t_driv = res['data'].map(res => res.t.totalDrvingLicense);
		// 	const weather = [];
		// })

		// this.chartOptions1 = {
		// 	data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
		// 	color: this.layoutConfigService.getConfig('colors.state.brand'),
		// 	border: 3
		// };
		// this.chartOptions2 = {
		// 	data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
		// 	color: this.layoutConfigService.getConfig('colors.state.danger'),
		// 	border: 3
		// };
		// this.chartOptions3 = {
		// 	data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
		// 	color: this.layoutConfigService.getConfig('colors.state.success'),
		// 	border: 3
		// };
		// this.chartOptions4 = {
		// 	data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
		// 	color: this.layoutConfigService.getConfig('colors.state.primary'),
		// 	border: 3
		// };

		// @ts-ignore
		// this.widget4_1 = shuffle([
		// 	{
		// 		pic: './assets/media/files/doc.svg',
		// 		title: 'Metronic Documentation',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 	}, {
		// 		pic: './assets/media/files/jpg.svg',
		// 		title: 'Project Launch Evgent',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 	}, {
		// 		pic: './assets/media/files/pdf.svg',
		// 		title: 'Full Developer Manual For 4.7',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 	}, {
		// 		pic: './assets/media/files/javascript.svg',
		// 		title: 'Make JS Great Again',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 	}, {
		// 		pic: './assets/media/files/zip.svg',
		// 		title: 'Download Ziped version OF 5.0',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 	}, {
		// 		pic: './assets/media/files/pdf.svg',
		// 		title: 'Finance Report 2016/2017',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 	},
		// ]);
		// // @ts-ignore
		// this.widget4_2 = shuffle([
		// 	{
		// 		pic: './assets/media/users/100_4.jpg',
		// 		username: 'Anna Strong',
		// 		desc: 'Visual Designer,Google Inc.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		buttonClass: 'btn-label-brand'
		// 	}, {
		// 		pic: './assets/media/users/100_14.jpg',
		// 		username: 'Milano Esco',
		// 		desc: 'Product Designer, Apple Inc.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		buttonClass: 'btn-label-warning'
		// 	}, {
		// 		pic: './assets/media/users/100_11.jpg',
		// 		username: 'Nick Bold',
		// 		desc: 'Web Developer, Facebook Inc.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		buttonClass: 'btn-label-danger'
		// 	}, {
		// 		pic: './assets/media/users/100_1.jpg',
		// 		username: 'Wilter Delton',
		// 		desc: 'Project Manager, Amazon Inc.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		buttonClass: 'btn-label-success'
		// 	}, {
		// 		pic: './assets/media/users/100_5.jpg',
		// 		username: 'Nick Stone',
		// 		desc: 'Visual Designer, Github Inc.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		buttonClass: 'btn-label-dark'
		// 	},
		// ]);
		// // @ts-ignore
		// this.widget4_3 = shuffle([
		// 	{
		// 		icon: 'flaticon-pie-chart-1 kt-font-info',
		// 		title: 'Metronic v6 has been arrived!',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+$500',
		// 		valueColor: 'kt-font-info'
		// 	}, {
		// 		icon: 'flaticon-safe-shield-protection kt-font-success',
		// 		title: 'Metronic community meet-up 2019 in Rome.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+$1260',
		// 		valueColor: 'kt-font-success'
		// 	}, {
		// 		icon: 'flaticon2-line-chart kt-font-danger',
		// 		title: 'Metronic Angular 7 version will be landing soon..',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+$1080',
		// 		valueColor: 'kt-font-danger'
		// 	}, {
		// 		icon: 'flaticon2-pie-chart-1 kt-font-primary',
		// 		title: 'ale! Purchase Metronic at 70% off for limited time',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '70% Off!',
		// 		valueColor: 'kt-font-primary'
		// 	}, {
		// 		icon: 'flaticon2-rocket kt-font-brand',
		// 		title: 'Metronic VueJS version is in progress. Stay tuned!',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+134',
		// 		valueColor: 'kt-font-brand'
		// 	}, {
		// 		icon: 'flaticon2-notification kt-font-warning',
		// 		title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '70% Off!',
		// 		valueColor: 'kt-font-warning'
		// 	}, {
		// 		icon: 'flaticon2-file kt-font-focus',
		// 		title: 'Metronic React version is in progress.',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+13%',
		// 		valueColor: 'kt-font-focus'
		// 	},
		// ]);
		// // @ts-ignore
		// this.widget4_4 = shuffle([
		// 	{
		// 		pic: './assets/media/client-logos/logo5.png',
		// 		title: 'Trump Themes',
		// 		desc: 'Make Metronic Great Again',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+$2500',
		// 		valueColor: 'kt-font-brand'
		// 	}, {
		// 		pic: './assets/media/client-logos/logo4.png',
		// 		title: 'StarBucks',
		// 		desc: 'Good Coffee & Snacks',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '-$290',
		// 		valueColor: 'kt-font-brand'
		// 	}, {
		// 		pic: './assets/media/client-logos/logo3.png',
		// 		title: 'Phyton',
		// 		desc: 'A Programming Language',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+$17',
		// 		valueColor: 'kt-font-brand'
		// 	}, {
		// 		pic: './assets/media/client-logos/logo2.png',
		// 		title: 'GreenMakers',
		// 		desc: 'Make Green Great Again',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '-$2.50',
		// 		valueColor: 'kt-font-brand'
		// 	}, {
		// 		pic: './assets/media/client-logos/logo1.png',
		// 		title: 'FlyThemes',
		// 		desc: 'A Let\'s Fly Fast Again Language',
		// 		url: 'https://keenthemes.com.my/metronic',
		// 		value: '+200',
		// 		valueColor: 'kt-font-brand'
		// 	},
		// ]);
	

	public getDataOrdonnancee(){
		this.statsService.dataOrdonnancee().subscribe(response=>{
		  console.log(response.body.data);    
	
		  this.data = response.body.data;
		});
}
public getdataStat(){
this.statsService.getAllStats().subscribe(res=>{
	console.log(res)
	this.stats = res.body.data
  })

}

}
