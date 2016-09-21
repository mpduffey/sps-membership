"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SpsMembership = (function () {
    function SpsMembership() {
        this.people = [
            { img: { src: "img/tgt.jpg", bgposition: '-13px' }, name: "Tommy G. Thompson", title: "Secretary of Health and Human Services" },
            { img: { src: "img/snow.jpg" }, name: "John Snow", title: "Secretary of the Treasury" },
            { img: { src: "img/meese.jpg" }, name: "Ed Meese", title: "Attorney General" },
            { img: { src: "img/tgt.jpg" }, name: "Mike Duffey", title: "Special Assistant, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Morgan Duffey", title: "Special Assistant, White House Homeland Security Council" },
            { img: { src: "img/tgt.jpg" }, name: "Tom Alexander", title: "Director, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Matt O'Malley", title: "Special Assistant, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Anthony Murphy", title: "Director, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Ducky Hemenway", title: "Deputy White House Liaison, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Brandt Pasco", title: "Special Assistant, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Thomas Bezas", title: "Special Assistant, DoD" },
            { img: { src: "img/tgt.jpg" }, name: "Marie Vachon", title: "Director, White House" },
        ];
    }
    SpsMembership = __decorate([
        core_1.Component({
            selector: 'sps-membership',
            template: "\n\t\t<section id=\"membership\" class=\"section-padding white-bg text-center\">\n\t\t\t<div class=\"container mb-60\">\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div *ngFor=\"let person of people\" class=\"col-md-3\" style=\"height: 70px\">\n\t\t\t\t\t\t<div class=\"col-md-4\"><div class=\"img-circle\" [ngStyle]=\"{'background-image': 'url(' + person.img.src +')', 'background-position': person.img.bgposition}\"></div></div>\n\t\t\t\t\t\t<div class=\"col-md-8 align-left\"><p>{{person.name}}</p><p class=\"title\">{{person.title}}</p></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\tp {margin-bottom: 0;}\n\t\t.align-left {text-align: left;}\n\t\t.title {font-size: 9px;}\n\t\t.img-circle {background-size:cover; background-repeat:no-repeat; width:50px; height:50px;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SpsMembership);
    return SpsMembership;
}());
exports.SpsMembership = SpsMembership;
//# sourceMappingURL=sps-membership.js.map