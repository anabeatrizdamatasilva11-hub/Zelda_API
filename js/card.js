function criaCard(infosObjeto) {
  const div = document.createElement('div');
  div.classList.add('card');

  div.innerHTML = `
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${infosObjeto.image}"
          alt="${infosObjeto.name}" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${infosObjeto.name}</p>
          <p class="subtitle is-6">#${infosObjeto.id}</p>
        </div>
      </div>

      <div class="content">
        <p>${infosObjeto.description}</p>
        <span class="tag is-link">📍 ${
          infosObjeto.common_locations ? infosObjeto.common_locations[0] : "N/A"
        }</span>
      </div>
    </div>
  `;

  return div;
}

export { criaCard }