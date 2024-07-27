const hre = require("hardhat");


async function main() {

  const cryptolabsNFT = await hre.ethers.deployContract("CryptolabsNFT");

  await cryptolabsNFT.waitForDeployment();

  const deployedContract = await cryptolabsNFT.getAddress();

  console.log(`Contract deployed to ${deployedContract}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});