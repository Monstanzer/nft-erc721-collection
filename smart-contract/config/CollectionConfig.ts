import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'StagGamingClub',
  tokenName: 'Stag Gaming Club',
  tokenSymbol: 'STAG',
  hiddenMetadataUri: 'ipfs://QmaUuhvrrrJ8oBpqyubm5eEoZv8zfm4nFFcRdDyXBkucjr/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 10,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 1000,
  },
  publicSale: {
    price: 10,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x5bCaAA9D985CF76738F42b8e400Bec741c433d7D",
  marketplaceIdentifier: 'Stag-Gaming-Club',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
