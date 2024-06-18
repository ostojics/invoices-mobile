import {AxiosResponse} from 'axios';
import {httpClient} from './httpClient';
import {User} from '@/common/models/User';

export const getCurrentUser = (): Promise<AxiosResponse<User>> => {
  return httpClient.get('/users/me');
};
