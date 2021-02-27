import configuration from 'src/config/configuration';
import Web3 from 'web3';

function getNodes(): string {
  return configuration()[process.env.CHAIN_ID].appNodes;
}

export const getWeb3 = (): Web3 => {
  const BSC_NODE_RPC = getNodes();
  const provider: string =
    BSC_NODE_RPC[Math.floor(Math.random() * BSC_NODE_RPC.length)];

  return new Web3(
    new Web3.providers.HttpProvider(provider, { timeout: 30000 }),
  );
};

export const getContract = (abi: any, address: string) => {
  const web3: Web3 = getWeb3();
  return new web3.eth.Contract(abi, address);
};
