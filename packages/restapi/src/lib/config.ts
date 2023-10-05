import Constants from './constants';
import { coreABI } from './abis/core';
import { commABI } from './abis/comm';
import { tokenABI } from './abis/token';
import {
  mainnet,
  goerli,
  polygon,
  polygonMumbai,
  bsc,
  bscTestnet,
  optimism,
  optimismGoerli,
  polygonZkEvm,
  polygonZkEvmTestnet,
} from 'viem/chains';
const { ENV } = Constants;

// for methods not needing the entire config
export const API_BASE_URL = {
  [ENV.PROD]: 'https://backend.epns.io/apis',
  [ENV.STAGING]: 'https://backend-staging.epns.io/apis',
  [ENV.DEV]: 'https://backend-dev.epns.io/apis',

  /**
   * **This is for local development only**
   */
  [ENV.LOCAL]: 'http://localhost:4000/apis',
};

const BLOCKCHAIN_NETWORK = {
  ETH_MAINNET: 'eip155:1',
  ETH_GOERLI: 'eip155:5',
  POLYGON_MAINNET: 'eip155:137',
  POLYGON_MUMBAI: 'eip155:80001',
  BSC_MAINNET: 'eip155:56',
  BSC_TESTNET: 'eip155:97',
  OPTIMISM_TESTNET: 'eip155:420',
  OPTIMISM_MAINNET: 'eip155:10',
  POLYGON_ZK_EVM_TESTNET: 'eip155:1442',
  POLYGON_ZK_EVM_MAINNET: 'eip155:1101',
  ARBITRUM_TESTNET: 'eip155:421613',
  ARBITRUMONE_MAINNET: "eip155:42161"
};

export type ALIAS_CHAIN = 'POLYGON' | 'BSC' | 'OPTIMISM' | 'POLYGONZKEVM' | "ARBITRUMONE";

export const ETH_CHAIN_ID = {
  [ENV.PROD]: 1,
  [ENV.STAGING]: 5,
  [ENV.DEV]: 5,
  [ENV.LOCAL]: 5,
};
export const ALIAS_CHAIN_ID = {
  POLYGON: {
    [ENV.PROD]: 137,
    [ENV.STAGING]: 80001,
    [ENV.DEV]: 80001,
    [ENV.LOCAL]: 80001,
  },
  BSC: {
    [ENV.PROD]: 56,
    [ENV.STAGING]: 97,
    [ENV.DEV]: 97,
    [ENV.LOCAL]: 97,
  },
  OPTIMISM: {
    [ENV.PROD]: 10,
    [ENV.STAGING]: 420,
    [ENV.DEV]: 420,
    [ENV.LOCAL]: 420,
  },
  POLYGONZKEVM: {
    [ENV.PROD]: 1101,
    [ENV.STAGING]: 1442,
    [ENV.DEV]: 1442,
    [ENV.LOCAL]: 1442,
  },
  ARBITRUMONE: {
    [ENV.PROD]: 42161,
    [ENV.STAGING]: 421613,
    [ENV.DEV]: 421613,
    [ENV.LOCAL]: 421613,
  }
};

export const CHAIN_ID = {
  ETHEREUM: ETH_CHAIN_ID,
  ...ALIAS_CHAIN_ID,
};

export const CHAIN_NAME: { [key: number]: string } = {
  // eth
  1: 'ETHEREUM',
  5: 'ETHEREUM',
  // polygon
  137: 'POLYGON',
  80001: 'POLYGON',
  // bsc
  56: 'BSC',
  97: 'BSC',
  // optimism
  10: 'OPTIMISM',
  420: 'OPTIMISM',
  // plygonzkevm
  1101: 'POLYGONZKEVM',
  1442: 'POLYGONZKEVM',
};
export interface ConfigType {
  API_BASE_URL: string;
  EPNS_COMMUNICATOR_CONTRACT: string;
}


