import { store, IStoreState, initialState } from "./store";

// login
export function login(user: IStoreState) {
  // update user data
  if (window.localStorage.getItem("firebaseui::rememberedAccounts")) {
    // set token
    window.localStorage.setItem("token", user.accessToken);

    store.setState({
      authorized: true,
      ...user
    });
  }
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
