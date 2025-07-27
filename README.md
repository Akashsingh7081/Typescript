# TypeScript & TSX Complete Guide

## 1. TypeScript Setup -- Install tsx either globbaly or locally , if it is installed locally then you have to use npx befor running any command and if you have installed it tsc globally then you can run any command without using npx.In this projet it is installed locally.

Basic setup for TypeScript in React projects with proper configuration.

## 2. Data Types in .tsx

### a. Primitive Types
These are the basic, built-in types that represent simple values.

**Examples:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`

```typescript
let name: string = "Akash";
let age: number = 25;
let isActive: boolean = true;
let value: null = null;
let data: undefined = undefined;
```

### b. Object Types
Object types describe more complex data structures.

#### 1. Object Literals
```typescript
let user: { name: string; age: number } = {
  name: "Akash",
  age: 25,
};
```

#### 2. Arrays
```typescript
let scores: number[] = [90, 85, 100];
let tags: string[] = ["typescript", "tsx"];
// Alternative syntax
let items: Array<string> = ["item1", "item2"];
```

#### 3. Tuples (Fixed-length arrays with known types)
```typescript
let point: [number, number] = [10, 20];
let person: [string, number, boolean] = ["Akash", 25, true];
```

#### 4. Interfaces / Types
```typescript
interface User {
  id: number;
  username: string;
  email?: string; // Optional property
}

const user: User = { id: 1, username: "akash" };

// Type alias
type Product = {
  id: number;
  name: string;
  price: number;
};
```

### c. Advanced Types
These are TypeScript-specific features for powerful type control.

#### 1. Union Types
```typescript
let value: string | number = "hello";
value = 42; // valid

type Status = "pending" | "approved" | "rejected";
let currentStatus: Status = "pending";
```

#### 2. Intersection Types
```typescript
type A = { a: number };
type B = { b: string };
type C = A & B;

const obj: C = { a: 1, b: "test" };
```

#### 3. Literal Types
```typescript
let direction: "left" | "right" = "left";
let size: "small" | "medium" | "large" = "medium";
```

#### 4. Type Aliases
```typescript
type ID = number | string;
let userId: ID = "abc123";

type EventHandler = (event: Event) => void;
```

### d. Function Types
You can annotate function parameters and return values.

#### Basic function
```typescript
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

#### Arrow function
```typescript
const add = (a: number, b: number): number => a + b;
```

#### Function type alias
```typescript
type BinaryOp = (x: number, y: number) => number;
const multiply: BinaryOp = (x, y) => x * y;
```

#### Optional and default parameters
```typescript
function log(message: string, level: string = "info"): void {
  console.log(`[${level}] ${message}`);
}

function getUserInfo(id: number, includeEmail?: boolean): User {
  // Implementation
}
```

## 3. Core Type System

### Basic Types
- **string**: Text data
- **number**: Numeric values (integers and floats)
- **boolean**: true/false values

### Special Types
- **null**: Intentional absence of value
- **undefined**: Uninitialized value
- **any**: Disables type checking (avoid when possible)
- **unknown**: Type-safe alternative to any
- **void**: No return value (functions)
- **never**: Never returns (infinite loops, throws)

```typescript
let anything: any = "hello";
let mystery: unknown = "world";
let nothing: void = undefined;

function throwError(): never {
  throw new Error("Something went wrong");
}
```

## 4. Interfaces and Types

### Interfaces
```typescript
interface Animal {
  name: string;
  age: number;
  speak(): string;
}

interface Dog extends Animal {
  breed: string;
  wagTail(): void;
}
```

### Type Aliases
```typescript
type Point = {
  x: number;
  y: number;
};

type Shape = "circle" | "square" | "triangle";
```

## 5. Functions and Classes in TS

### Function Overloading
```typescript
function processData(data: string): string;
function processData(data: number): number;
function processData(data: string | number): string | number {
  if (typeof data === "string") {
    return data.toUpperCase();
  }
  return data * 2;
}
```

### Classes
```typescript
class Vehicle {
  public brand: string;
  private engine: string;
  protected model: string;
  
  constructor(brand: string, engine: string, model: string) {
    this.brand = brand;
    this.engine = engine;
    this.model = model;
  }
  
  public start(): void {
    console.log("Vehicle started");
  }
  
  private checkEngine(): boolean {
    return this.engine === "working";
  }
}

class Car extends Vehicle {
  constructor(brand: string, model: string) {
    super(brand, "petrol", model);
  }
  
  public honk(): void {
    console.log("Beep beep!");
  }
}
```

## 6. Type Inference & Type Guards

### Type Inference
```typescript
let message = "Hello"; // TypeScript infers string
let count = 42; // TypeScript infers number

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
]; // TypeScript infers the array type
```

### Type Guards
```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}
```

## 7. Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Container<T> {
  value: T;
  getValue(): T;
}

class Box<T> {
  constructor(private content: T) {}
  
  getContent(): T {
    return this.content;
  }
}

// Usage
const stringBox = new Box<string>("hello");
const numberBox = new Box<number>(42);
```

## 8. Enums

```typescript
enum Color {
  Red,
  Green,
  Blue
}

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

// Usage
let favoriteColor: Color = Color.Blue;
let movement: Direction = Direction.Up;
```

## 9. Advanced Array Types

### Typed Arrays
```typescript
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["a", "b", "c"];
let booleans: Array<boolean> = [true, false, true];
```

### Tuples
```typescript
let coordinates: [number, number] = [10, 20];
let person: [string, number, boolean] = ["Alice", 30, true];

// Named tuple elements
let namedTuple: [x: number, y: number] = [10, 20];
```

### Readonly Arrays
```typescript
let readonlyNumbers: readonly number[] = [1, 2, 3];
let readonlyTuple: readonly [string, number] = ["hello", 42];

// readonlyNumbers.push(4); // Error: Property 'push' does not exist
```

## 10. Advanced Class Features

### Abstract Classes
```typescript
abstract class Shape {
  abstract area(): number;
  
  describe(): string {
    return `This shape has an area of ${this.area()}`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }
  
  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

### Getters & Setters
```typescript
class Person {
  private _age: number = 0;
  
  get age(): number {
    return this._age;
  }
  
  set age(value: number) {
    if (value >= 0) {
      this._age = value;
    }
  }
}
```

### Static Members
```typescript
class MathUtils {
  static PI = 3.14159;
  
  static calculateCircleArea(radius: number): number {
    return this.PI * radius ** 2;
  }
}

// Usage
console.log(MathUtils.PI);
console.log(MathUtils.calculateCircleArea(5));
```

## 11. Modules & Namespaces

### ES6 Modules
```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export default function multiply(a: number, b: number): number {
  return a * b;
}

// main.ts
import multiply, { add } from './math';
```

### Namespaces
```typescript
namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }
  
  export function distance(p1: Point, p2: Point): number {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}

// Usage
let point1: Geometry.Point = { x: 0, y: 0 };
let point2: Geometry.Point = { x: 3, y: 4 };
console.log(Geometry.distance(point1, point2));
```

## 12. Utility Types

```typescript
// Partial - makes all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>; // All properties become optional

// Pick - select specific properties
type UserSummary = Pick<User, 'id' | 'name'>;

// Omit - exclude specific properties
type UserWithoutId = Omit<User, 'id'>;

// Record - create object type with specific keys and values
type UserRoles = Record<string, 'admin' | 'user' | 'guest'>;
```

## 13. React & TSX Specific Types

```typescript
import React from 'react';

// Component props interface
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

// Functional component
const Button: React.FC<ButtonProps> = ({ children, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

// Event handlers
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Handle form submission
};
```