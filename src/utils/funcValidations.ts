export const validateEmail = (email: string) => {
  const mailRegex = /^(?!_)\w+([.-]?\w+)*@(?!_)\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return mailRegex.test(email);
};

export const validateName = (name: string) => {
  const nameRegex = /^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]+$/;
  if (nameRegex.test(name)) {
    return (name.length >= 12);
  }
  return false;
};

export const validatePassword = (password: string) => password.length >= 6;
