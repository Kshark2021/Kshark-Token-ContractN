const KShark = artifacts.require("KShark");

async function deployTestnet(deployer) {

  const KsharkDeploy = await deployer.deploy(KShark)
  console.log(`Deploy: Kshark Address = ${KsharkDeploy.address}`)

}

module.exports = function(deployer) {
deployer.then(async() => {
  console.log(deployer.network);
  switch (deployer.network) {
    case 'bsctestnet':
      await deployTestnet(deployer);
      break;
    case 'bscmainnet':
      await deployTestnet(deployer);
      break;
    default:
      throw("Unsupported network");
  }
})
};