import * as jspb from "google-protobuf"

export enum ReceiptStatus { 
  Failure = 0,
  Success = 1,
  ErrUnknown = 100,
  ErrOutOfGas = 101,
  ErrCodeStoreOutOfGas = 102,
  ErrDepth = 103,
  ErrContractAddressCollision = 104,
  ErrNoCompatibleInterpreter = 105,
  ErrExecutionReverted = 106,
  ErrMaxCodeSizeExceeded = 107,
  ErrWriteProtection = 108,
}
