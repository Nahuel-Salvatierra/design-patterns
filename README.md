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

# Run other pattern examples (coming soon)
# make singleton
# make factory
# make strategy
# etc...
```

## Project Structure

- `pattern/pattern-name/pattern-name.ts`: Contains the implementation of each pattern
- `Makefile`: Contains commands to run each pattern example

## Available Make Commands

Each pattern has its own make command to run its example:

- `make observer`: Runs the Observer pattern example (Weather Station)
- `make decorator`: Runs the Decorator pattern example (Coffee Shop)
- More patterns coming soon...

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

More patterns will be added soon... 