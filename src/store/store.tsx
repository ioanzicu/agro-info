import { Store } from "react-stores";

export interface IStoreState {
  authorized?: boolean;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  uid: string;
  accessToken: string;
  providerData: (firebase.UserInfo | null)[];
}

export const initialState = {
  authorized: false,
  displayName: "",
  email: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  uid: "",
  accessToken: "",
  providerData: []
};

export const store = new Store<IStoreState>(initialState);
