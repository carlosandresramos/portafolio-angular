import { Component, Input, OnInit } from '@angular/core';
import { IconData } from 'src/interfaces/icon-data';

@Component({
  selector: 'app-devicon-container',
  templateUrl: './devicon-container.component.html',
  styleUrls: ['./devicon-container.component.css']
})
export class DeviconContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(this.IconSize === "small")
    {
      this.gapSize = "gap-small";
    }
  }

  @Input()
  ShowText : boolean = false;

  @Input()
  IconSize : string = "big";

  gapSize : string = "gap-big";

  @Input()
  Icons: IconData[] = [];

  IconsList: { [key: string]: string } = {
    "Csharp": "devicon-csharp-plain",
    "Java": "devicon-java-plain",
    "Python": "devicon-python-plain",
    "SqlServer": "devicon-microsoftsqlserver-plain",
    "MySql": "devicon-mysql-plain",
    "PostgreSql": "devicon-postgresql-plain",
    "HTML": "devicon-html5-plain",
    "Css": "devicon-css3-plain",
    "Bootstrap": "devicon-bootstrap-plain",
    "Angular": "devicon-angularjs-plain",
    ".Net Core" : "devicon-dotnetcore-plain",
    "Unity" : "devicon-unity-original",
    "OpenTk" : "devicon-opengl-plain",
    "Tomcat" : "devicon-tomcat-line",
    "GitHub" : "devicon-github-original",
    "Postman" : "devicon-postman-plain",
    "Swagger" : "devicon-swagger-plain",
    "Azure" : "devicon-azuresqldatabase-plain",
    "Type" : "devicon-typescript-plain",
    "Jira" : "devicon-jira-plain",
    "Slack" : "devicon-slack-plain",
    "Javascript" : "devicon-javascript-plain",
    "Jupyter" : "devicon-jupyter-plain",
    "Flask" : "devicon-flask-original",
    "MongoDB" : "devicon-mongodb-plain"
  };

}
