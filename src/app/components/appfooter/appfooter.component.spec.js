"use strict";
var testing_1 = require("@angular/core/testing");
var appfooter_component_1 = require("./appfooter.component");
describe('AppfooterComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [appfooter_component_1.AppfooterComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(appfooter_component_1.AppfooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=appfooter.component.spec.js.map