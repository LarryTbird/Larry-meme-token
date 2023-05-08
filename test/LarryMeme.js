const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Larry token", function () {
  async function deploy() {
    const [owner] = await ethers.getSigners();

    const Larry = await ethers.getContractFactory("LarryMeme");
    const larry = await Larry.deploy();

    return { larry, owner };
  }

  describe("Larry test", function () {
    it("deployer gets all tokens", async function () {
      const { larry, owner } = await loadFixture(deploy);

      let deployerBalance = await larry.balanceOf(owner.address);

      deployerBalance = ethers.utils.formatUnits(
        deployerBalance.toString(),
        "18"
      );

      expect(deployerBalance).to.equal("44000000000.0");
    });
  });
});
