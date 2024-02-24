/**
 * @description
 * 
 * Represents a type that a Component or other object is instances of.
 * 
 * Copied from Angular Core library.
 */
declare const Type: FunctionConstructor;
declare interface Type<T> extends Function {
  new (...args: any[]): T;
}