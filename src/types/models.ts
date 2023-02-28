/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Vote {
  id: number;
  value: number;
  profileId: number;
  voterId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  votesReceived: Vote[];
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
