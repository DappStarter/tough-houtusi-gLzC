require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner knife flush space story dash still modify inflict end army gasp'; 
let testAccounts = [
"0x021d62ac1a9dee88451e21a8a84c244d2fee9faad8f1c02895c9eb9319cd2676",
"0x02e31e3a26a9c8d742ff3c5d2d68c5fdbd5e1aee2d342ccc219b90c4d3a3f1f0",
"0x08da3a0b073848198ffb0387898b32e09686c830531c88b64e3713dba5849483",
"0xa7ff4300939020bd6a5e8018ce35b0639cab09ae2f7f33269fa882f4c67f2886",
"0xc0e62d4ede18012a676634ee3c510133810bc377202f038c1a9a4375e4ed11f7",
"0xe0b2614003e215c085b0f5eaa37f21e22306a821bf81ac1195a4c6e17e132d74",
"0x3e76daad3732d6c45df824c31dcfdf5a7f48d7cef45832143b601fa7efcc805d",
"0x679570622da4acfd37d7f1400dc84fdb0566db466b079122a21e0e0029eaf762",
"0x457744bd0ef59fbe7f7a9607b678881f3b66c7ad691b5f91d68ae40ebc95d4cc",
"0xd63e5474d73b9e444c75f88c1b286a5d315c3796ec84d25c1623daee26bbfe8b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


