import { useQuery } from 'react-query';
import axios, { AxiosError } from 'axios';

import { ConfirmedData } from 'types';

const DATA_URL = 'https://apiv3.corona-live.com/domestic/ts/confirmed-domestic-overseas/7.json';

const fetchConfirmedData = async () => {
  try {
    const { data } = await axios.get(DATA_URL);

    return data;
  } catch (error) {
    console.error(`Axios data fetch error: ${error}`);
  }
};

const useConfirmedData = () => {
  return useQuery<ConfirmedData, AxiosError>('confirmedData', fetchConfirmedData);
};

export default useConfirmedData;
