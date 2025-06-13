---
sidebar_position: 13

---

# OOP Concepts and Definitions

## Core Principles of Object-Oriented Programming

### 1. Encapsulation

**Definition**: Bundling data (attributes) and methods (functions) that operate on that data into a
 single unit (class)

**Key Aspects**:

- Data hiding (restricting direct access to some components)
- Exposing only necessary interfaces
- Protecting object integrity by controlling access

### 2. Abstraction

**Definition**: Showing only essential features while hiding implementation details  
**Key Aspects**:

- Simplifying complex reality by modeling classes
- Focusing on what an object does rather than how
- Creating simple interfaces for complex operations

### 3. Inheritance

**Definition**: Creating new classes (derived/child) from existing ones (base/parent)  
**Key Aspects**:

- Code reusability
- Establishing "is-a" relationships
- Single vs. multiple inheritance (language-dependent)
- Method overriding (changing inherited behavior)

### 4. Polymorphism

**Definition**: Ability of objects to take on many forms  

**Types**:

- **Compile-time/Static**: Method overloading (same name, different parameters)
- **Runtime/Dynamic**: Method overriding (same signature, different implementation)  
**Key Aspects**:
- Interface-based programming
- "Single interface, multiple implementations"

## Key OOP Terminology

### Class

- Blueprint/template for creating objects
- Defines attributes (data) and methods (behavior)

### Object

- Instance of a class
- Has state (current values of attributes), behavior (methods), and identity

### Method

- Function defined within a class
- Operates on object's data

### Attribute/Property

- Data/characteristics associated with an object

### Constructor

- Special method called when object is created
- Initializes object's state

### Access Modifiers

- Control visibility/accessibility of class members  
- Common levels (specifics vary by language):
  - Public: Accessible everywhere
  - Protected: Accessible within class and subclasses
  - Private: Accessible only within class

## Advanced OOP Concepts

### Association

- Relationship between objects where one object uses another  
- Can be:
  - **Aggregation**: "Has-a" relationship (weak ownership)
  - **Composition**: Strong "part-of" relationship (lifecycle dependency)

### Interface

- Contract defining what methods a class must implement
- Pure abstraction (no implementation)

### Abstract Class

- Class that cannot be instantiated
- Contains abstract methods (no implementation) and/or concrete methods

### Coupling & Cohesion

- **Coupling**: Degree of interdependence between classes/modules (low is better)
- **Cohesion**: How closely related responsibilities of a class are (high is better)
