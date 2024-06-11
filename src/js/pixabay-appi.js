export const fetchImages = requestInput => {
    return fetch(
      `https://pixabay.com/api/?key=44326586-33d8e1982942c3360c5af8426&q=${encodeURIComponent(
        requestInput
      )}&image_type=photo&orientation=horizontal&safesearch=true`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  };