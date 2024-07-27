const hre = require("hardhat");
// const fs = require("fs");
const { encryptDataField } = require("@swisstronik/utils");

const sendShieldedTransaction = async (signer, destination, data, value) => {
  const rpcLink = hre.network.config.url;
  const [encryptedData] = await encryptDataField(rpcLink, data);
  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  const contractAddress = "0xea0D71B89044a17B41C6C550c4c01e1078f0Ca5F"



  const [signer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("CryptolabsNFT");
  const contract = contractFactory.attach(contractAddress);
  const functionName = "mint";
  const tokenId = 1;

  const mintData = contract.interface.encodeFunctionData(functionName, [signer.address, tokenId]);
  const safeMintTx = await sendShieldedTransaction(
    signer,
    contractAddress,
    mintData,
    0
  );
  await safeMintTx.wait();
  console.log(`"Transaction Receipt: ", Minting NFT has been success! Transaction hash: https://explorer-evm.testnet.swisstronik.com/tx/${safeMintTx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});