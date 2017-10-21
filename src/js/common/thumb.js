const thumb = (url, title = '', description = '') => {
  return `
    <figure>
      <img src="${url}" alt="${description}" />
      <figcaption>
        ${title}
      </figcaption>
    </figure>
  `
}

export default thumb
