const test = new Function('var x = 10;\
var y=20;\
return \'there\';')
console.log(test());

// const str = "sdljl3\n2j4l23";
// const replaced = str.replace(/([\r\n])/g, '\\$1');
// const result = (new Function('return (replaced);'))();
// console.log(result);

