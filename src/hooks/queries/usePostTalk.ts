import { useMutation, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import realTimeApi from 'requests/realTimeApi';
import API_PATH from 'requests/paths';
import { TalkRequest } from 'types';

const postTalk = async (body: TalkRequest) => {
  try {
    realTimeApi.post<TalkRequest>(API_PATH.talk, body);
  } catch (error) {
    console.error(error);
  }
};

const usePostTalk = (options?: UseQueryOptions) => {
  return useMutation<void, AxiosError, TalkRequest>(postTalk, options);
};

export default usePostTalk;
