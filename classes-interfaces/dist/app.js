"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
var employee = Department.createEmployee('Max');
console.log('static --', employee);
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT-dept') || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log('IT department - ID: ', this.id);
    };
    return ITDepartment;
}(Department));
var it = new ITDepartment('d2', ['Max']);
console.log(it);
var AccountDepartment = (function (_super) {
    __extends(AccountDepartment, _super);
    function AccountDepartment(id, reports) {
        var _this = _super.call(this, id, 'Account-dept') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found.');
        },
        set: function (value) {
            if (!value) {
                throw new Error('Please pass in a valid value!');
            }
            this.addReport(value);
        },
        enumerable: true,
        configurable: true
    });
    AccountDepartment.prototype.describe = function () {
        console.log('Accounting department - ID: ', this.id);
    };
    AccountDepartment.prototype.addEmployee = function (name) {
        if (name == 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountDepartment;
}(Department));
var account2 = new AccountDepartment('d3', []);
account2.addReport('Monthly expenses');
account2.addReport('Yearly expenses');
console.log(account2);
console.log(account2.mostRecentReport);
account2.describe();
account2.addEmployee('Max');
account2.addEmployee('Manu');
account2.printReports();
account2.printEmployeeInformation();
account2.mostRecentReport = 'Weekly Expense';
console.log(account2.mostRecentReport);
var MarketingDepartment = (function (_super) {
    __extends(MarketingDepartment, _super);
    function MarketingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Marketing-dept') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    MarketingDepartment.getInstance = function () {
        if (MarketingDepartment.instance) {
            return this.instance;
        }
        this.instance = new MarketingDepartment('d3', []);
        return this.instance;
    };
    MarketingDepartment.prototype.describe = function () {
        console.log('Accounting department - ID: ', this.id);
    };
    return MarketingDepartment;
}(Department));
var marketing = MarketingDepartment.getInstance();
console.log(marketing);
//# sourceMappingURL=app.js.map