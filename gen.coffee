#!/usr/bin/env coffee

> @3-/write

li = "uint64 uint32 int64 int32 sint64 sint32 bool enum_ bytes string fixed64 sfixed64 double fixed32 sfixed32 float".split ' '

for i from li
  code = [
    'import one from "./one.js"'
    "import {#{i}} from './types.js'"
  ]
  switch i
    when 'string'
      val = ''
    when 'bool'
      val = 'false'
    when 'bytes'
      val = 'BIN'
      code.push 'import BIN from "./BIN.js"'
    else
      val = '0'

  if val
    val = ','+val

  code.push "\nexport default one(#{i}#{val})"
  write(
    'decode/'+i+'.js'
    code.join('\n')
  )
