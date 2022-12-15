import React from 'react';
import logo from './telegramLogo.svg';
import TelegramLoginButton from 'telegram-login-button';

function TelegramValidator({
  renderLogoOnly = false,
  data,
  onVerify,
  validatorApiUrl,
  minimalScore,
  ...rest
}) {
  const handleVerification = async (user) => {
    try {
      const proofUrl = validatorApiUrl + "/get_proof/" + user.id + "/" + minimalScore + "/" + data;
      const response = await fetch(proofUrl);
      if (response.ok) {
        await fetch(validatorApiUrl + "/send_message/" + user.id + "/" + 2);
        const { proof } = await response.json();
        onVerify({ error: false, errorMessage: null, proof });
      } else {
        await fetch(validatorApiUrl + "/send_message/" + user.id + "/" + 1);
        const errorMessage = `${response.status} ${response.statusText}`;
        onVerify({ error: true, errorMessage, proof: null });
      }
    } catch (error) {
      onVerify({ error: true, errrorMessage: String(error), proof: null });
    }
  };

  // Logo is returned in order to display it in validator selector list
  if (renderLogoOnly) {
    return <img src={logo} alt="Telegram logo" {...rest} />;
  }

  // Main validator component
  return (
      <TelegramLoginButton
          botName="humangram_bot"
          dataOnauth={(user) => handleVerification(user)}
          requestAccess=true
          {...rest}
      />
  );
}

export default TelegramValidator;
