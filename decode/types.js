import utf8d from '@3-/utf8/utf8d.js'

export const tag = (bigint)=>{
  const int = Number(bigint) // Safe as protoc only allows fieldNumber up to int32 + 3 bits for wireType
  const wireType = int & 0b111
  const fieldNumber = int >> 3

  return { wireType, fieldNumber }
}

export const uint64 = (bigint)=>{
  var r = BigInt.asUintN(64, bigint);
  if (r <= Number.MAX_SAFE_INTEGER) {
    r = Number(r)
  }
  return r
}

export const uint32 = (bigint)=> Number(BigInt.asUintN(32, bigint))

const toNum = (r)=>{
  if (r <= Number.MAX_SAFE_INTEGER) && (r>=Number.MIN_SAFE_INTEGER) {
    r = Number(r)
  }
  return r
}

const _view = (bytes)=>new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
export const bool = (bigint)=>bigint !== 0n
export const bytes = (bytes)=>bytes
export const double = (bytes)=>_view(bytes).getFloat64(0, true)
export const enumerable = (uint)=>Number(uint) | 0 // trick to cast uint to int
export const fixed32 = (bytes)=>_view(bytes).getUint32(0, true)
export const fixed64 = (bytes)=>_view(bytes).getBigUint64(0, true)
export const float = (bytes)=>_view(bytes).getFloat32(0, true)
export const int32 = (bigint)=> Number(BigInt.asIntN(32, bigint))
export const int64 = (bigint)=> toNum(BigInt.asIntN(64, bigint))
export const sfixed32 = (bytes)=>_view(bytes).geInt32(0, true)
export const sfixed64 = (bytes)=>_view(bytes).getBigInt64(0, true)
export const sint32 = (bigint) => Number((bigint >> 1n) ^ = (-1n * = (bigint & 1n)))
export const sint64 = (bigint)=> toNum((bigint >> 1n) ^ = (-1n * = (bigint & 1n)))
export const string  = utf8d;
// module.exports = {
//   tag,
//   uint64,
//   uint32,
//   int64,
//   int32,
//   sint64,
//   sint32,
//   bool,
//   enumerable,
//   bytes,
//   string,
//   fixed64,
//   sfixed64,
//   double,
//   fixed32,
//   sfixed32,
//   float
// }
