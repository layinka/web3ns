const main = async () => {
    const domain = "boom";
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const domainsContractFactory = await hre.ethers.getContractFactory('XNS');
    const domainsContract = await domainsContractFactory.deploy("mtr");
    await domainsContract.deployed();
    console.log("Contract deployment address: ", domainsContract.address, " by:", owner.address);

    const txn = await domainsContract.register(domain.toString(), {
        value: hre.ethers.utils.parseEther('0.1')
    });
    await txn.wait();

    const domainAddress = await domainsContract.getOwner(domain.toString());
    console.log(`Owner of domain '${domain}': `, domainAddress);

    const balance = await hre.ethers.provider.getBalance(domainsContract.address);
    console.log("Contract balance:", hre.ethers.utils.formatEther(balance));

    txn = await domainsContract.setRecord(domain.toString(), "@foobar");
    await txn.wait();
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