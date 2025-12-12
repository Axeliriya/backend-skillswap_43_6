import jwt, { SignOptions } from "jsonwebtoken";

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || "dev-access-secret";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "dev-refresh-secret";

const ACCESS_EXPIRES: jwt.SignOptions["expiresIn"] =
  (process.env.JWT_ACCESS_EXPIRES_IN as jwt.SignOptions["expiresIn"]) || "1h";
const REFRESH_EXPIRES: jwt.SignOptions["expiresIn"] =
  (process.env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions["expiresIn"]) || "7d";

export function signAccessToken(payload: object): string {
  const options: SignOptions = { expiresIn: ACCESS_EXPIRES };
  // Первый аргумент payload, второй — secretOrPrivateKey
  return jwt.sign(payload, JWT_ACCESS_SECRET, options);
}

export function signRefreshToken(payload: object): string {
  const options: SignOptions = { expiresIn: REFRESH_EXPIRES };
  return jwt.sign(payload, JWT_REFRESH_SECRET, options);
}

export function verifyAccessToken(token: string): null | object | string {
  try {
    return jwt.verify(token, JWT_ACCESS_SECRET);
  } catch (err) {
    return null;
  }
}

export function verifyRefreshToken(token: string): null | object | string {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (err) {
    return null;
  }
}
