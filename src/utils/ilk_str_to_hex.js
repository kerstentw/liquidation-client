// to-do: Put into API

const ILKS = {
  "ETH-A"  : "0x4554482d41",
  "BAT-A"  : "0x4241542d41a",
  "USDC-A" : "0x555344432d41",
  "WBTC-A" : "0x574254432d41"
}

const HEX = {
   "0x4554482d41"   : "ETH-A",
   "0x4241542d41a"  : "BAT-A",
   "0x555344432d41" : "USDC-A",
   "0x574254432d41"   : "WBTC-A"
 }

function ilkToHex(_ilk) {
  return ILKS[_ilk];
}

function hexToIlk(_hex) {
  return HEX[_hex];
}

export {ilkToHex, hexToIlk};
