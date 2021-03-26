declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.svg';
declare module '@env' {
    export const REACT_APP_BACKEND_API_URL: string;
    export const REACT_APP_TOKEN: string;
  }