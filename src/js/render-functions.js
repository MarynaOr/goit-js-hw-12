export function createMarkup(images) {
    // if (!Array.isArray(images) || images.length === 0) {
    //   console.error('Invalid or empty data for createMarkup.');
    //   return '';
    // }
  
    return images
      .map(
        ({
          id,
          largeImageURL,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
      <li class='item-gallery' data-id='${id}'>
        <a class='link-gallery' href='${largeImageURL}'>
          <img 
            class='img-gallery'
            src='${webformatURL}'
            alt='${tags}'
            loading="lazy"
          >
          <ul>
            <li class='info-img'><span>Likes</span>${likes}</li>
            <li class='info-img'><span>Views</span>${views}</li>
            <li class='info-img'><span>Comments</span>${comments}</li>
            <li class='info-img'><span>Downloads</span>${downloads}</li>
          </ul>
        </a>
      </li>
      `
      )
      .join('');
  }
  
  export function showLoadingMessage(load) {
    load.style.display = 'block';
  }
  
  export function hideLoadingMessage(load) {
    load.style.display = 'none';
  }