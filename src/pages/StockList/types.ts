export interface PhotoListResponse {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at?: string | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string | null;
  alt_description?: null;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections?: null[] | null;
  sponsorship?: Sponsorship | null;
  topic_submissions: TopicSubmissions;
  user: User;
}
export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}
export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
export interface Sponsorship {
  impression_urls?: string[] | null;
  tagline: string;
  tagline_url: string;
  sponsor: Sponsor;
}
export interface Sponsor {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: null;
  twitter_username?: string | null;
  portfolio_url: string;
  bio: string;
  location?: null;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}
export interface Links1 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}
export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}
export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username?: string | null;
  paypal_email?: null;
}
export interface TopicSubmissions {
  wallpapers?: WallpapersOrFilm | null;
  film?: WallpapersOrFilm1 | null;
}
export interface WallpapersOrFilm {
  status: string;
}
export interface WallpapersOrFilm1 {
  status: string;
}
export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string | null;
  twitter_username?: string | null;
  portfolio_url?: string | null;
  bio?: string | null;
  location?: string | null;
  links: Links1;
  profile_image: ProfileImage;
  instagram_username?: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social1;
}
export interface Social1 {
  instagram_username?: string | null;
  portfolio_url?: string | null;
  twitter_username?: string | null;
  paypal_email?: null;
}
