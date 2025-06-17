# Design Patterns Examples

This project demonstrates various design patterns through practical examples. Each pattern is implemented in TypeScript with clear examples and explanations.

## Prerequisites

- Node.js
- npm
- make (optional)

## Installation

```bash
npm install
```

## Running the Examples

Each pattern has its own example that can be run using make commands:

```bash
# Run Observer Pattern example
make observer

# Run Decorator Pattern example
make decorator

# Run Chain of Responsibility Pattern example
make chain

# Run Strategy Pattern example
make strategy

# Run Factory Method Pattern example
make factory
```

## Project Structure

- `pattern/pattern-name/pattern-name.ts`: Contains the implementation of each pattern
- `Makefile`: Contains commands to run each pattern example

## Available Make Commands

Each pattern has its own make command to run its example:

- `make observer`: Runs the Observer pattern example (Weather Station)
- `make decorator`: Runs the Decorator pattern example (Coffee Shop)
- `make chain`: Runs the Chain of Responsibility pattern example (Support System)
- `make strategy`: Runs the Strategy pattern example (Payment Processing)
- `make factory`: Runs the Factory Method pattern example (Document Processing)

## Design Patterns Included

1. **Observer Pattern**
   - Implementation: Weather Station example
   - Demonstrates: Subject-Observer relationship
   - Shows: How to implement loose coupling between objects
   - Location: `pattern/observer/observer.ts`

2. **Decorator Pattern**
   - Implementation: Coffee Shop example
   - Demonstrates: Dynamic addition of responsibilities to objects
   - Shows: How to add new behaviors to objects without modifying their code
   - Location: `pattern/decorator/coffee.ts`
   - Example: `pattern/decorator/example.ts`
   - Features:
     - Base coffee component
     - Multiple decorators (Milk, Sugar, Whipped Cream)
     - Dynamic cost calculation
     - Flexible description building

3. **Chain of Responsibility Pattern**
   - Implementation: Support System example
   - Demonstrates: Request handling chain
   - Shows: How to create a chain of handlers for processing requests
   - Location: `pattern/chain-of-responsibility/support.ts`
   - Example: `pattern/chain-of-responsibility/example.ts`
   - Features:
     - Multiple support handlers (Technical, Billing, General)
     - Priority-based request handling
     - Flexible chain configuration
     - Request type validation

4. **Strategy Pattern**
   - Implementation: Payment Processing example
   - Demonstrates: Interchangeable algorithms
   - Shows: How to define a family of algorithms and make them interchangeable
   - Location: `pattern/strategy/PaymentStrategy.ts`
   - Example: `pattern/strategy/example.ts`
   - Features:
     - Multiple payment strategies (Credit Card, PayPal, Crypto)
     - Runtime strategy switching
     - Clean separation of payment algorithms
     - Easy addition of new payment methods

5. **Factory Method Pattern**
   - Implementation: Document Processing System
   - Demonstrates: Creation of different types of documents
   - Shows: How to delegate object creation to subclasses
   - Location: `pattern/factory-method/Document.ts` and `pattern/factory-method/DocumentFactory.ts`
   - Example: `pattern/factory-method/example.ts`
   - Features:
     - Abstract Document interface
     - Multiple document types (PDF, Word, Text)
     - Factory classes for each document type
     - Common document processing workflow

More patterns will be added soon... 