"use strict";
var testing_1 = require("@angular/core/testing");
var wmsods_component_1 = require("./wmsods.component");
describe('wmsodsComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [wmsods_component_1.wmsodsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(wmsods_component_1.wmsodseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=wmsods.component.spec.js.map