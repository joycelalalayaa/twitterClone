import { createHash } from "crypto";

export default function hashString(input: string): string {
  const hash = createHash("sha256"); // You can use other algorithms like 'md5', 'sha512', etc.
  hash.update(input);
  return hash.digest("hex"); // Output format: 'hex', 'base64', etc.
}
