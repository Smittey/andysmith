export const getTopArtists = async ({ username, apiKey }) => {
  const resource = await fetch('https://ws.audioscrobbler.com/2.0/?'
                                          + 'method=user.getTopArtists'
                                          + `&user=${username}`
                                          + '&period=3month'
                                          + `&api_key=${apiKey}`
                                          + '&limit=5'
                                          + '&format=json');

  const isError = !resource.ok;
  const response = await resource.json();

  if (isError) return Promise.reject(response);

  return Promise.resolve(response);
};

export const getCurrentlyPlaying = async ({ username, apiKey }) => {
  const resource = await fetch('https://ws.audioscrobbler.com/2.0/?'
                                          + 'method=user.getrecenttracks'
                                          + `&user=${username}`
                                          + `&api_key=${apiKey}`
                                          + '&limit=1'
                                          + '&format=json');

  const isError = !resource.ok;
  const response = await resource.json();

  if (isError) return Promise.reject(response);

  return Promise.resolve(response);
};
