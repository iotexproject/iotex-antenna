# iotex-antenna

iotex-antenna is iotex native SDK allowing you to interact with a local or remote iotex blockchain node, using a gRPC or gRPC-web connection.

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

The proto files under `proto/` are copied from
[iotex-proto](https://github.com/iotexproject/iotex-proto) at the version that
the targeted iotex-core release depends on (see `iotexCoreVersion` in
`package.json`; check `github.com/iotexproject/iotex-proto` in iotex-core's
`go.mod`).

1. Prerequisite: the generated code depends on the exact plugin versions below
   (they must match the `google-protobuf` 4.x and `grpc-web` 1.2.1 runtimes),
   so put these binaries on your `PATH`:

   - `protoc-gen-js` **4.0.1** from
     [protobuf-javascript releases](https://github.com/protocolbuffers/protobuf-javascript/releases/tag/v4.0.1)
   - `protoc-gen-grpc-web` **1.2.1** from
     [grpc-web releases](https://github.com/grpc/grpc-web/releases/tag/1.2.1)

   `protoc` itself comes from the `protoc` devDependency. Because that protoc
   still ships a built-in (older) JS generator, the `build-proto:js` script
   invokes `protoc-gen-js` under the alias `jsv4` so the 4.x plugin is used.

2. Copy the proto files of the matching iotex-proto tag into `proto/`.
   Note: `proto/api/api.proto` imports `proto/types/bundle.proto` at the
   bottom of the file upstream; move that import up to the other imports,
   otherwise `@grpc/proto-loader` (used by the Node.js client) fails to parse
   the file.

3. Run

```bash
npm run build-proto
```
