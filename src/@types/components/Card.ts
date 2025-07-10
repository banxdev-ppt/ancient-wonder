import type { IAncientWonder } from '~/@types/ancient-wonder/IAncientWonder';

export interface ICardElement {
  nameEn: string;
  nameTh: string;
  image: string;
  detail: string;
  locationName: string;
  map: string;
}

export interface ICardList {
  data: IAncientWonder;
}
