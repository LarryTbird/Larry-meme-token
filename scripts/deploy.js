const hre = require("hardhat");

async function main() {
  const LarryMeme = await hre.ethers.getContractFactory("LarryMeme");
  const larryMeme = await LarryMeme.deploy();

  await larryMeme.deployed();

  console.log(`Larry Meme token deployed to ${larryMeme.address}`);

  await hre.run(`verify:verify`, {
    address: larryMeme.address,
    constructorArguments: [],
    contract: "contracts/LarryMeme.sol:LarryMeme",
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
