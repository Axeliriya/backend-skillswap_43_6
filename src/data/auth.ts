export type AuthAccount = {
  email: string;
  passwordHash: string;
  userId: string;
  token?: string;
  refreshToken?: string;
};

export const accounts: AuthAccount[] = [
  {
    email: "alice@example.com",
    passwordHash: "passwordHash1", // DEV
    userId: "1",
    token: "",
    refreshToken: "",
  },
  {
    email: "bob@example.com",
    passwordHash: "passwordHash2",
    userId: "2",
    token: "",
    refreshToken: "",
  },
  {
    email: "carol@example.com",
    passwordHash: "passwordHash3",
    userId: "3",
    token: "",
    refreshToken: "",
  },
];
