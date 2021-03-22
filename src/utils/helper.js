export const rand = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
}