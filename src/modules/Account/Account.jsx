import React from 'react';
import AccountHeader from 'components/AccountHeader';
import AccountListOptions from 'components/AccountListOptions';

const Account = () => (
  <div className="Account">
    <AccountHeader
      name="Omar Diaz"
      info="Developer"
      image="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/67921320_2687776917899111_2075690585292800000_n.jpg?_nc_cat=107&_nc_oc=AQlbDIuSM1TrVXp_qXwnJKo-GXLogmnHXH5Wn_58mXjYy0ukCSLxmM8o5vL54qDpSL4&_nc_ht=scontent.faep8-2.fna&oh=c904fc3ad56b27999d8e134d9aad124b&oe=5E0D8D42"
    />
    <AccountListOptions
      label="Wishlist"
    />
    <AccountListOptions
      label="Orders"
    />
    <AccountListOptions
      label="Returns"
    />
    <AccountListOptions
      label="Sway Wallet"
    />
    <AccountListOptions
      label="AccountDetails"
    />
    <AccountListOptions
      label="Preferences"
    />
    <AccountListOptions
      label="Shipping Informations"
    />
    <AccountListOptions
      label="Security"
    />
    <AccountListOptions
      label="FAG"
    />
    <AccountListOptions
      label="Logout"
    />
  </div>
);

export default Account;
