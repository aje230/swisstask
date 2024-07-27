// contracts/Perc20.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./PERC20/PERC20.sol";

contract CryptolabsToken is PERC20 {
    constructor(uint256 initialSupply) PERC20("Cryptolabs", "COB") {
        _mint(msg.sender, initialSupply*10**18);
        }

        function mintTokens(uint256 amount) public {
        _mint(msg.sender, amount*10**18);
        }
}