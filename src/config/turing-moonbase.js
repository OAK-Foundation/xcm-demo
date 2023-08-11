const PARA_ID = 2114;
const NATIVE_TOKEN = 'TUR';

const assets = [
    {
        symbol: NATIVE_TOKEN,
        decimals: 10,
    },
];

const Config = {
    name: 'Turing Moonbase',
    key: 'turing-moonbase',
    endpoint: 'ws://167.99.226.24:8846',
    relayChain: 'moonbase-relay-testnet',
    paraId: PARA_ID,
    ss58: 51,
    assets,
    symbol: NATIVE_TOKEN,
};

export default Config;
