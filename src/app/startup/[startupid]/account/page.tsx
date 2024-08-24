import React from "react";
import Account from "../../components/Account";

const AccountPage = ({ params }: { params: { startupid: string } }) => {
  return <Account params={params} />;
};

export default AccountPage;
