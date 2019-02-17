import config from '@@config';
import express from 'express';

console.log('app launches with config:\n%o', config);

(async () => {
  const iota = (await import('@@modules/iota/iota')).default;

  const data = {
    foo: 111
  };

  iota.send(data);
})();
