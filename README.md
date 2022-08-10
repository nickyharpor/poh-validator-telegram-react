# Proof-of-Humanity Validator Plugin React Component for hCaptcha API

[![NPM](https://img.shields.io/npm/v/poh-validator-hcaptcha-react)](https://www.npmjs.com/package/poh-validator-hcaptcha-react)

React component providing the UI for [Proof-Of-Humanity hCaptcha validator API](https://github.com/Human-Protocol/poh-validator-hcaptcha-api).

This component has to be used as a plugin within [Proof-of-Humanity-React](https://npmjs.com/packages/poh-react) wrapper component.

## Live dApp demo

https://poh-counter.bakoush.in ([source code](https://github.com/Human-Protocol/poh-counter-example))

## Required props

You have to provide these props:

`validatorApiUrl` _(string)_ – URL of validator API. Validator API for use with this component: [Proof-of-Humanity hCaptcha Validator API](https://github.com/Human-Protocol/poh-validator-hcaptcha-api)

`sitekey` _(string)_ – [hCaptcha](https://www.hcaptcha.com/) sitekey. Must be obtained by registration on the hCaptcha site

## Returned object

- `error` _(boolean)_ – `true` in case of error; otherwise `false`

- `errorMessage` _(string)_ – in case of error; otherwise `null`

- `proof` _(string)_: proof-of-humanity (a hex string); `null` in case of error

## Usage with `poh-react`

```jsx
import hCaptchaValidator from 'poh-validator-hcaptcha-react';
import { useProofOfHumanity } from 'poh-react';

const validator = (
  <HCaptchaValidator
    validatorApiUrl="http://localhost:3000/api/v1/proof"
    sitekey="10000000-ffff-ffff-ffff-000000000001"
  />
);

const { getProofOfHumanity } = useProofOfHumanity(validator);
```

## Hidden props

These props are used internally by `poh-react`. Normally you don't bother working with them.

These props are used internally by `poh-react`. Normally you don't bother working with them.

`renderLogoOnly` _(boolean)_ – if `true`, the component will render its logo instead of the actual [hCaptcha](https://www.hcaptcha.com/) interface

`data` _(string)_ – data (a hex string) to be included in signed proof-of-humanity. Can be a random hex challenge, or a random hex challenge along with the address owner's signature

`onVerify` _(function)_ – will be called from the component once validation is complete with the returned object as the only parameter

## See also

- [Proof-of-HUMANity on-chain: protect your smart contracts from bots](https://www.humanprotocol.org/blog/proof-of-humanity-on-chain-protect-your-smart-contracts-from-bots)
- [Proof-of-Humanity-React](https://www.npmjs.com/package/poh-react)
- [Proof-of-Humanity hCaptcha Validator API](https://hub.docker.com/r/bakoushin/poh-validator-hcaptcha)
- [Proof-of-Humanity Solidity Contracts](https://npmjs.com/package/poh-contracts)
- [Counter dApp Example](https://github.com/Human-Protocol/poh-counter-example)

## Author

Alex Bakoushin

## License

MIT
