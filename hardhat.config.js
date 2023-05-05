require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

const privateKey = fs.readFileSync(".secret").toString()
const projectId = "7b9170a08483452982dcd35bd9e830ed"

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/bP5szLLJCNvVx6EXPDdIUmuw9NZdz4Yx",
      accounts: [ "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80" ]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/8aTaXgQHEavvdl_dVM9sOgPF0stKrFab",
      accounts:[ '6affce02752b49e3f1e0b00c969b646c7aa74b02d10e979c46b61d8451b16835' ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};