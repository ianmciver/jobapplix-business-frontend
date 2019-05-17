// validates email
export const isValidEmail = (email, cb) => {
  const emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
  cb(emailValid);
};
