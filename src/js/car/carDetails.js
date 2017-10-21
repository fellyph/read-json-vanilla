const carDetails = (name, status, fuel) => {
  return `
  <dl class="car__details">
    <div class="car__proper">
    <dt class="car__label">Name:</dt>
    <dd>${name}</dd>
    </div>
    <div class="car__proper">
    <dt class="car__label">Status:</dt>
    <dd>${status}</dd>
    </div>
    <div class="car__proper">
    <dt class="car__label">Fuel:</dt>
    <dd>${fuel}</dd>
    </div>
  </dl>
  `
}

export default carDetails
