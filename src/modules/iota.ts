import config from '@@config';

const iotaLibrary = require('@iota/core');
const Converter = require('@iota/converter');

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443',
});

const message = Converter.asciiToTrytes(JSON.stringify({ foo: "bar" }));

const transfers = [
  {
    value: 0,
    address: config.address,
    message,
  },
];

iota
  .prepareTransfers(config.seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, 3, 9))
  .then(bundle => {
    console.log('Transfer successfully sent');
    bundle.map(tx => console.log(tx));
  })
  .catch(err => {
    console.log(err);
  });

export default 1;
