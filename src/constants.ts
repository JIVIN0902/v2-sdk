import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  BLAST = 168587773,
  INJ = 2525
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES = {
  [ChainId.MAINNET]: '0x529dd79Be3A064e72532398347928501Ed8ea9a1',
  [ChainId.BLAST]: '0x529dd79Be3A064e72532398347928501Ed8ea9a1',
  [ChainId.INJ]: '0x529dd79Be3A064e72532398347928501Ed8ea9a1'
}

export const INIT_CODE_HASHES = {
  [ChainId.BLAST]: '0x8708e33ae4506e6198f924cd73383806effdcb87e4bccea2eaa5625b51a2da8b',
  [ChainId.INJ]: '0x8708e33ae4506e6198f924cd73383806effdcb87e4bccea2eaa5625b51a2da8b',
  [ChainId.MAINNET]: '0x8708e33ae4506e6198f924cd73383806effdcb87e4bccea2eaa5625b51a2da8b'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
