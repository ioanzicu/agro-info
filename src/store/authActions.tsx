import { store, IStoreState, initialState } from "./store";

export function login(user: IStoreState) {
  // set token
  window.localStorage.setItem("token", user.accessToken);
  // update user data
  store.setState({
    authorized: true,
    ...user
  });
}

export function logout() {
  // remove token and user data
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("firebaseui::rememberedAccounts");
  store.setState({
    authorized: false,
    ...initialState
  });
}
