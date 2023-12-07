"use strict";
exports.__esModule = true;
exports.cTeacher = exports.java = exports.react = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp();
exports.react = new Subjects.React();
exports.java = new Subjects.Java();
exports.cTeacher = {
    firstName: 'Breezy',
    lastName: 'Waisi',
    experienceTeachingC: 10
};
console.log('C++');
exports.cpp.setTeacher = exports.cTeacher;
console.log(exports.cpp.getRequirements());
console.log(exports.cpp.getAvailableTeacher());
console.log('Java');
exports.java.setTeacher = exports.cTeacher;
console.log(exports.java.getRequirements());
console.log(exports.java.getAvailableTeacher());
console.log('React');
exports.react.setTeacher = exports.cTeacher;
console.log(exports.react.getRequirements());
console.log(exports.react.getAvailableTeacher());
