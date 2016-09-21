import {Component} from '@angular/core';

@Component({
	selector:				'sps-membership',
	template:				`
		<section id="membership" class="section-padding white-bg text-center">
			<div class="container mb-60">
				<div class="row text-center">
					<div *ngFor="let person of people" class="col-md-3" style="height: 70px">
						<div class="col-md-4"><div class="img-circle" [ngStyle]="{'background-image': 'url(' + person.img.src +')', 'background-position': person.img.bgposition}"></div></div>
						<div class="col-md-8 align-left"><p>{{person.name}}</p><p class="title">{{person.title}}</p></div>
					</div>
				</div>
			</div>
		</section>
	`,
	styles:					[`
		p {margin-bottom: 0;}
		.align-left {text-align: left;}
		.title {font-size: 9px;}
		.img-circle {background-size:cover; background-repeat:no-repeat; width:50px; height:50px;}
	`]
})

export class SpsMembership {
	people = [
		{img: {src: "img/tgt.jpg", bgposition: '-13px'}, name: "Tommy G. Thompson", title: "Secretary of Health and Human Services"},
		{img: {src: "img/snow.jpg"}, name: "John Snow", title: "Secretary of the Treasury"},
		{img: {src: "img/meese.jpg"}, name: "Ed Meese", title: "Attorney General"},
		{img: {src: "img/tgt.jpg"}, name: "Mike Duffey", title: "Special Assistant, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Morgan Duffey", title: "Special Assistant, White House Homeland Security Council"},
		{img: {src: "img/tgt.jpg"}, name: "Tom Alexander", title: "Director, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Matt O'Malley", title: "Special Assistant, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Anthony Murphy", title: "Director, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Ducky Hemenway", title: "Deputy White House Liaison, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Brandt Pasco", title: "Special Assistant, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Thomas Bezas", title: "Special Assistant, DoD"},
		{img: {src: "img/tgt.jpg"}, name: "Marie Vachon", title: "Director, White House"},
	]
}