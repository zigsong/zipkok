import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import realTimeApi from 'requests/realTimeApi';
import API_PATH from 'requests/paths';
import { TalkContent } from 'types';

const fetchTalks = async () => {
  try {
    const data = await realTimeApi.fetch<TalkContent[]>(API_PATH.talk);
    // REFACTOR: way to save date field
    const sortedData = Object.values(data).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    console.log(sortedData);

    return sortedData;
  } catch (error) {
    console.error(error);
  }
};

const useLoadTalks = (options?: UseQueryOptions<TalkContent[] | undefined, AxiosError>) => {
  // REFACTOR: remove undfeind generic
  return useQuery<TalkContent[] | undefined, AxiosError>('confirmedData', fetchTalks, options);
};

export default useLoadTalks;
