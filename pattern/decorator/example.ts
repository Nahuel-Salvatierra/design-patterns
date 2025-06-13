import {
  SimpleCoffee,
  MilkDecorator,
  SugarDecorator,
  WhippedCreamDecorator,
} from "./coffee";

function main() {
  let coffee = new SimpleCoffee();
  console.log(`Order: ${coffee.getDescription()}`);
  console.log(`Cost: $${coffee.getCost()}`);

  coffee = new MilkDecorator(coffee);
  console.log(`\nOrder: ${coffee.getDescription()}`);
  console.log(`Cost: $${coffee.getCost()}`);

  coffee = new SugarDecorator(coffee);
  console.log(`\nOrder: ${coffee.getDescription()}`);
  console.log(`Cost: $${coffee.getCost()}`);

  coffee = new WhippedCreamDecorator(coffee);
  console.log(`\nOrder: ${coffee.getDescription()}`);
  console.log(`Cost: $${coffee.getCost()}`);
}

main();
