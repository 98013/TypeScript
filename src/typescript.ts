const axios = require('axios');
// #typeof - typeof return's a type of a variable.
const myNumber = 15;
console.log(typeof myNumber);

// #is keyword to check is of certain data type.
// # to tell is of certain type.


// #Using keyword available in Node 5.2


// #Difference between as, satisfies operator and is.
// #TypeScript's "is" type guard is useful when working with union types or intersection types. It allows you to discriminate 
// #between the different possible types within a union or intersection, and in turn, enables you to access the specific 
// #properties or methods of a certain type.

type isTypeChecking<T> = 'Naseer Mohammed' | 1000;
let stringTypeChecking: isTypeChecking<number> = 'Naseer Mohammed';
console.log(stringTypeChecking);

// #as operator - used to tell the Typescript complier that you know the actual type of a value more 
// #precisely than Typescript can Infer.
// #as is used for Type Narrowing.
type Color = | string | { r: number; g: number; b: number };
const red: Color = 'Red';
const green = 'Green' as Color; // #infers as Object.
const blue = { r: 100, g: 100, b: 100 } satisfies Color; // #infers as String.
console.log(red);
console.log(green.valueOf());
console.log(blue);

// #Satisfies operator.
// #the satisfies opertor is used for conditional types.it allows you to check if a type satisfies 
// #certain conditions specified within a conditional type.
console.log(myNumber satisfies number > 10);
// #we can write someting 
// #used for writing the type checking in an alternate way.
type IsString<T> = T extends string ? true : false;
let ResultString: IsString<string>;
let ResultNumber: IsString<number>

type ColorExpression = ColorString | ColorRGB;
type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = 0;

type Theme = Record<string, ColorExpression>;
// # Normal Approach, where we need to add typechecking 
const theme: Theme = {
	primary: 'red',
	secondary: 0,
	teritary: 'purple'
}
// #here we are adding type checkig to avoid we use APPROACH-1
typeof theme.primary === 'string' && theme.primary.toUpperCase();
typeof theme.secondary === 'number' && theme.secondary++;

//APPROACH-1 # Alternate Approach using Satisfies operator, typechecking can be overcome using Satisfies operator.
const theme1 = {
	primary: 'blue',
	secondary: 0,
	teritary: 'yellow'
} satisfies Theme

theme1.primary.toUpperCase();

//# making Object readonly using "as const satisfies"
const theme2 = {
	primary: 'red',
	secondary: 0,
	teritary: 'blue'
} as const satisfies Theme

// @ts-ignore
theme2.secondary++
theme2.primary.toUpperCase();

type UserCols = "username" | "nickname" | "roles";
type User = Record<UserCols, string | string[] | undefined>;

const user = {
	username: 'naseer',
	nickname: undefined,
	roles: ['admin', 'dev']
} satisfies User

console.log(user.roles);


// #different ways of writing generics in Typescript.
function generalizedGenericFunction<T>(variable: T) {
	return variable;
}

function generalizedGenericFunction1<T>(variable: T) {
	return variable;
}

