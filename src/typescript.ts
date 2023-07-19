function typeScriptGenricCaller<T>(args: T): T {
    return args;
}
let var_typeScriptGenricCaller = typeScriptGenricCaller<string>('Naseer Mohammed');
console.log(var_typeScriptGenricCaller);

function typeScriptGenricCallerArray<T extends Array<number> | Array<string>>(args: T) :  T {
    return <T>args.slice(4) ?? args.slice(4) as T;
}
let arrayNumber = [1,2,3,4,5];
let arrayStrings = ['1','2','3','4','5'];
let var_typeScriptGenricCallerArrayNumbers = typeScriptGenricCallerArray<Array<number>>(arrayNumber);
let var_typeScriptGenricCallerArrayStrings = typeScriptGenricCallerArray<Array<string>>(arrayStrings);
console.log(var_typeScriptGenricCallerArrayNumbers);
console.log(var_typeScriptGenricCallerArrayStrings);

type pass = {pass:"passed",marks:number};
type tution = {tution:"yes", score: number};

interface Ipair<T> {
    first: T;
    second: T
}

interface Ipair<T> {
    gender:T;
    salary:T
}

let simpleNumberObject: Ipair<number | string> & (pass | tution) = {first:1, second:2, gender:'32', salary:'No Salary', pass:'passed',marks:123}; console.log(simpleNumberObject);
let simpleStringObject: Ipair<number | string> & (pass | tution) = {first:100, second:200,gender:22,salary:90000,tution:"yes",score:999}; console.log(simpleStringObject);
console.log(simpleNumberObject);
console.log(simpleStringObject);