export const VIEM_CORE_CONFIG = {
  [ENV.PROD]: {
    NETWORK: mainnet,
    API_BASE_URL: API_BASE_URL[ENV.PROD],
    EPNS_CORE_CONTRACT: '0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE',
  },
  [ENV.STAGING]: {
    NETWORK: goerli,
    API_BASE_URL: API_BASE_URL[ENV.STAGING],
    EPNS_CORE_CONTRACT: '0xd4E3ceC407cD36d9e3767cD189ccCaFBF549202C',
  },
  [ENV.DEV]: {
    NETWORK: goerli,
    API_BASE_URL: API_BASE_URL[ENV.DEV],
    EPNS_CORE_CONTRACT: '0x23346B732d56d34EC4e890419fBFB8548216a799',
  },
  [ENV.LOCAL]: {
    NETWORK: goerli,
    API_BASE_URL: API_BASE_URL[ENV.DEV],
    EPNS_CORE_CONTRACT: '0x23346B732d56d34EC4e890419fBFB8548216a799',
  },
};

export const CORE_CONFIG = {
  [ENV.PROD]: {
    API_BASE_URL: API_BASE_URL[ENV.PROD],
    EPNS_CORE_CONTRACT: '0x66329Fdd4042928BfCAB60b179e1538D56eeeeeE',
  },
  [ENV.STAGING]: {
    API_BASE_URL: API_BASE_URL[ENV.STAGING],
    EPNS_CORE_CONTRACT: '0xd4E3ceC407cD36d9e3767cD189ccCaFBF549202C',
  },
  [ENV.DEV]: {
    API_BASE_URL: API_BASE_URL[ENV.DEV],
    EPNS_CORE_CONTRACT: '0x23346B732d56d34EC4e890419fBFB8548216a799',
  },
  [ENV.LOCAL]: {
    API_BASE_URL: API_BASE_URL[ENV.DEV],
    EPNS_CORE_CONTRACT: '0x23346B732d56d34EC4e890419fBFB8548216a799',
  },
};

const CONFIG = {
  [ENV.PROD]: {
    [BLOCKCHAIN_NETWORK.ETH_MAINNET]: {
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MAINNET]: {
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.BSC_MAINNET]: {
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_MAINNET]: {
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_MAINNET]: {
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.ARBITRUMONE_MAINNET]: {
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
  },
  [ENV.STAGING]: {
    [BLOCKCHAIN_NETWORK.ETH_GOERLI]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.BSC_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.ARBITRUM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
  },
  [ENV.DEV]: {
    [BLOCKCHAIN_NETWORK.ETH_GOERLI]: {
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504',
    },
    [BLOCKCHAIN_NETWORK.BSC_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x4132061E3349ff36cFfCadA460E10Bd4f31F7ea8',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x4305D572F2bf38Fc2AE8D0172055b1EFd18F57a6',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x630b152e4185c63D7177c656b56b26f878C61572',
    },
    [BLOCKCHAIN_NETWORK.ARBITRUM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0x2f6aE0907116A2c50D712e78b48D874fadeB6850',
    },
  },
  [ENV.LOCAL]: {
    [BLOCKCHAIN_NETWORK.ETH_GOERLI]: {
      API_BASE_URL: API_BASE_URL[ENV.LOCAL],
      EPNS_COMMUNICATOR_CONTRACT: '0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
      API_BASE_URL: API_BASE_URL[ENV.LOCAL],
      EPNS_COMMUNICATOR_CONTRACT: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504',
    },
    [BLOCKCHAIN_NETWORK.BSC_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.LOCAL],
      EPNS_COMMUNICATOR_CONTRACT: '0x4132061E3349ff36cFfCadA460E10Bd4f31F7ea8',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.LOCAL],
      EPNS_COMMUNICATOR_CONTRACT: '0x4305D572F2bf38Fc2AE8D0172055b1EFd18F57a6',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x630b152e4185c63D7177c656b56b26f878C61572',
    },
    [BLOCKCHAIN_NETWORK.ARBITRUM_TESTNET]: {
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0x2f6aE0907116A2c50D712e78b48D874fadeB6850',
    },
  },
};

