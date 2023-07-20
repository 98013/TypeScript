function typeScriptGenricCaller<T>(args: T[]): T[] {
    return args;
}
let var_typeScriptGenricCaller = typeScriptGenricCaller<number>([1,2,3,4,5]);
console.log(var_typeScriptGenricCaller);

function typeScriptGenricCallerArray<T extends Array<number> | Array<string>>(args: T) :  T {
    return <T>args.slice(4) ?? args.slice(4) as T;
}
let arrayNumber = [1,2,3,4,5];
let arrayStrings = ['1','2','3','4','5'];
let var_typeScriptGenricCallerArrayNumbers = typeScriptGenricCallerArray(arrayNumber);
let var_typeScriptGenricCallerArrayStrings = typeScriptGenricCallerArray(arrayStrings);
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



// Dynamic key's with enum's
enum objectProps  {
    Name ='name',
    Age = 'age',
    Gender = 'gender',
    Salary = 'salary'
}

type myGenericObjectType<T> = {
    [key in objectProps]: T
}

let myGenericObject : myGenericObjectType<string | number> = {[objectProps.Name]:'Naseer',[objectProps.Age]:'32',[objectProps.Gender]:'Male', [objectProps.Salary]:50000};
console.log(myGenericObject);

// Generic Utility Types
// #Partial, 
// #Readonly,
// #Record<K,T> keys mapped structure of T


const myPartialProperty : Partial<myGenericObjectType<string | number>> = { [objectProps.Name] :'Name',[objectProps.Age]:32};
console.log(myPartialProperty);

type RecordTypes = {name:string,age:number;gender:string};
const myRecordProperty : Record<'character1' | 'character2' | 'character3', RecordTypes> = {'character1':{name:'naseer',age:32,gender:'female'}, 'character2':{name:'naseer',age:32,gender:'female'},'character3':{name:'naseer',age:32,gender:'female'}}
console.log(myRecordProperty)

type typeRecordType = {
    key1:string
}

type keys = 'name' | "number" | "boolean";

enum RecordTypeEnum {
    key1 ='key1',
}

let RecordType1: Record<keys , typeRecordType>  = {'name': {key1:'First Key'},'number':{key1:'Second Key'},"boolean":{key1:'Third Key'}}
console.log(RecordType1);
