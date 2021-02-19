// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const FontERC20 = await ethers.getContractFactory("FontERC20");
  console.log("Deploying FontERC20...");
  const fontERC20 = await FontERC20.deploy();
  await fontERC20.deployed();
  console.log("FontERC20 deployed to:", fontERC20.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });