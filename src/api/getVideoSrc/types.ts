import * as superStruct from "superstruct";
import {Infer} from "superstruct";

export const GetVideoSrcResponse = superStruct.type({
  code: superStruct.string(),
  template: superStruct.nullable(superStruct.number()),
  video: superStruct.nullable(superStruct.string()),
});


export type TGetVideoSrcResponse = Infer<typeof GetVideoSrcResponse>;


