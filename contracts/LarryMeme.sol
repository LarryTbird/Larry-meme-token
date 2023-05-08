// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LarryMeme is ERC20 {
    constructor() ERC20("LARRY COIN", "LARRY") {
        _mint(msg.sender, 44 * 10 ** (9 + decimals()));
    }
}
