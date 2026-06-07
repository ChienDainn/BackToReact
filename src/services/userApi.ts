import type { User } from "../types/user";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

async function parseResponse<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error("Fetch failed");
  return res.json() as Promise<T>;
}

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(BASE_URL);
  return parseResponse<User[]>(res);
}

export async function fetchUserById(id: string): Promise<User> {
  const res = await fetch(`${BASE_URL}/${id}`);
  return parseResponse<User>(res);
}
