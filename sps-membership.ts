import {Component, Input} from '@angular/core';

@Component({
	selector:				'sps-membership',
	template:				`
		<section id="membership" class="section-padding white-bg text-center">
			<div class="container mb-60">
				<div class="row text-center">
					<div *ngFor="let person of membership.members" class="col-md-3" style="height: 70px">
						<div class="col-xs-4"><div *ngIf="!person.img.src" class="user-frame"><i class="fa fa-user fa-2x"></i></div><div *ngIf="person.img.src" class="img-circle" [ngStyle]="{'background-image': 'url(' + person.img.src +')', 'background-position': person.img.bgposition}"></div></div>
						<div class="col-xs-8 align-left"><p>{{person.name}}</p><p class="title">{{person.title}}</p></div>
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
		.user-frame {background-color: gray; border-radius: 50%; width: 40px; height: 40px;}
		i {color: white; top: 50%; text-align: center; margin-top: -15px; position: relative}
	`]
})

export class SpsMembership {
	@Input() membership;
}