const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const domainsContractFactory = await hre.ethers.getContractFactory('DomainRegistrar');
    const domainsContract = await domainsContractFactory.deploy();
    await domainsContract.deployed();

    console.log("Contract deployment address: ", domainsContract.address, " by:", owner.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();