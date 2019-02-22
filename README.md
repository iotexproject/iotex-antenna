[![CircleCI](https://circleci.com/gh/iotexproject/iotex-antenna.svg?style=svg&circle-token=9793be645e0d890924fee61fa5e3bfaff8d19942)](https://circleci.com/gh/iotexproject/iotex-antenna)

# iotex-antenna

```bash
nvm use 10.15.1
npm install

# test
# prepare flow type definitions
npm run flow-install
# run all tests
npm run test
# run a single test file
npm run ava ./path/to/test-file.js
```

To run a single test case, follow instructions [here](https://github.com/avajs/ava/blob/master/docs/01-writing-tests.md#running-specific-tests).

## Scripts

- `npm run build`: build source code from `src` to `dist`
- `npm publish`: publish code to npm
- `npm run changelog-patch` bump version patch (bug fixes)
- `npm run changelog-minor` bump version minor (new features)
- `npm run changelog-major` bump version major (breaking change)
