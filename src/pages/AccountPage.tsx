import React from "react";

const UserAccount = () => {
  const userLocalData = window.localStorage.getItem(
    "firebaseui::rememberedAccounts"
  );
  return (
    <div>
      <p>User page</p>
      <p>{JSON.stringify(userLocalData)}</p>
    </div>
  );
};

export default UserAccount;
