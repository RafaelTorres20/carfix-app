export type IUser = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export type ICar = {
  plate: string;
  model: string;
  id: string;
  userID: string;
  currentMileage: number;
};
