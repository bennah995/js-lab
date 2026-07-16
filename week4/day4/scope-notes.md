[ Global Scope ] 
 └── Visible: globalVar, outer()
      │
      └── [ Outer Function Scope ] (Parent: Global)
           └── Visible: outerVar, inner(), globalVar
                │
                └── [ Inner Function Scope ] (Parent: Outer)
                     └── Visible: innerVar, outerVar, inner(), globalVar


The inner funtion can look outwards to find variable, but outer funtions cannot see inwards
The inner() is at the botom of the chain and has immediate access to its own local variable, innervar. Because of hexical scoping, it looks up to the parent environment- the outer() funtion scope- to access the outervar
If a variable is not found, the engine reaches the top level (Global scope) to resolve (globalvar)