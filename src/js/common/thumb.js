const thumb = (url, title = '', description = '') => {
  return `
    <figure class="thumb">
      <img src="${url}" alt="${description}" class="thumb__image" />
      <figcaption class="thumb__title">
        ${title}
      </figcaption>
    </figure>
  `
}

export default thumb
