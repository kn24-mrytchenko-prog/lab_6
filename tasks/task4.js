function getMostFuelEfficientCars(cars, brand) {
  // Перевіряємо, чи ВСІ авто мають витрату < 6
  const allEfficient = cars.every(car => car.fuelConsumption < 6);

  // Якщо хоч одне ≥ 6 — повертаємо порожній масив
  if (!allEfficient) {
    return [];
  }

  // Якщо всі < 6 — фільтруємо за брендом
  return cars.filter(car => car.brand === brand);
}

// Приклад використання:
const cars = [
  { brand: 'Toyota', model: 'Corolla', fuelConsumption: 5.2 },
  { brand: 'Honda', model: 'Civic', fuelConsumption: 5.9 },
  { brand: 'Toyota', model: 'Camry', fuelConsumption: 5.5 },
  { brand: 'Ford', model: 'Focus', fuelConsumption: 6.1 },
  { brand: 'Honda', model: 'Accord', fuelConsumption: 5.8 },
  { brand: 'Audi', model: 'A3', fuelConsumption: 5.4 },  
  { brand: 'Audi', model: 'Q5', fuelConsumption: 5.7 },  
  { brand: 'Dodge', model: 'Charger', fuelConsumption: 5.8 }, 
  { brand: 'Dodge', model: 'Durango', fuelConsumption: 5.6 }, 
];

console.log(getMostFuelEfficientCars(cars, 'Toyota')); 
console.log(getMostFuelEfficientCars(cars, 'Honda')); 
console.log(getMostFuelEfficientCars(cars, 'Audi'));  
console.log(getMostFuelEfficientCars(cars, 'Dodge'));  
console.log(getMostFuelEfficientCars(cars, 'Ford'));  

module.exports = getMostFuelEfficientCars;
