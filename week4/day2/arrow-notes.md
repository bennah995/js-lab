# When NOT to Use Arrow Functions

Arrow functions should not be used as methods on an object because they do not have their own `this` binding. Instead, they lexically inherit `this` from the surrounding parent scope where the object was defined, which is usually the global window object or undefined. Regular functions, however, dynamically bind `this` to the specific object that calls the method.

## Example of the issue

```javascript
const counter = {
  count: 0,
  // Bug: `this` points to the outer global scope, not `counter`
  increment: () => { 
    this.count += 1; 
  },
};

counter.increment();
console.log(counter.count); // Output is still 0, not 1
```
