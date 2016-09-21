import {Component, Input} from '@angular/core';

@Component({
	selector:				'sps-membership',
	template:				`
		<section id="membership" class="section-padding white-bg text-center">
			<div class="container mb-60">
				<div class="row text-center">
					<div *ngFor="let person of membership.members" class="col-md-3" style="height: 70px">
						<div class="col-md-4"><i class="fa fa-user fa-lg"></i><div class="img-circle" [ngStyle]="{'background-image': 'url(' + person.img.src +')', 'background-position': person.img.bgposition}"></div></div>
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
	@Input() membership;
}