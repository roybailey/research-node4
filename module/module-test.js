
console.log("----- RevealingModule -----");
var RevealingModule = require('./revealing-module.js');
var obj = new RevealingModule({title: 'module-test'});

console.log(JSON.stringify(obj,null,2));
console.log(obj.publicMethod('test1'));
console.log("----- WrapperModule -----");

WrapperModule = require('./wrapper-module.js')(obj);

console.log(JSON.stringify(WrapperModule,null,2));
console.log(WrapperModule.publicMethod('test2'));
console.log(WrapperModule.wrapperExtension('test3'));

console.log("----- The End -----");
