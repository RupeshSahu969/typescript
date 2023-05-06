"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("Test function working");
    };
    return App;
}());
var y = new App();
y.test();
