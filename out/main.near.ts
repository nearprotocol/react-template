
      import { storage, near, base64 } from "./near";
      import { JSONEncoder } from "./json/encoder";
      import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "./json/decoder";
      import {hello as wrapped_hello} from "./main";
      
      // Runtime functions
      @external("env", "return_value")
      declare function return_value(value_len: usize, value_ptr: usize): void;
    
import {context as context,storage as storage,near as near} from "./near";
import {Greeter as Greeter} from "./model.near";
export class __near_ArgsParser_hello extends ThrowingJSONHandler {
        buffer: Uint8Array;
        decoder: JSONDecoder<__near_ArgsParser_hello>;
        handledRoot: boolean = false;
      
setNull(name: string): void {

      super.setNull(name);
    }

      pushObject(name: string): bool {
if (!this.handledRoot) {
      assert(name == null);
      this.handledRoot = true;
      return true;
    } else {
      assert(name != null);
    }

        return super.pushObject(name);
      }

      pushArray(name: string): bool {

        return super.pushArray(name);
      }
}
export function hello(): void {
      // Reading input bytes.
      let json = storage._internalReadBytes(4, 0, 0);
      let handler = new __near_ArgsParser_hello();
      handler.buffer = json;
      handler.decoder = new JSONDecoder<__near_ArgsParser_hello>(handler);
      handler.decoder.deserialize(json);
let result = wrapped_hello(

);

        let encoder = new JSONEncoder();
      
if (result != null) {
            encoder.setString(null, result);
          } else {
            encoder.setNull(null);
          }

        let val = encoder.serialize();
        return_value(val.byteLength, val.buffer.data);
      
}