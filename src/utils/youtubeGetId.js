const defaultSize = 'sddefault';

const extractId = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};

const youtubeGetId = (url, size = defaultSize) =>
  `http://img.youtube.com/vi/${extractId(url)}/${size}.jpg`;

export default youtubeGetId;
