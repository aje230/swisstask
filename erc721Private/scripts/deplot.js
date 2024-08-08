const hre = require("hardhat");

async function main() {

  const CryptolabsNFT = await hre.ethers.getContractFactory("CryptolabsNFT");

  const cryptolabsNFT = await CryptolabsNFT.deploy();

 await cryptolabsNFT.waitForDeployment();


  console.log(`CryptolabsNFT contract deployed to ${cryptolabsNFT.target}`);
}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});