import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    private chart: am4charts.XYChart3D;
    breakpoint: number;
    colspoint: number = 0;

    constructor(private zone: NgZone) { }

    ngOnInit() {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
        this.colspoint = (window.innerWidth <= 400) ? 1 : 0;
    }

    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
    }

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.languageSkills();
            this.toolsSkills();
            this.scriptingLanguageSkills();
            this.frameworkSkills();
            this.databaseSkills();
            this.technologySkills();
            this.serverAndVersionControlSkills();
            this.cloudTechnologySkills();
        });
    }

    cloudTechnologySkills() {
        let chart = am4core.create("cloudTechnologySkillsDiv", am4charts.PieChart);
        chart.hiddenState.properties.opacity = 0; 

        chart.data = [
            {technology: " AWS EC2",rate: 6},
            {technology: "S3",rate: 6},
            {technology: "Dynamo DB",rate: 5}
        ];
        chart.radius = am4core.percent(70);
        chart.innerRadius = am4core.percent(40);
        chart.startAngle = 180;
        chart.endAngle = 360;

        let series = chart.series.push(new am4charts.PieSeries());
        series.dataFields.value = "rate";
        series.dataFields.category = "technology";

        series.slices.template.cornerRadius = 10;
        series.slices.template.innerCornerRadius = 7;
        series.slices.template.draggable = true;
        series.slices.template.inert = true;
        series.alignLabels = false;

        series.hiddenState.properties.startAngle = 90;
        series.hiddenState.properties.endAngle = 90;

        chart.legend = new am4charts.Legend();
    }

    serverAndVersionControlSkills() {
        let chart = am4core.create("serverAndVersionControlSkillsDiv", am4charts.TreeMap);
        chart.hiddenState.properties.opacity = 0;

        chart.data = [{
            name: "Web / Application Servers",
            children: [{name: "Tomcat",value: 9},{name: "Web Sphere",value: 6},{name: "JBOSS",value: 6}]
        },
        {
            name: "Version Control",
            children: [{name: "GIT",value: 8},{name: "SVN",value: 6}]
        },
        {
             name: "Testing Frameworks",
             children: [{name: "JUnit",value: 8},{name: "Mockito",value: 8}]
        }
    ];

        chart.colors.step = 2;

        // define data fields
        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";

        chart.zoomable = false;
        let bgColor = new am4core.InterfaceColorSet().getFor("background");

        // level 0 series template
        let level0SeriesTemplate = chart.seriesTemplates.create("0");
        let level0ColumnTemplate = level0SeriesTemplate.columns.template;

        level0ColumnTemplate.column.cornerRadius(10, 10, 10, 10);
        level0ColumnTemplate.fillOpacity = 0;
        level0ColumnTemplate.strokeWidth = 4;
        level0ColumnTemplate.strokeOpacity = 0;

        // level 1 series template
        let level1SeriesTemplate = chart.seriesTemplates.create("1");
        let level1ColumnTemplate = level1SeriesTemplate.columns.template;

        level1SeriesTemplate.tooltip.animationDuration = 0;
        level1SeriesTemplate.strokeOpacity = 1;

        level1ColumnTemplate.column.cornerRadius(10, 10, 10, 10)
        level1ColumnTemplate.fillOpacity = 1;
        level1ColumnTemplate.strokeWidth = 4;
        level1ColumnTemplate.stroke = bgColor;

        let bullet1 = level1SeriesTemplate.bullets.push(new am4charts.LabelBullet());
        bullet1.locationY = 0.5;
        bullet1.locationX = 0.5;
        bullet1.label.text = "{name}";
        bullet1.label.fill = am4core.color("#ffffff");

        chart.maxLevels = 2;
    }

    technologySkills() {
        let chart = am4core.create("technologySkillsDiv", am4charts.XYChart3D);
        // Add data
        chart.data = [
            { "technology": "Servlets", "rate": 8 },
            { "technology": "JSP", "rate": 6 },
            { "technology": "JSF", "rate": 5 },
            { "technology": "CSS", "rate": 7 },
            { "technology": "Web Services", "rate": 8 },
            { "technology": "Kafka", "rate": 7 },
            { "technology": "XACML", "rate": 8 },
            { "technology": "Drools", "rate": 6 },
            { "technology": "AEM", "rate": 6 }
        ];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "technology";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.renderer.labels.template.hideOversized = false;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.tooltip.label.rotation = 270;
        categoryAxis.tooltip.label.horizontalCenter = "right";
        categoryAxis.tooltip.label.verticalCenter = "middle";

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Technology";
        valueAxis.title.fontWeight = "bold";

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueY = "rate";
        series.dataFields.categoryX = "technology";
        series.name = "Visits";
        series.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;
        columnTemplate.stroke = am4core.color("#FFFFFF");

        columnTemplate.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })

        columnTemplate.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })

        chart.cursor = new am4charts.XYCursor();
        chart.cursor.lineX.strokeOpacity = 0;
        chart.cursor.lineY.strokeOpacity = 0;
    }

    frameworkSkills() {
        let chart = am4core.create("frameworkSkillsDiv", am4charts.PieChart);

        // Add data
        chart.data = [
            { "technology": "Spring", "rate": 8 },
            { "technology": "Hibernate", "rate": 8 },
            { "technology": "Struts", "rate": 7 },
            { "technology": "Vaadin", "rate": 7 }
        ];

        // Set inner radius
        chart.innerRadius = am4core.percent(50);

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "rate";
        pieSeries.dataFields.category = "technology";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
    }

    databaseSkills() {
        let chart = am4core.create("databaseSkillsDiv", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();
        chart.data = [
            { "technology": "MySQL", "rate": 7 },
            { "technology": "PostgreSQL", "rate": 7 },
            { "technology": "H2", "rate": 7 },
            { "technology": "Maria DB", "rate": 7 },
            { "technology": "Mongo DB", "rate": 7 },
            { "technology": "Elastic Search", "rate": 6 }
        ];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "technology";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "rate";
        series.dataFields.categoryX = "technology";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.strokeWidth = 0;

        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;

        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        // Cursor
        chart.cursor = new am4charts.XYCursor();
    }

    toolsSkills() {
        let chart = am4core.create("toolsSkillsDiv", am4charts.XYChart3D);
        chart.paddingBottom = 30;
        chart.angle = 35;
        // Add data
        chart.data = [
            { "technology": "Eclipse", "rate": 10 },
            { "technology": "Intellij", "rate": 9 },
            { "technology": "Visual Studio", "rate": 9 },
            { "technology": "Maven", "rate": 8 },
            { "technology": "Ivy", "rate": 8 },
            { "technology": "Jenkins", "rate": 7 },
            { "technology": "Docker", "rate": 6 },
            { "technology": "Kubernetes", "rate": 6 },
            { "technology": "Jira", "rate": 8 },
            { "technology": "Rally", "rate": 8 },
            { "technology": "Bit Bucket", "rate": 8 },
            { "technology": "Sonar", "rate": 8 },
            { "technology": "Fortify", "rate": 5 },
            { "technology": "Confluence", "rate": 8 }
        ];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "technology";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let labelTemplate = categoryAxis.renderer.labels.template;
        labelTemplate.rotation = -90;
        labelTemplate.horizontalCenter = "left";
        labelTemplate.verticalCenter = "middle";
        labelTemplate.dy = 10;
        labelTemplate.inside = false;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = true;

        // Create series
        let series = chart.series.push(new am4charts.ConeSeries());
        series.dataFields.valueY = "rate";
        series.dataFields.categoryX = "technology";

        let columnTemplate = series.columns.template;
        columnTemplate.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })

        columnTemplate.adapter.add("stroke", function (stroke, target) {
            return chart.colors.getIndex(target.dataItem.index);
        })
        this.chart = chart;
    }

    scriptingLanguageSkills() {
        let chart = am4core.create("scriptingLanguageSkillsDiv", am4charts.PieChart);

        // Add data
        chart.data = [
            { "technology": "Angular", "rate": 8 },
            { "technology": "Angular JS", "rate": 8 },
            { "technology": "Ajax", "rate": 8 },
            { "technology": "Javascript", "rate": 8 },
            { "technology": "HTML", "rate": 8 }
        ];

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "rate";
        pieSeries.dataFields.category = "technology";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;
    }

    languageSkills() {
        let chart = am4core.create("languageSkillsDiv", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; 

        chart.data = [
            { "technology": "Java", "rate": 8 },
            { "technology": "Pyhton", "rate": 5 },
            { "technology": "C", "rate": 5 },
        ];

        chart.innerRadius = am4core.percent(40);
        chart.depth = 120;

        chart.legend = new am4charts.Legend();

        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "rate";
        series.dataFields.depthValue = "rate";
        series.dataFields.category = "technology";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
    }

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
