import { ComputerBuilder, ComputerDirector } from "./Computer";

function main() {
  const customPC = new ComputerBuilder()
    .setCPU("AMD Ryzen 7 5800X")
    .setRAM(16)
    .setStorage(1000)
    .setGPU("RTX 3070")
    .build();

  console.log("Custom PC:", customPC);

  const gamingPC = ComputerDirector.buildGamingPC();
  console.log("Gaming PC:", gamingPC);

  const officePC = ComputerDirector.buildOfficePC();
  console.log("Office PC:", officePC);
}

main();
