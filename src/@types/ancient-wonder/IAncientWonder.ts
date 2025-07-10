export interface IAncientWonder {
  _id: string;
  nameTh: string;
  nameEn: string;
  detail: string;
  image: IImageResult;
  locationName: string;
  map: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface IImageResult {
  asset: { _ref: string; _type: string };
  _type: string;
}
