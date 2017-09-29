const assume = require('assume');
const tripleBeam = require('./');

describe('triple-beam', function () {
  describe('LEVEL constant', function () {
    it('is exposed', function () {
      assume(tripleBeam.LEVEL);
    });

    it('is a Symbol', function () {
      assume(tripleBeam.LEVEL).is.a('symbol');
    });

    it('is not mutable', function () {
      //
      // Assert that the symbol does not change
      // even though the operation does not throw.
      //
      const OVERWRITE = Symbol('overwrite');
      const LEVEL = tripleBeam.LEVEL;

      assume(LEVEL).not.equals(OVERWRITE);
      tripleBeam.LEVEL = OVERWRITE;
      assume(tripleBeam.LEVEL).equals(LEVEL);
    });
  });
});
