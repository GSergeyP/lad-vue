import axios from 'axios';

const Connect = async (postID?: number | string) => {
  if (!postID) postID = '';
  const resp = await axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts/' + postID
  });
  return resp;
};

export { Connect };
