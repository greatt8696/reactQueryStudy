export const MintNewNFT = async (
  WalletABI,
  address,
  network,
  mediaID,
  amountIn
) => {
  try {
    //adjust this to take an argument for media id

    const web3 = new Web3("https://rinkeby.infura.io/v3/key");
    const weiValue = Web3.utils.toWei(amountIn.toString(), "ether");
    console.log(weiValue, mediaID);

    const transactionParameters = {
      to: WalletABI._address, // Required except during contract publications.
      from: address, // must match user's active address.
      value: weiValue.toString(),
      data: web3.eth.abi.encodeFunctionCall(
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "mediaID",
              type: "bytes32",
            },
          ],
          name: "mintNewNFT",
          outputs: [],
          stateMutability: "payable",
          type: "function",
          payable: true,
        },
        [mediaID]
      ),
      chainId: `0x${network}`, // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };

    // txHash is a hex string
    // As with any RPC call, it may throw an error
    await window.ethereum
      .request({
        method: "eth_sendTransaction",
        params: [transactionParameters],
      })
      .then((result) => {
        // The result varies by by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.

        console.log(`Transaction Result ${result}`);
      })
      .catch((error) => {
        // If the request fails, the Promise will reject with an error.

        console.log(`Transaction ERROR :  ${error.message}`);
      });
  } catch (error) {
    throw Error("Error Minting New NFT", error);
  }
};
