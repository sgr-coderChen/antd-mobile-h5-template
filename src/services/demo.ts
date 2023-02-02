import { request } from '@/utils';

export async function getList() {
  const res = await request.get(`/users`);
  return res.data;
}
