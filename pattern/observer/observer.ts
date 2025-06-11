// The Observer interface defines the update method that all observers must implement
interface Observer {
  update(temperature: number, humidity: number, pressure: number): void;
}

// The Subject interface defines methods for registering, removing, and notifying observers
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// WeatherStation implements the Subject interface and manages observers and weather data
class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  // Updates weather measurements and notifies observers
  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

class CurrentConditionsDisplay implements Observer {
  private temperature: number = 0;
  private humidity: number = 0;

  // Receives updates from the subject
  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  // Displays the current conditions
  display(): void {
    console.log(
      `Current conditions: ${this.temperature}°C and ${this.humidity}% humidity`
    );
  }
}

class StatisticsDisplay implements Observer {
  private temperatures: number[] = [];
  private humidities: number[] = [];

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperatures.push(temperature);
    this.humidities.push(humidity);
    this.display();
  }

  display(): void {
    const avgTemp =
      this.temperatures.reduce((a, b) => a + b, 0) / this.temperatures.length;
    const avgHumidity =
      this.humidities.reduce((a, b) => a + b, 0) / this.humidities.length;
    console.log(`Avg/Max/Min temperature = ${avgTemp.toFixed(1)}°C`);
    console.log(`Avg/Max/Min humidity = ${avgHumidity.toFixed(1)}%`);
  }
}

// Example usage of the Observer pattern
const weatherStation = new WeatherStation();
const currentDisplay = new CurrentConditionsDisplay();
const statisticsDisplay = new StatisticsDisplay();

weatherStation.registerObserver(currentDisplay);
weatherStation.registerObserver(statisticsDisplay);

weatherStation.setMeasurements(25, 65, 1013);
console.log("\nWeather changes...\n");
weatherStation.setMeasurements(27, 70, 1012);

/*
Flow Explanation:

1. Initial Setup:
   - A WeatherStation (Subject) is created
   - Two displays (Observers) are created: CurrentConditionsDisplay and StatisticsDisplay
   - Both displays are registered with the WeatherStation

2. First Weather Update (25°C, 65% humidity, 1013 pressure):
   - WeatherStation.setMeasurements() is called with new values
   - The WeatherStation updates its internal state
   - WeatherStation.notifyObservers() is called automatically
   - Each registered observer receives the update:
     * CurrentConditionsDisplay shows: "Current conditions: 25°C and 65% humidity"
     * StatisticsDisplay shows average temperature and humidity

3. Second Weather Update (27°C, 70% humidity, 1012 pressure):
   - Same process repeats with new values
   - CurrentConditionsDisplay shows: "Current conditions: 27°C and 70% humidity"
   - StatisticsDisplay updates its averages with both measurements

Key Points:
- The WeatherStation doesn't know the details of how displays work
- Displays can be added or removed without modifying the WeatherStation
- Each display processes the data differently:
  * CurrentConditionsDisplay shows current values
  * StatisticsDisplay maintains history and shows averages
*/
