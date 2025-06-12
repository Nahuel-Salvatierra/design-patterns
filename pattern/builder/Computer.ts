interface Computer {
  cpu: string;
  ram: number;
  storage: number;
  gpu?: string;
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = {
      cpu: "",
      ram: 0,
      storage: 0,
    };
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: number): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: number): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

class ComputerDirector {
  static buildGamingPC(): Computer {
    return new ComputerBuilder()
      .setCPU("Intel i9-13900K")
      .setRAM(32)
      .setStorage(2000)
      .setGPU("RTX 4090")
      .build();
  }

  static buildOfficePC(): Computer {
    return new ComputerBuilder()
      .setCPU("Intel i5-12400")
      .setRAM(16)
      .setStorage(500)
      .build();
  }
}

export { Computer, ComputerBuilder, ComputerDirector };
