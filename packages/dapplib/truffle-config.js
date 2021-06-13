require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remain million heavy close bottom gasp'; 
let testAccounts = [
"0x136779acdad97b13de3b308d23a873822ab18c15fb8943d24591fe9b091129e5",
"0xfc4042204d2043934d3754e9dbfd3872d8ba435af9c22b10c9e30c26bf7df4eb",
"0xeccc73bbfdde5d438c357bec11d5882b2655b23e4ae1038bbc215b1d17d36962",
"0xb163120fd0772e731b8aecf9cddde48d7ae077ad2b67ca8d3f0e6a73b0d18b45",
"0xc796c67dfccafd01a9d1bc4a1e9c663b4f7138191ffd3a4020394951f4d6e8ae",
"0x1468086f48be543bf86cae4c3c68271bd2d94bfbd0498a149d3023ca2bbdbf78",
"0x4e63907d195ec664d5814322d2899322cdcc22b4370983749c410ed9feed10cc",
"0x2904fe1032cc8da0e18c624aedafde0f9169e5c656eeeda6b2d9466510ed6914",
"0x76ee758b27968d8225331a6bdea73db6fab69a3b41ae8f3d7b3611b8d56f5849",
"0xd26ed57c41b8e9905fc80ab8d052132c5a22447ec8ad9da816c0598842c0f43e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

