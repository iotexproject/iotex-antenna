import * as jspb from 'google-protobuf'

import * as proto_types_action_pb from '../../proto/types/action_pb';


export class Bundle extends jspb.Message {
  getActionsList(): Array<proto_types_action_pb.Action>;
  setActionsList(value: Array<proto_types_action_pb.Action>): Bundle;
  clearActionsList(): Bundle;
  addActions(value?: proto_types_action_pb.Action, index?: number): proto_types_action_pb.Action;

  getTargetblocknumber(): number;
  setTargetblocknumber(value: number): Bundle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bundle.AsObject;
  static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
  static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bundle;
  static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
  export type AsObject = {
    actionsList: Array<proto_types_action_pb.Action.AsObject>,
    targetblocknumber: number,
  }
}

