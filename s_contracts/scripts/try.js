const main = async () => {
    const [owner] = await hre.ethers.getSigners();
    const domainsContractFactory = await hre.ethers.getContractFactory('DomainRegistrar');
    const domainsContract = await domainsContractFactory.deploy();
    await domainsContract.deployed();
    console.log("Contract deployment address: ", domainsContract.address, " by:", owner.address);

    const txn = await domainsContract.registerDomain(owner.address, "boom", 3,  {
        value: hre.ethers.utils.parseEther('0.5')
    });
    await txn.wait();

    const txn2 = await domainsContract.registerDomain(owner.address, "doom", 3);
    await txn2.wait();

    const domains = await domainsContract.getAllDomainsByAddress(owner.address);
    console.log(domains);

    const numberOfDomains = await domainsContract.getNumberofDomainsByAddress(owner.address);
    console.log(numberOfDomains)

    const allDomainlabels = await domainsContract.getAllDomainLabelsByAddress(owner.address);
    console.log(allDomainlabels);

    const domains3 = await domainsContract.getDomainInfoByName(allDomainlabels[1]);
    console.log(domains3)

    const avatar = await domainsContract.getAvatarFromDomainLabel("doom");
    console.log(avatar);
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