import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent1 {

 // name = new FormControl();
  heroForm = new FormGroup({
    name: new FormControl()
  });

}

