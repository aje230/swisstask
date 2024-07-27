const hre = require("hardhat");
const { encryptDataField } = require("@swisstronik/utils");

const sendShieldedTransaction = async (signer, destination, data, value) => {
    const rpclink = hre.network.config.url;
    const [encryptedData] = await encryptDataField(rpclink, data);
    return await signer.sendTransaction({
      from: signer.address,
      to: destination,
      data: encryptedData,
      value,
    });
  };
  
  async function main() {

    const contractAddress = "0x84e16815CfA7FacABac6678eC1B0CdE5Fc52B5AF"; 
  
    const recipient = "0x16af037878a6cAce2Ea29d39A3757aC2F6F7aac1"; 
  
   
  
    const [signer] = await ethers.getSigners();
    const contractFactory = await ethers.getContractFactory("CryptolabsToken");
    const contract = contractFactory.attach(contractAddress);
  
    // Encode the transfer function call
    const functionName = "transfer";
    const transferData = contract.interface.encodeFunctionData(functionName, [recipient, 1]);
  
    // Send the shielded transaction
    const transferTx = await sendShieldedTransaction(signer, contractAddress, transferData, 0);
    await transferTx.wait();
  
    console.log("Transaction Receipt: ", transferTx);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });