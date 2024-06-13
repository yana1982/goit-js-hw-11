
export function fetchImages(searchDescription) {

  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
    const params = new URLSearchParams({
    key: '44326586-33d8e1982942c3360c5af8426',
    q: encodeURIComponent(searchDescription),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
 
  const url = `${BASE_URL}${END_POINT}?${params}`;
  
 return fetch(url).then(res => res.json());
  }

