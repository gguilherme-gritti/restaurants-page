export const MaskPhone = (phone: string) => {
  const maskPhone = phone.substr(0, 2) + " " + phone.substr(2, phone.length);
  return (
    maskPhone.substr(0, 2) +
    " " +
    "(" +
    phone.substr(2, 2) +
    ")" +
    " " +
    phone.substr(4, 4) +
    "-" +
    phone.substr(8, phone.length)
  );
};
