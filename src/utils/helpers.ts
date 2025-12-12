import { accounts, AuthAccount } from "../data/auth";

export function findAccountByEmail(email: string): AuthAccount | undefined {
  return accounts.find((a) => a.email.toLowerCase() === email.toLowerCase());
}

export function findAccountByRefreshToken(refreshToken: string): AuthAccount | undefined {
  return accounts.find((a) => a.refreshToken === refreshToken);
}

export function saveAccount(account: AuthAccount) {
  const idx = accounts.findIndex(
    (a) => a.email.toLowerCase() === account.email.toLowerCase()
  );
  if (idx >= 0) {
    accounts[idx] = account;
  } else {
    accounts.push(account);
  }
}

export function removeAccountByEmail(email: string) {
  const idx = accounts.findIndex((a) => a.email.toLowerCase() === email.toLowerCase());
  if (idx >= 0) accounts.splice(idx, 1);
}
