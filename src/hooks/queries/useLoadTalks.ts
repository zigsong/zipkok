import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import realTimeApi from 'requests/realTimeApi';
import API_PATH from 'requests/paths';
import { TalkContent } from 'types';

const fetchTalks = async () => {
  try {
    const data = await realTimeApi.fetch<TalkContent[]>(API_PATH.talk);

    return Object.values(data);
  } catch (error) {
    console.error(error);
  }
};

const useLoadTalks = () => {
  // REFACTOR: remove undfeind generic
  return useQuery<TalkContent[] | undefined, AxiosError>('confirmedData', fetchTalks);
};

export default useLoadTalks;