function generalizedGenericFunction2<T extends string | number | boolean>(variable: T) {
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
const IShapeObject: IShape = { type: 'react', color: 'green' };
console.log('Interface with Satisfies keyword', IShapeObject.type)
// #Second way of writing.
const IShapeObject1 = { type: 'react', color: 'yellow' } satisfies IShape
console.log('Type with Satisfies keyword ', IShapeObject1.color);

// #type declaration.
type TShapeObject = {
	type: 'oval' | 'react',
	color: string
}
// #First way of writing.
const TShapeObject1: TShapeObject = { type: 'react', color: 'pink' };
// #Second way of writing.
const TShapeObject2 = { type: 'oval', color: 'orange' } satisfies TShapeObject

type Entity = {
	name: string;
	age: number;
}

const myEntity: Entity = { name: 'Bob', age: 30 };
const withValidation = <T>(entity: T) => {
	return {
		...entity,
		validate() { }
	};
}

// #First way of writing.
const newObj = withValidation<Entity>(myEntity);
console.log(newObj.age);

// #Second way of writing.
const withValidation1 = <T extends Entity>(entity: T) => {
	return {
		...entity,
		validate() { }
	};
}
const newObj1 = withValidation1(myEntity);
console.log(newObj1.age);

// #Third way of writing.
const newObj2 = withValidation(myEntity);
console.log(newObj2.age)

// #Fourth way of writing.
const myEntity1: Entity[] = [{ name: 'react', age: 33 }]
const withValidation2 = <T>(entity: T) => {
	return {
		...entity,
		validate() { return console.log('validate method Called'); }
	}
}
const newObj3 = withValidation2<Array<Entity>>(myEntity1);
console.log(newObj3['0']);

// #Object Types
const varObj: object = { name: 'naseer', age: 32 };
// #console.log(varObj?.name); // Gives you error.
console.log(('name' in varObj && varObj.name) ?? 'Property does not  exist');

// #string[] - string array
// #number[] - number array
// #{}[] - object array
const ObjectArray: { name: string, age: number }[] = [{ name: 'naseer', age: 32 }, { name: 'Azhaan', age: 1 }]
console.log('Object Array', ObjectArray);

const wayGenericObject: { name: string, age: number } = { name: '', age: 0 }

const waygenericTypes: (string | number | { name: string, age: number })[] = [{ name: 'naseer', age: 32 }];
const wayGenericTypes1: (string[] | number[] | {}[]) = [{ name: 'naseer', age: 32 }]
const wayGenericTypes2: (string | number | typeof wayGenericObject)[] = [{ name: 'naseer', age: 32 }]
const wayGenericTypes3: (string[] | number[] | typeof wayGenericObject[]) = [{ name: 'naseer', age: 32 }];
console.log({ "waygenericTypes": wayGenericObject }, { "waygenericTypes": waygenericTypes }, { "waygenericTypes1": wayGenericTypes1 }, { "wayGenericTypes2": wayGenericTypes2 }, { "wayGenericTypes3": wayGenericTypes3 });


// #Tuple - Fixed length and fixed type's in it.
let myTuple: [string, number, boolean] = ['Naseer Mohammed', 98013, true];
console.log(myTuple[0], myTuple[1], myTuple[2]);

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

// # Exhaustive Switch using discriminated Unions.
type QueryOptionsOld = {
	table: 'users' | 'widgets' | 'sessions',
	userId?: string,
	widgetId?: string,
	sessionId?: string,
	limit: number,
	offset: number
}

type QueryOptions = { limit: number; offset: number } & ({
	table: "users",
	userId: string,
} | { table: "widget", widgetId: string } | { table: "sessions", sessionId: string });

function query(options: QueryOptions): string {
	switch (options.table) {
		case 'users': {
			return options.userId + options.limit;
		}
		case 'sessions': {
			return options.sessionId + options.offset;
		}
		case 'widget': {
			return options.widgetId + options.offset
		}
		default: {
			assert(options);
		}
	}
}

function assert(x: never): never {
	throw ('cannot reach this place in the code')
}


// #Intimidating TypeScript features, we can pass type to other types!
// #Generic Feature 1.
type MyGenericType<T> =
	{
		data: T;
	};

type Example1Type1Object = MyGenericType<{ firstName: string }>;
//                     ^?
const OutExample1Type1Object: Example1Type1Object = { data: { firstName: 'Naseer' } };
console.log('Generic Type Object is ', OutExample1Type1Object);

type Example1Type1Array = MyGenericType<{ [key: string]: (string | number | boolean)[] }>;
//                     ^?
const OutExample1Type1Array: Example1Type1Array = { data: { key: ['A', 98013, true] } }
console.log('Generic Type Array is ', OutExample1Type1Array)

// #Generic Feature 2.
type IjsonResponse = {
	userId: string,
	id: number,
	title: string,
	completed: boolean
}

type Rating = {
	rate: number;
	count: number;
}

type Welcome = {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: Rating;
}

type IProduct = Welcome & Rating;
const makeRequest = async<T>(url: string) => {
	try {
		const response = await axios.get(url);
		const responseData = await response.data;
		return responseData;
	}
	catch (error: any) {
		console.log(error);
	}
}

const responseItems = makeRequest<IProduct>('https://fakestoreapi.com/products/1').then((res) => res)
console.log("responseItems:", responseItems);

// 3.#Generic Feature with Set.
const set = new Set<number | string | boolean>();
//                                                 ^?
set.add(98013);
set.add('Naseer Mohammed');
set.add(true);
console.log("Keys: ", [set.keys()], "Entries: ", [set.entries()]);

// #creating a iterator Object of Keys.
const iteriatorKeys = set.keys();
console.log(iteriatorKeys.next().value);
console.log(iteriatorKeys.next().value);
console.log(iteriatorKeys.next().value);

// #creating a iterator Object of Values.
const iteriatorValues = set.values();
console.log(iteriatorValues.next().value);
console.log(iteriatorValues.next().value);
console.log(iteriatorValues.next().value);


const TResponse: IjsonResponse = { userId: '980130', title: 'Fellow Ship', id: 98013, completed: true };
//                                                                                       ^?
//=>

// #way 1 we have added "validate: () => void" as intersection.
const functionBinding = <T>(entity: T): (T & { validate: () => void }) => {
	return {
		...entity,
		validate: () => { return console.log('function 1 validate instantiated'); }
	}
}

// #way 2, here we have 
const functionBinding1 = <T>(entity: T) => {
	return {
		...entity,
		validate: () => { return console.log('function 2 validate instantiated'); }
	}
}

// #calling in first way(#way 1).
const output = functionBinding<IjsonResponse>(TResponse);
console.log(output.validate());

// #calling in second way(#way 2).
const output1 = functionBinding1<IjsonResponse>(TResponse);
console.log(output1.validate());



// #interfaces and Type in TypeScript
// #interfaces can be used for declaration merging, where interfaces with same name can be merged.
// #interface can have function declaration where parameter's can't be Optional 
interface Iinterface {
	firstName: string;
	lastName: string;
	age: number;
	gender: string;
}

interface Iinterface {
	getInfo(status: string): string;
}

class GeneralInformationObject implements Iinterface {
	constructor() {
	}
	firstName = 'Naseer';
	lastName = 'Mohammed';
	age = 32;
	gender = 'Male';
	getInfo(status?: string): string {
		return `Name: ${this.firstName}, SurName: ${this.lastName}, Age: ${this.age}, Gender: ${this.gender}, Married: ${status}`;
	}
}

let InfoBluePrintClass = new GeneralInformationObject();
console.log('Class Implemented using Interface ', InfoBluePrintClass.getInfo());

// #type in TypeScript can have optional parameters.
type GeneralInformationType = { firstName: string, lastName: string, age: number; gender: string };
type typeInfo = (fname: string, lname: string, age: number, gender: string, status?: string) => string;

const InfoBluePrintTypeFinal: GeneralInformationType = { firstName: 'Naseer', lastName: 'Mohammed', age: 32, gender: 'Male' };
console.log('InfoBluePrintTypeFinal Properties', InfoBluePrintTypeFinal.firstName, InfoBluePrintTypeFinal.lastName, InfoBluePrintTypeFinal.age, InfoBluePrintTypeFinal.gender);
const infoFinalOutput: typeInfo = (fname: string, lname: string, age: number, gender: string, status?: string) => `Name: ${fname}, SurName: ${lname}, Age: ${age}, Gender: ${gender}`;
console.log('infoFinalOutput', infoFinalOutput('Naseer', 'Mohammed', 32, 'Male'));

// # extends keyword in TypeScript.
//type obj = { length: number };
type extendedObjType = { name: string, age: number };
const mainObj: extendedObjType = { name: 'Naseer Mohammed', age: 32 };
function Myextension<T extends extendedObjType>(entity: T, key: keyof extendedObjType): string {
	return <string>entity[key] ?? entity[key] as string;
}
console.log('Extends Implementation ', Myextension(mainObj, 'age'));

// #Keyof - this is particullary used in the scenario of when pass the property persent in the Object or not
type checkProperty = 'firstName' | 'lastName' | 'gender' | 'age';
type personObjects = { firstName: string; lastName: string; gender: string; age: string };
const person: personObjects = { firstName: 'firstName', lastName: 'lastName', gender: 'gender', age: 'age' };
function checkObject(objectParameter: personObjects, key: checkProperty) {
	return person[key];
}
console.log('Unconvertional way of using keyOf operator ', checkObject(person, 'firstName'));

// # here we can use "keyof" directly on the type.
function checkObject1(objectParameter: personObjects, key: keyof personObjects) {
	return person[key];
}
console.log('Conventional way of using keyOf operator in TypeScript', checkObject1(person, 'firstName'));

// # generic way of writing function 
function genericFunction<T>(person: T, key: keyof T): T {
	return <T>person[key];
}
console.log('Conventional way of using keyof using generics ', genericFunction<personObjects>(person, 'firstName'));

// #Lookup Type - it is used to extract the Type from another type.
// # 

// # Union it can contain either A or B or (A and B), Intersection it should be A and B.
type Name = { name: string };
type Age = { age: number };

type Union = Name | Age | (Name & Age);
type Intersection = Name & Age;

const name = { name: 'Naseer Mohammed' };
const age = { age: 32 };
const nameAndage = { name: 'Naseer Mohammed', age: 32 }

let union: Union;
union = name;
union = age;
union = nameAndage;

let intersection: Intersection;
intersection = nameAndage;
// @ts-ignore
intersection = name;
// @ts-ignore
intersection = age;

// #enums -  Number Enums.
enum LoginMode {
	app = 0,
	email = 1,
	social = 2
}

// Lookup and reverse Lookup.
LoginMode['app']; // 0.
LoginMode[0];     // app.
console.log(Object.keys(LoginMode)); // output: ["app", "email", "social", "0","1","2"]

// # String Enums.
enum LoginMode1 {
	application = 'application',
	eletronicMail = 'eletronicMail',
	socialNetwork = 'socialNetwork'
}

console.log(Object.keys(LoginMode1)); // ['application','eletronicMail','socialNetwork']
// stable over network 
console.log(LoginMode1.application) // 'application'

// #Alternate for enums is union of string literals.
type loginMode = | 'app' | 'email' | 'social';
// #alternate for string literals
export const LoginDevice = {
	device: 'device',
	email: 'email',
	social: 'social'
} as const // #using "as const" make it readonly object. something like Object.freeze in javascript.

type typeLoggingMechanism = keyof typeof LoginDevice;
console.log(Object.keys(LoginDevice));
console.log(LoginDevice.device);

// #Mapped Types using above object.
type MappedTypes<T extends typeLoggingMechanism> = {
	[key in typeLoggingMechanism]: key
}

type type1 = MappedTypes<typeLoggingMechanism>;
let type1 = { device: "device", email: "email", social: "social" }
console.log(type1);

// #Mapped Type is use to create a new type by iteriating over list of properties.
//PropA | propB | PropC converting it to  { PropA: ..., PropB:..., PropC:...};
type Properties = "PropA" | "PropB" | "PropC" | 98013;
type MappedType<Properties extends string | number | symbol> = {
	[key in Properties]: key;
}
type MyNewMappedType = MappedType<Properties>;

// #TypeScript Mapped Types as clauses, agenda is to create getters and setters.
type State = {
	name: string;
	age: string;
}

// # propertykey.
// # only a string, number or a symbol can used as object property
// # use Propertykey instead of string | number | symbol.
type objectDeclaration<T extends PropertyKey> = {
	[key in T]: T
}
const ObjectDefinition: objectDeclaration<PropertyKey> = { name: 'name', 123: '123', 98013: 98013 };
let ObjectKeys: keyof typeof ObjectDefinition;
console.log('ObjectDefinition ', ObjectDefinition);

// #ThisType Utility.
type Math = {
	double(): void;
	triple(): void;
}

export const math: Math = {
	double(this: { value: number }) {
		this.value *= 2;
	},
	triple(this: { value: number }) {
		this.value *= 3;
	}
}

const thisutilityTypeObject = { ...math, value: 500 };
console.log(thisutilityTypeObject);
thisutilityTypeObject.double();
console.log(thisutilityTypeObject.value);
thisutilityTypeObject.triple();
console.log(thisutilityTypeObject.value);

export const MathwithTypeAnnotation: Math & ThisType<{ value: number }> = {
	double() {
		this.value = this.value * 2;
	},
	triple() {
		this.value = this.value * 3;
	}
}

// Object.assign copies prperties from source to target.
const thisTypeAnnotactionsObject = Object.assign(MathwithTypeAnnotation, { value: 111 })
thisTypeAnnotactionsObject.double();
console.log(thisTypeAnnotactionsObject.value)
thisTypeAnnotactionsObject.triple();
console.log(thisTypeAnnotactionsObject.value);

// # infer keyword is mainly used to create a type within a conditional type.



// #Preserving AutoComplete for Literal Unions.
type Padding = 'small' | 'normal' | 'large' | (string & {});
let padding: Padding;
padding = 'small'; // 12px
padding = '8px';
padding = 'Naseer Mohammed';

const getPadding = (padding?: Padding): string => {
	switch (padding) {
		case 'large': {
			return '12px';
		}
		case 'normal': {
			return '8px';
		}
		case 'small': {
			return '2px'
		}
		default: {
			return '14px'
		}
	}
}

getPadding();

/* #TypeScript Project References (Shared TypeScript Libraries). 
#Problem area where you want to reference the ts files from lib project into app project. 
# referening of ts files from lib project into app project can be achieved by making changes in the configuration of tscofig of lib project. 
/* change in tsconfig of lib project */
/* { 'declaration': true, 'declarationMap': true, /* uncomment 'composite': true , 'outDir': lib, 'rootDir':src} */
/* next add change in tsconfig of app project */
/* { 
references:[ {path:'../example-lib/'} ]
} */

/* # app project
in package.json file of app project add
"scripts":{
	build: "tsc --build"
}
# in app.js
import {hello } from  '../../example-lib';
*/

/* Upgrading project to ES6 Modules.
changes in packages.json { 'type': 'module', exports: './lib/index.js' }
changes in tsconfig.json {'module':'nodenext'} */

// # TypeScript Array Type Guards.
type Square = {
	type: 'square';
	size: number;
}

type Rectangle = {
	type: 'rectangle'
	height: number;
	width: number;
}

type Shape = Square | Rectangle;
// @ts-ignore
const shapes: Shape[] = getShapes();
const square = shapes.find((s): s is Square => s.type == 'square');
const size = square?.size;

const rectangle = shapes.find((s): s is Rectangle => s.type == 'rectangle');
const height = rectangle?.height;
const widget = rectangle?.width;

const getSquares = (s: Shape): s is Square => s.type == 'square';
const getRectangles = (s: Shape): s is Rectangle => s.type == 'rectangle';
const squares = shapes.find(getSquares);
const rectangles = shapes.find(getRectangles);
console.log(squares?.size)
console.log(rectangles?.height, rectangles?.width)

// # the most under rated feature Const.
// Until or unless we specify a object as const then only we will be able to access property values or else we will accces it as string only.

// @ts-ignore infers a as string because const Routes ={ admin: '/admin} as string because chage be changes as below

// Object.freeze only works on outer level where const works on whole object

Routes.admin = '/whatever'

const Routes = {
	home: '/',
	admin: '/admin',
	users: '/users'
} as const;

// @ts-ignore
//type RouterKeys = keyof typeof Routes;
// @ts-ignore
//type Route = (typeof Routes)[RouterKeys]


type Route = (typeof Routes)[keyof typeof Routes];
const goToRoute = (route: Route) => { };
console.log(goToRoute("/users"));

// Empty Objet type specifies that it cannot be null or undefined.
type emptyObjectType = {}

// if you ever get an error indexing
//1.use keyof typeof object.
//2.use Record as they are indexed.
//3.use str as keyof typeof myObj. 
