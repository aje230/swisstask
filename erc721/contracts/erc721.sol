// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract CryptolabsNFT is ERC721, ERC721Burnable {

    constructor() ERC721("CryptolabsItem", "COI"){}

    function mint(address to, uint256 tokenId) public
    {
        _safeMint(to, tokenId);
        }
}