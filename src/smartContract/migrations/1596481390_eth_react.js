const EthReact = artifacts.require("EthReact");

module.exports = function (deployer) {
  deployer.deploy(EthReact , "This is my Message");
};