export default CONFIG;
export const TOKEN = {
  [ENV.PROD]: '0xf418588522d5dd018b425E472991E52EBBeEEEEE',
  [ENV.STAGING]: '0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33',
  [ENV.DEV]: '0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33',
  [ENV.LOCAL]: '0x2b9bE9259a4F5Ba6344c1b1c07911539642a2D33',
};

export const TOKEN_VIEM_NETWORK_MAP = {
  [ENV.PROD]: mainnet,
  [ENV.STAGING]: goerli,
  [ENV.DEV]: goerli,
  [ENV.LOCAL]: goerli,
}

export const MIN_TOKEN_BALANCE = {
  [ENV.PROD]: 50,
  [ENV.STAGING]: 50,
  [ENV.DEV]: 50,
  [ENV.LOCAL]: 50,
};
export const ABIS = {
  CORE: coreABI,
  COMM: commABI,
  TOKEN: tokenABI,
};

export const CHANNEL_TYPE = {
  TIMEBOUND: 4,
  GENERAL: 2,
};


export const VIEM_CONFIG = {
  [ENV.PROD]: {
    [BLOCKCHAIN_NETWORK.ETH_MAINNET]: {
      NETWORK: mainnet,
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MAINNET]: {
      NETWORK: polygon,
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.BSC_MAINNET]: {
      NETWORK: bsc,
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_MAINNET]: {
      NETWORK: optimism,
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_MAINNET]: {
      NETWORK: polygonZkEvm,
      API_BASE_URL: API_BASE_URL[ENV.PROD],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
  },
  [ENV.STAGING]: {
    [BLOCKCHAIN_NETWORK.ETH_GOERLI]: {
      NETWORK: goerli,
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
      NETWORK: polygonMumbai,
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.BSC_TESTNET]: {
      NETWORK: bscTestnet,
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_TESTNET]: {
      NETWORK: optimismGoerli,
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_TESTNET]: {
      NETWORK: polygonZkEvmTestnet,
      API_BASE_URL: API_BASE_URL[ENV.STAGING],
      EPNS_COMMUNICATOR_CONTRACT: '0xb3971BCef2D791bc4027BbfedFb47319A4AAaaAa',
    },
  },
  [ENV.DEV]: {
    [BLOCKCHAIN_NETWORK.ETH_GOERLI]: {
      NETWORK: goerli,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
      NETWORK: polygonMumbai,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504',
    },
    [BLOCKCHAIN_NETWORK.BSC_TESTNET]: {
      NETWORK: bscTestnet,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x4132061E3349ff36cFfCadA460E10Bd4f31F7ea8',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_TESTNET]: {
      NETWORK: optimismGoerli,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x4305D572F2bf38Fc2AE8D0172055b1EFd18F57a6',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_TESTNET]: {
      NETWORK: polygonZkEvmTestnet,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x630b152e4185c63D7177c656b56b26f878C61572',
    },
  },
  [ENV.LOCAL]: {
    [BLOCKCHAIN_NETWORK.ETH_GOERLI]: {
      NETWORK: goerli,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0xc064F30bac07e84500c97A04D21a9d1bfFC72Ec0',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_MUMBAI]: {
      NETWORK: polygonMumbai,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0xAf55BE8e6b0d6107891bA76eADeEa032ef8A4504',
    },
    [BLOCKCHAIN_NETWORK.BSC_TESTNET]: {
      NETWORK: bscTestnet,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x4132061E3349ff36cFfCadA460E10Bd4f31F7ea8',
    },
    [BLOCKCHAIN_NETWORK.OPTIMISM_TESTNET]: {
      NETWORK: optimismGoerli,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x4305D572F2bf38Fc2AE8D0172055b1EFd18F57a6',
    },
    [BLOCKCHAIN_NETWORK.POLYGON_ZK_EVM_TESTNET]: {
      NETWORK: polygonZkEvmTestnet,
      API_BASE_URL: API_BASE_URL[ENV.DEV],
      EPNS_COMMUNICATOR_CONTRACT: '0x630b152e4185c63D7177c656b56b26f878C61572',
    },
  },
};
