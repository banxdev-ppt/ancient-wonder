/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ReactNode } from 'react';

export interface IRoutes extends IRoute {
  children?: IRoute[];
}

export interface IRoute {
  path: string;
  name?: string;
  element: ReactNode;
}

export interface IApiResponse {
  statusCode: number;
  data?: any | null;
  message?: string;
}

export interface IOptionImageURL {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  [key: string]: any;
}
