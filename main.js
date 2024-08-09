var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = /** @class */ (function () {
    function School(name) {
        this.students = [];
        this.teachers = [];
        this.name = name;
    }
    School.prototype.addstudent = function (stdObj) {
        this.students.push(stdObj);
    };
    School.prototype.addTeacher = function (teaObj) {
        this.teachers.push(teaObj);
    };
    return School;
}());
var Student = /** @class */ (function () {
    function Student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return Student;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.email = "";
        _this.contact = "";
        return _this;
    }
    Teacher.prototype.addInfo = function (email, contact) {
        this.email = email;
        this.contact = contact;
    };
    return Teacher;
}(Student));
var school1 = new School("Educator");
var school2 = new School("Toodler");
var s1 = new Student("sara", 30, school1.name);
var s2 = new Student("hina", 23, school2.name);
var t1 = new Teacher("Tooba", 50, school1.name);
var t2 = new Teacher("Areeba", 55, school2.name);
t1.addInfo("abc@abc.com", "1234567");
t2.addInfo("jkl@jkl.com", "0987654");
school1.addstudent(s1);
school2.addstudent(s2);
school1.addTeacher(t1);
school2.addTeacher(t2);
console.log(school1);
console.log(school2);
