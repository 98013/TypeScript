// #type of
const myNumber = 15;
console.log(typeof myNumber);

// #Satisfies
console.log(myNumber satisfies number > 10);

// #different ways of writing generics in Typescript.
function generalizedGenericFunction<T>( variable: T) {
    return variable;
}

function generalizedGenericFunction1<T>( variable: T) {
    return variable;
}

function generalizedGenericFunction2<T extends string | number | boolean>( variable: T) {
    return variable;
}

console.log(generalizedGenericFunction('Naseer Mohammed'), generalizedGenericFunction1(12345), generalizedGenericFunction1(true));
console.log(generalizedGenericFunction1<string>('Naseer Mohammed'), generalizedGenericFunction1<number>(12345), generalizedGenericFunction1<boolean>(true));
console.log(generalizedGenericFunction2('Naseer Mohammed'), generalizedGenericFunction2(12345), generalizedGenericFunction2(true));


function typeScriptGenricCaller<T>(args: T[]): T[] {
    return args;
}
let var_typeScriptGenricCaller = typeScriptGenricCaller<number>([1, 2, 3, 4, 5]);
console.log(var_typeScriptGenricCaller);

function typeScriptGenricCallerArray<T extends Array<number> | Array<string>>(args: T): T {
    return <T>args.slice(4) ?? args.slice(4) as T;
}
let arrayNumber = [1, 2, 3, 4, 5];
let arrayStrings = ['1', '2', '3', '4', '5'];
let var_typeScriptGenricCallerArrayNumbers = typeScriptGenricCallerArray(arrayNumber);
let var_typeScriptGenricCallerArrayStrings = typeScriptGenricCallerArray(arrayStrings);
console.log(var_typeScriptGenricCallerArrayNumbers);
console.log(var_typeScriptGenricCallerArrayStrings);

type pass = { pass: "passed", marks: number };
type tution = { tution: "yes", score: number };

interface Ipair<T> {
    first: T;
    second: T
}

interface Ipair<T> {
    gender: T;
    salary: T
}

let simpleNumberObject: Ipair<number | string> & (pass | tution) = { first: 1, second: 2, gender: '32', salary: 'No Salary', pass: 'passed', marks: 123 }; console.log(simpleNumberObject);
let simpleStringObject: Ipair<number | string> & (pass | tution) = { first: 100, second: 200, gender: 22, salary: 90000, tution: "yes", score: 999 }; console.log(simpleStringObject);
console.log(simpleNumberObject);
console.log(simpleStringObject);

// #Dynamic key's with enum's
enum objectProps {
    Name = 'name',
    Age = 'age',
    Gender = 'gender',
    Salary = 'salary'
}

type myGenericObjectType<T> = {
    [key in objectProps]: T
}

let myGenericObject: myGenericObjectType<string | number> = { [objectProps.Name]: 'Naseer', [objectProps.Age]: '32', [objectProps.Gender]: 'Male', [objectProps.Salary]: 50000 };
console.log(myGenericObject);

// #Generic Utility Types
// #Partial, 
// #Readonly,
// #Record<K,T> keys mapped structure of T

const myPartialProperty: Partial<myGenericObjectType<string | number>> = { [objectProps.Name]: 'Name', [objectProps.Age]: 32 };
console.log(myPartialProperty);

type RecordTypes = { name: string, age: number; gender: string };
const myRecordProperty: Record<'character1' | 'character2' | 'character3', RecordTypes> = { 'character1': { name: 'naseer', age: 32, gender: 'female' }, 'character2': { name: 'naseer', age: 32, gender: 'female' }, 'character3': { name: 'naseer', age: 32, gender: 'female' } }
console.log(myRecordProperty)

type typeRecordType = {
    key1: string
}

type keys = 'name' | "number" | "boolean";

let RecordType1: Record<keys, typeRecordType> = { 'name': { key1: 'First Key' }, 'number': { key1: 'Second Key' }, "boolean": { key1: 'Third Key' } }
console.log(RecordType1);

// #Satisfies
export interface IShape {
    type: 'oval' | 'react';
    color: string;
}

// #First way of writing.
const IShapeObject: IShape = { type:'react', color:'green' };
console.log('Interface with Satisfies keyword', IShapeObject.type)
// #Second way of writing.
const IShapeObject1 = { type: 'react', color: 'yellow' } satisfies IShape
console.log('Type with Satisfies keyword ',IShapeObject1.color);

// #type declaration.
type TShapeObject = {
    type: 'oval' | 'react',
    color: string
}
// #First way of writing.
const TShapeObject1: TShapeObject = {type:'react', color:'pink'};
// #Second way of writing.
const TShapeObject2 = { type:'oval', color:'orange' } satisfies TShapeObject

type Entity = {
    name: string;
    age: number;
}

const myEntity: Entity = { name:'Bob', age:30 };
const withValidation  = <T>(entity: T) => {
    return {
        ...entity,
        validate () {}
    };
}

// #First way of writing.
const newObj = withValidation<Entity>(myEntity);
console.log(newObj.age);

// #Second way of writing.
const withValidation1  = <T extends Entity>(entity: T) => {
    return {
        ...entity,
        validate () {}
    };
}
const newObj1 = withValidation1(myEntity);
console.log(newObj1.age);

// #Third way of writing.
const newObj2 = withValidation(myEntity);
console.log(newObj2.age)

// #Fourth way of writing.
const myEntity1: Entity[] = [{name:'react', age:33}]
const withValidation2 = <T>(entity: T) =>{
    return {
        ...entity,
        validate() { return console.log('validate method Called'); }
    }
}
const newObj3 = withValidation2<Array<Entity>>(myEntity1);
console.log(newObj3['0']);

// #Object Types
const varObj: object = { name:'naseer', age:32 };
// #console.log(varObj?.name); // Gives you error.
console.log(('name' in varObj && varObj.name) ?? 'Property does not  exist');

// #string[] - string array
// #number[] - number array
// #{}[] - object array
const ObjectArray: {name:string,age:number}[] = [{name:'naseer',age:32},{name:'Azhaan',age:1}]
console.log('Object Array', ObjectArray);

const wayGenericObject: {name:string,age:number} = {name:'',age:0}

const waygenericTypes : (string | number | {name:string,age:number})[] = [{name:'naseer',age:32}];
const wayGenericTypes1: (string[] | number[] | {}[]) = [{name:'naseer',age:32}]
const wayGenericTypes2: (string | number |  typeof wayGenericObject)[] = [{name:'naseer',age:32}]
const wayGenericTypes3: (string[] | number[] | typeof wayGenericObject[]) = [{name:'naseer',age:32}];
console.log({"waygenericTypes": wayGenericObject},{"waygenericTypes": waygenericTypes}, {"waygenericTypes1":wayGenericTypes1}, {"wayGenericTypes2":wayGenericTypes2}, {"wayGenericTypes3":wayGenericTypes3});


// #Tuple - Fixed length and fixed type's in it.
let myTuple: [string, number, boolean] = ['Naseer Mohammed',98013,true];
console.log(myTuple[0], myTuple[1],myTuple[2]);

//# Enums is a set used to give numeric values friendly names.
enum myEnum {
    Zero,
    First,
    Second
}

console.log(myEnum.Zero, myEnum.First, myEnum.Second)

// #Literal Types(also know as Type Ailas) can be of string,number or boolean
type Price = 45 | 30 | 10;
let price: Price = 45;
console.log(price);
