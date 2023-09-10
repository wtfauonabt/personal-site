"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const app_component_1 = require("./app.component");
const nx_welcome_component_1 = require("./nx-welcome.component");
const testing_2 = require("@angular/router/testing");
describe('AppComponent', () => {
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [app_component_1.AppComponent, nx_welcome_component_1.NxWelcomeComponent, testing_2.RouterTestingModule],
        }).compileComponents();
    });
    it('should render title', () => {
        var _a;
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect((_a = compiled.querySelector('h1')) === null || _a === void 0 ? void 0 : _a.textContent).toContain('Welcome profile');
    });
    it(`should have as title 'profile'`, () => {
        const fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('profile');
    });
});
//# sourceMappingURL=app.component.spec.js.map