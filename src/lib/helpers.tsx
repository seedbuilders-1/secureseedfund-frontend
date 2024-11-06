export const thousandFormatter = (num: number) =>
  new Intl.NumberFormat().format(num);
