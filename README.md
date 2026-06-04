# iotex-antenna

iotex-antenna is IoTeX native SDK allowing you to interact with a local or remote IoTeX blockchain node, using a gRPC or gRPC-web connection.

- [Documentation](https://docs.iotex.io/native-development/antenna-overview)
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

## What is IoTeX?

IoTeX is the modular infrastructure for DePIN projects to deploy in full or integrate modules into existing frameworks. Please visit [IoTeX hompage](https://iotex.io) official website to learn more about IoTeX network.

## What is DePIN?

DePIN stands for Decentralized Physical Infrastructure Networks, a new approach to building and maintaining physical world infrastructure. This infrastructure can range from WiFi hotspots in wireless networks to solar-powered home batteries in energy networks. DePINs are developed in a decentralized manner by individuals and companies globally, making them accessible to everyone. In return, contributors receive financial compensation and an ownership stake in the network they’re building and the services they provide through token incentives. DePINs are enabled by widespread internet connectivity and advancements in blockchain infrastructure and cryptography. To learn more about DePIN, please visit [What is DePIN?](https://iotex.io/blog/what-are-decentralized-physical-infrastructure-networks-depin/).

## Explore DePIN Projects?

[DePIN Scan](https://depinscan.io/)  is the go-to explorer for DePIN projects. DePIN Scan tracks crypto token prices, real-time device data, and offers a variety of views for DePIN projects.

