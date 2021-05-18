import axios from 'axios';

const APIClickCountUpdate = clickCount => {
  const APIupdateClickCount = '<host>/api/v1/progress';

  axios.patch(APIupdateClickCount, {
    click_count: clickCount,
  });
};

export default APIClickCountUpdate;
