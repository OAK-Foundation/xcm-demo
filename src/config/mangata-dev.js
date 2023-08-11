import BN from 'bn.js';

const WEIGHT_REF_TIME = new BN(150000000);
const WEIGHT_PROOF_SIZE = new BN(0);
const PARA_ID = 2110;
const NATIVE_TOKEN = 'MGR';

const assets = [
    {
        id: '0',
        chainId: 0,
        decimals: 18,
        name: 'Mangata',
        symbol: NATIVE_TOKEN,
        address: '',
        location: { parents: 1, interior: { X1: { Parachain: PARA_ID } } },
    },
    {
        id: '4',
        chainId: 0,
        decimals: 12,
        name: 'Rococo  Native',
        symbol: 'ROC',
        address: '',
    },
    {
        id: '7',
        chainId: 0,
        decimals: 10,
        name: 'Turing native token',
        symbol: 'TUR',
        address: '',
        feePerSecond: new BN('871400000000'),
    },
];

const pools = [
];

const Config = {
    name: 'Mangata Dev',
    key: 'mangata-dev',
    endpoint: 'ws://127.0.0.1:9947',
    relayChain: 'rococo-dev',
    paraId: PARA_ID,
    ss58: 42,
    assets,
    pools,
    instructionWeight: { refTime: WEIGHT_REF_TIME, proofSize: WEIGHT_PROOF_SIZE },
    symbol: NATIVE_TOKEN,
};

export default Config;
