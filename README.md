[![CircleCI](https://circleci.com/gh/iotexproject/iotex-antenna.svg?style=svg&circle-token=9793be645e0d890924fee61fa5e3bfaff8d19942)](https://circleci.com/gh/iotexproject/iotex-antenna)

# iotex-antenna

iotex-antenna is our SDK allowing you to interact with a local or remote iotex blockchain node, using a gRPC or gRPC-web connection.

- [Documentation](https://docs.iotex.io/docs/libraries-and-tools.html)
- [Reference](https://iotexproject.github.io/iotex-antenna/)

## Antenna features

| Features      | antenna | [antenna-java](https://github.com/iotexproject/iotex-antenna-java) | [antenna-go](https://github.com/iotexproject/iotex-antenna-go) | [antenna-swift](https://github.com/iotexproject/iotex-antenna-swift) |
| ------------- | ------- | ------------------------------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------- |
| crypto        | Yes     | Yes                                                                | Yes                                                            | Yes                                                                  |
| rpc-method    | Yes     | Yes                                                                | Yes                                                            | Yes                                                                  |
| account       | Yes     | Yes                                                                | Yes                                                            | Yes                                                                  |
| action        | Yes     | Yes                                                                | Yes                                                            | Yes                                                                  |
| contract      | Yes     | Yes                                                                | Yes                                                            | Yes                                                                  |
| token support | Yes     | Yes                                                                | No                                                             | Yes                                                                  |

## Developing

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

## Update Proto

1. Prerequisite

```bash
npm install grpc
npm install grpc-web
npm install protoc

npm i grpc-web
```

(original link: https://github.com/grpc/grpc-web/tree/master/packages/grpc-web)
Download protoc and the protoc-gen-grpc-web protoc plugin.
You can download the protoc binary from the official protocolbuffers release page.

You can download the protoc-gen-grpc-web protoc plugin from our Github release page.

Make sure they are both executable and are discoverable from your PATH.

For example, in MacOS, you can do:

```bash
$ sudo mv ~/Downloads/protoc-gen-grpc-web-1.0.3-darwin-x86_64 \
  /usr/local/bin/protoc-gen-grpc-web
$ chmod +x /usr/local/bin/protoc-gen-grpc-web
```

2. copy proto files from iotex-core master branch to /iotex-antenna/proto/

3. Run

```bash
npm run build-proto
```
