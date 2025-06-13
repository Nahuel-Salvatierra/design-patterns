export interface Coffee {
  getCost(): number;
  getDescription(): string;
}

export class SimpleCoffee implements Coffee {
  getCost(): number {
    return 5;
  }

  getDescription(): string {
    return "Simple coffee";
  }
}

export class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  getCost(): number {
    return this.coffee.getCost();
  }

  getDescription(): string {
    return this.coffee.getDescription();
  }
}

export class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 2;
  }

  getDescription(): string {
    return this.coffee.getDescription() + " with milk";
  }
}

export class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 1;
  }

  getDescription(): string {
    return this.coffee.getDescription() + " with sugar";
  }
}

export class WhippedCreamDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.coffee.getCost() + 3;
  }

  getDescription(): string {
    return this.coffee.getDescription() + " with whipped cream";
  }
}
