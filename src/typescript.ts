function typeScriptGenricCaller<T>(args: T): T {
    return args;
}
let var_typeScriptGenricCaller = typeScriptGenricCaller<string>('Naseer Mohammed');
console.log(var_typeScriptGenricCaller);

function typeScriptGenricCallerArray<T>(args: T) : T {
    return args;
}
let arrayNumber = [1,2,3,4,5];
let var_typeScriptGenricCallerArray = typeScriptGenricCallerArray<Array<number>>(arrayNumber);
console.log(var_typeScriptGenricCallerArray);



