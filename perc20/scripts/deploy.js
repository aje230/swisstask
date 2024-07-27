const hre = require("hardhat");

async function main() {
  /**
   * @dev make sure the first argument has the same name as your contract in the Hello_swtr.sol file
   * @dev the second argument must be the message we want to set in the contract during the deployment process
   */


// 0xeDcadD3DA90E6094797aCd6Ebf143E52d09825A0

  const CryptolabsToken = await hre.ethers.getContractFactory("CryptolabsToken");

  const cryptolabsToken = await CryptolabsToken.deploy(1000000);

    await cryptolabsToken.waitForDeployment();


  console.log(`CryptolabsToken contract deployed to ${cryptolabsToken.target}`);
}

//DEFAULT BY HARDHAT:
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});