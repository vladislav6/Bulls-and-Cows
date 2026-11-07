export function generateSecret(
  length: number,
  base: number,
  random: () => number = Math.random
): string | undefined {
  const baseChars = '01';
  const bases = [2, 8, 10, 16];

  if (length < 2 || length > 6) return;
  if (base === 2 && length !== 2) return;
  if (!bases.includes(base)) return;
  if (typeof random !== 'function') return;

  let secretNumber = '';

  while(secretNumber.length < length) {
    const randomNumber = Math.floor(random() * base);
    const char = `${baseChars[randomNumber]}`;
    if (char && !secretNumber.includes(char)) {
      secretNumber += char;
    }
  }

  return secretNumber;
}