import { Dispatch, SetStateAction } from "react";

export interface User {
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
  // ----- копии вынести и расширить
  name?: string;
  following?: string;
  bio?: string;
  email?: string;
  location?: string;
  created_at?: string;
  public_repos?: string;
  avatar_url: string;
}

export interface PersonalInfo {
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: string | boolean;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
  // ----- копии вынести и расширить
  score?: number;
  avatar_url: string;
}

export interface UserForCard {
  item?: User | PersonalInfo;
  userId?: number;
}

export interface InputMainPageProps {
  setValueInput: Dispatch<SetStateAction<string | null>>;
  title: string;
}
