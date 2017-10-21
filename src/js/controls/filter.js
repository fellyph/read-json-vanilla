const filterList = (listEvents) => {
  return `
    <select class="filter">
      ${listEvents.map((event) => {
        return `<option value="event.value">event.label</option>`
      })}
    </select>
  `
}

export default filterList
