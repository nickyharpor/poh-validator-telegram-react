import React from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import logo from './hCaptchaLogo.svg';

function HCaptchaValidator({
  renderLogoOnly = false,
  data,
  onVerify,
  validatorApiUrl,
  sitekey,
  ...rest
}) {
  const handleVerification = async (token) => {
    try {
      const response = await fetch(validatorApiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data,
          token
        })
      });
      if (response.ok) {
        const { proof } = await response.json();
        onVerify({ error: false, errorMessage: null, proof });
      } else {
        const errorMessage = `${response.status} ${response.statusText}`;
        onVerify({ error: true, errorMessage, proof: null });
      }
    } catch (error) {
      onVerify({ error: true, errrorMessage: String(error), proof: null });
    }
  };

  // Logo is returned in order to display it in validator selector list
  if (renderLogoOnly) {
    return <img src={logo} alt="hCaptcha logo" {...rest} />;
  }

  // Main validator component
  return (
    <HCaptcha
      size="compact"
      sitekey={sitekey}
      onVerify={handleVerification}
      {...rest}
    />
  );
}

export default HCaptchaValidator;
