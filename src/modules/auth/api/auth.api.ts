import api from '@/core/api';
import { HttpLoginResponse } from '../types';

export const login = (body = {}) => {
  return api.post<HttpLoginResponse>('/login', body);
};
