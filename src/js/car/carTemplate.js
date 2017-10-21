const carTemplate = (car) => {
  return `
    <dl class="car">
      <div class="car__proper">
      <dt class="car__label">Name:</dt>
      <dd>${car.Vehicle.VehMakeModel['@Name']}</dd>
      </div>
      <div class="car__proper">
      <dt class="car__label">Status:</dt>
      <dd>${car['@Status']}</dd>
      </div>
      <div class="car__proper">
      <dt class="car__label">Fuel:</dt>
      <dd>${car.Vehicle['@FuelType']}</dd>
      </div>
    </dl>`
}

export default carTemplate
