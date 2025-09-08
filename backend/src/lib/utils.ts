
export function uniqueIdGenerator(): string {
  // Generates a random number between 10000 (inclusive) and 99999 (inclusive)
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  return randomNumber.toString();
}