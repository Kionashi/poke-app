import { Component, OnInit } from '@angular/core';
import {Fan} from '../models/fan.model';

  @Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],
  })
  export class TestComponent implements OnInit {

    teams: string[]
    fanName : string
    fanAge : number
    fanCountry : string
    fanTeam: string
    
    constructor(){
      this.teams = []
      this.teams.push('Barcelona')
      this.teams.push('Real Madrid')
      }
    ngOnInit(): void {
    }

    addFanFromEvent(object: {fan: Fan, originTeamName: string}){
      console.log('ADD FAN')
      for (let team of this.teams){
        if (team != object.originTeamName){
          this.addFan(object.fan, team)
        }
      }
      // if(object.name != this.name){
      //   this.fanList.push(object.fan)
      // } 
    }

    addFan(fan: Fan = null, teamName: string = ''){
      if (!fan){
        var fan = new Fan(this.fanName,this.fanAge,this.fanCountry) 
      }
      
    }

    onKeydown(event) {
      if (event.key === "Enter") {
        this.addFan();
      }
    }

    resetFan(){
      this.fanName = ''
      this.fanAge = 0
      this.fanCountry = ''
    }
    
  }