export default {
    TLD: ".mtr",
    CONTRACT_ADDRESS: '0x6260d3AE0bd680E9B9289e739B78F46609d405c8',
    CONTRACT_ABI: {
        "_format": "hh-sol-artifact-1",
        "contractName": "DomainRegistrar",
        "sourceName": "contracts/Registrar.sol",
        "abi": [
          {
            "inputs": [],
            "stateMutability": "payable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "domainRegistrant",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "string",
                "name": "domainNameRegistered",
                "type": "string"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "time",
                "type": "uint256"
              }
            ],
            "name": "NewDomainRegistered",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [],
            "name": "_tld",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_registrant",
                "type": "address"
              }
            ],
            "name": "getAllDomainLabelsByAddress",
            "outputs": [
              {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_registrant",
                "type": "address"
              }
            ],
            "name": "getAllDomainsByAddress",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "label",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "registrant",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "registrationDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "expiry",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "parentTLD",
                    "type": "string"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "ethAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "desc",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "avatar",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "discord",
                        "type": "string"
                      }
                    ],
                    "internalType": "struct Record",
                    "name": "records",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct Domain[]",
                "name": "",
                "type": "tuple[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "getApproved",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              }
            ],
            "name": "getAvatarFromDomainLabel",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              }
            ],
            "name": "getControllerFromDomainLabel",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              }
            ],
            "name": "getDiscordTagFromDomainLabel",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              }
            ],
            "name": "getDomainInfoByName",
            "outputs": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "label",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "registrant",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "controller",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "registrationDate",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "expiry",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "parentTLD",
                    "type": "string"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "ethAddress",
                        "type": "address"
                      },
                      {
                        "internalType": "string",
                        "name": "email",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "desc",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "url",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "avatar",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "discord",
                        "type": "string"
                      }
                    ],
                    "internalType": "struct Record",
                    "name": "records",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct Domain",
                "name": "",
                "type": "tuple"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_registrant",
                "type": "address"
              }
            ],
            "name": "getNumberofDomainsByAddress",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              }
            ],
            "name": "isApprovedForAll",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "isOwner",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "owner",
            "outputs": [
              {
                "internalType": "address payable",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "ownerOf",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "name": "price",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_registrant",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "yearsRegistered",
                "type": "uint256"
              }
            ],
            "name": "registerDomain",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
              }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "avatarURL",
                "type": "string"
              }
            ],
            "name": "setAvatarForDomainLabel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "newController",
                "type": "address"
              }
            ],
            "name": "setControllerForDomainLabel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "discordTag",
                "type": "string"
              }
            ],
            "name": "setDiscordTagForDomainLabel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
              }
            ],
            "name": "supportsInterface",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "tokenURI",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              }
            ],
            "name": "valid",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "pure",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "bytecode": "0x60806040526040518060400160405280600381526020017f6d747200000000000000000000000000000000000000000000000000000000008152506009908051906020019062000051929190620001e9565b50604051806103e001604052806103b68152602001620060696103b69139600a908051906020019062000086929190620001e9565b506040518060400160405280600d81526020017f3c2f746578743e3c2f7376673e00000000000000000000000000000000000000815250600b9080519060200190620000d4929190620001e9565b506040518060400160405280601481526020017f4d65746572204e616d696e6720536572766963650000000000000000000000008152506040518060400160405280600381526020017f4d4e530000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000159929190620001e9565b50806001908051906020019062000172929190620001e9565b50505033600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001cd600d620001d360201b62002b5c1760201c565b620002fe565b6001816000016000828254019250508190555050565b828054620001f790620002c8565b90600052602060002090601f0160209004810192826200021b576000855562000267565b82601f106200023657805160ff191683800117855562000267565b8280016001018555821562000267579182015b828111156200026657825182559160200191906001019062000249565b5b5090506200027691906200027a565b5090565b5b80821115620002955760008160009055506001016200027b565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002e157607f821691505b60208210811415620002f857620002f762000299565b5b50919050565b615d5b806200030e6000396000f3fe6080604052600436106101cd5760003560e01c806388828fa5116100f7578063a22cb46511610095578063e435422a11610064578063e435422a146106c3578063e985e9c514610700578063fc1d0f551461073d578063fe2c61981461077a576101cd565b8063a22cb465146105f7578063a710446814610620578063b88d4fde1461065d578063c87b56dd14610686576101cd565b80638f32d59b116100d15780638f32d59b1461053b578063913137fa1461056657806395d89b411461058f5780639791c097146105ba576101cd565b806388828fa5146104aa5780638b3f5634146104e75780638da5cb5b14610510576101cd565b80631af7a37a1161016f57806342842e0e1161013e57806342842e0e146103dc57806355bb61e0146104055780636352211e1461043057806370a082311461046d576101cd565b80631af7a37a1461034357806323b872dd1461035f578063366a6bb9146103885780633ccfd60b146103c5576101cd565b8063095ea7b3116101ab578063095ea7b3146102775780630a2494b0146102a05780630f4b163c146102dd57806317c6ab021461031a576101cd565b806301ffc9a7146101d257806306fdde031461020f578063081812fc1461023a575b600080fd5b3480156101de57600080fd5b506101f960048036038101906101f49190613e5d565b6107b7565b6040516102069190613ea5565b60405180910390f35b34801561021b57600080fd5b50610224610899565b6040516102319190613f59565b60405180910390f35b34801561024657600080fd5b50610261600480360381019061025c9190613fb1565b61092b565b60405161026e919061401f565b60405180910390f35b34801561028357600080fd5b5061029e60048036038101906102999190614066565b6109b0565b005b3480156102ac57600080fd5b506102c760048036038101906102c2919061410b565b610ac8565b6040516102d49190613f59565b60405180910390f35b3480156102e957600080fd5b5061030460048036038101906102ff919061410b565b610b81565b604051610311919061401f565b60405180910390f35b34801561032657600080fd5b50610341600480360381019061033c9190614158565b610bcf565b005b61035d600480360381019061035891906141d9565b610c0b565b005b34801561036b57600080fd5b506103866004803603810190610381919061424d565b61144b565b005b34801561039457600080fd5b506103af60048036038101906103aa91906142a0565b6114ab565b6040516103bc9190614546565b60405180910390f35b3480156103d157600080fd5b506103da611a71565b005b3480156103e857600080fd5b5061040360048036038101906103fe919061424d565b611b37565b005b34801561041157600080fd5b5061041a611b57565b6040516104279190613f59565b60405180910390f35b34801561043c57600080fd5b5061045760048036038101906104529190613fb1565b611be5565b604051610464919061401f565b60405180910390f35b34801561047957600080fd5b50610494600480360381019061048f91906142a0565b611c97565b6040516104a19190614577565b60405180910390f35b3480156104b657600080fd5b506104d160048036038101906104cc91906146c2565b611d4f565b6040516104de9190613f59565b60405180910390f35b3480156104f357600080fd5b5061050e6004803603810190610509919061470b565b611e05565b005b34801561051c57600080fd5b50610525611e6c565b604051610532919061478c565b60405180910390f35b34801561054757600080fd5b50610550611e92565b60405161055d9190613ea5565b60405180910390f35b34801561057257600080fd5b5061058d600480360381019061058891906147a7565b611eea565b005b34801561059b57600080fd5b506105a4611f27565b6040516105b19190613f59565b60405180910390f35b3480156105c657600080fd5b506105e160048036038101906105dc919061410b565b611fb9565b6040516105ee9190613ea5565b60405180910390f35b34801561060357600080fd5b5061061e6004803603810190610619919061484b565b61206d565b005b34801561062c57600080fd5b50610647600480360381019061064291906142a0565b612083565b6040516106549190614577565b60405180910390f35b34801561066957600080fd5b50610684600480360381019061067f919061492c565b6120cf565b005b34801561069257600080fd5b506106ad60048036038101906106a89190613fb1565b612131565b6040516106ba9190613f59565b60405180910390f35b3480156106cf57600080fd5b506106ea60048036038101906106e591906142a0565b612283565b6040516106f79190614a71565b60405180910390f35b34801561070c57600080fd5b5061072760048036038101906107229190614a93565b6124bf565b6040516107349190613ea5565b60405180910390f35b34801561074957600080fd5b50610764600480360381019061075f919061410b565b612553565b6040516107719190614b7d565b60405180910390f35b34801561078657600080fd5b506107a1600480360381019061079c919061410b565b612ab6565b6040516107ae9190614577565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061088257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610892575061089182612b72565b5b9050919050565b6060600080546108a890614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546108d490614bce565b80156109215780601f106108f657610100808354040283529160200191610921565b820191906000526020600020905b81548152906001019060200180831161090457829003601f168201915b5050505050905090565b600061093682612bdc565b610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096c90614c72565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006109bb82611be5565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390614d04565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610a4b612c48565b73ffffffffffffffffffffffffffffffffffffffff161480610a7a5750610a7981610a74612c48565b6124bf565b5b610ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab090614d96565b60405180910390fd5b610ac38383612c50565b505050565b606060088383604051610adc929190614de6565b90815260200160405180910390206006016005018054610afb90614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2790614bce565b8015610b745780601f10610b4957610100808354040283529160200191610b74565b820191906000526020600020905b815481529060010190602001808311610b5757829003601f168201915b5050505050905092915050565b600060088383604051610b95929190614de6565b908152602001604051809103902060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b818160088686604051610be3929190614de6565b90815260200160405180910390206006016005019190610c04929190613c0d565b5050505050565b6000610c17600d612d09565b9050610c21613c93565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050816000018190525085816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505085816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050428160600181815250506301e1338083610cf89190614e2e565b42610d039190614e88565b81608001818152505060098054610d1990614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4590614bce565b8015610d925780601f10610d6757610100808354040283529160200191610d92565b820191906000526020600020905b815481529060010190602001808311610d7557829003601f168201915b50505050508160a001819052506040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152508160c00181905250610e403383612d17565b600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600c02016000909190919091506000820151816000019080519060200190610ec5929190613d02565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005019080519060200190610f84929190613d02565b5060c08201518160060160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610ff1929190613d02565b50604082015181600201908051906020019061100e929190613d02565b50606082015181600301908051906020019061102b929190613d02565b506080820151816004019080519060200190611048929190613d02565b5060a0820151816005019080519060200190611065929190613d02565b5050505050806008868660405161107d929190614de6565b908152602001604051809103902060008201518160000190805190602001906110a7929190613d02565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005019080519060200190611166929190613d02565b5060c08201518160060160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906111d3929190613d02565b5060408201518160020190805190602001906111f0929190613d02565b50606082015181600301908051906020019061120d929190613d02565b50608082015181600401908051906020019061122a929190613d02565b5060a0820151816005019080519060200190611247929190613d02565b505050905050611257600d612b5c565b60008585600960405160200161126f93929190614fbe565b604051602081830303815290604052905060006112cf87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b905060006112dc82612eea565b905060606000600a85600b6040516020016112f993929190615020565b60405160208183030381529060405290506113138161304b565b604051602001611323919061509d565b6040516020818303038152906040529150600061136286848660405160200161134e93929190615215565b60405160208183030381529060405261304b565b905060008160405160200161137791906152be565b604051602081830303815290604052905061139289826131e3565b6113e08c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505085611eea565b428c8c6040516113f1929190614de6565b60405180910390208e73ffffffffffffffffffffffffffffffffffffffff167fa28942077cbe9bc6fa65727a7d24defa6095c4ec5ffddd8da07277ea25df795860405160405180910390a450505050505050505050505050565b61145c611456612c48565b82613257565b61149b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149290615352565b60405180910390fd5b6114a6838383613335565b505050565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611a6657838290600052602060002090600c02016040518060e001604052908160008201805461153f90614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461156b90614bce565b80156115b85780601f1061158d576101008083540402835291602001916115b8565b820191906000526020600020905b81548152906001019060200180831161159b57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820154815260200160058201805461169190614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546116bd90614bce565b801561170a5780601f106116df5761010080835404028352916020019161170a565b820191906000526020600020905b8154815290600101906020018083116116ed57829003601f168201915b50505050508152602001600682016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461178990614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546117b590614bce565b80156118025780601f106117d757610100808354040283529160200191611802565b820191906000526020600020905b8154815290600101906020018083116117e557829003601f168201915b5050505050815260200160028201805461181b90614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461184790614bce565b80156118945780601f1061186957610100808354040283529160200191611894565b820191906000526020600020905b81548152906001019060200180831161187757829003601f168201915b505050505081526020016003820180546118ad90614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546118d990614bce565b80156119265780601f106118fb57610100808354040283529160200191611926565b820191906000526020600020905b81548152906001019060200180831161190957829003601f168201915b5050505050815260200160048201805461193f90614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461196b90614bce565b80156119b85780601f1061198d576101008083540402835291602001916119b8565b820191906000526020600020905b81548152906001019060200180831161199b57829003601f168201915b505050505081526020016005820180546119d190614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546119fd90614bce565b8015611a4a5780601f10611a1f57610100808354040283529160200191611a4a565b820191906000526020600020905b815481529060010190602001808311611a2d57829003601f168201915b505050505081525050815250508152602001906001019061150c565b505050509050919050565b611a79611e92565b611a8257600080fd5b600047905060003373ffffffffffffffffffffffffffffffffffffffff1682604051611aad906153a3565b60006040518083038185875af1925050503d8060008114611aea576040519150601f19603f3d011682016040523d82523d6000602084013e611aef565b606091505b5050905080611b33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2a90615404565b60405180910390fd5b5050565b611b52838383604051806020016040528060008152506120cf565b505050565b60098054611b6490614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054611b9090614bce565b8015611bdd5780601f10611bb257610100808354040283529160200191611bdd565b820191906000526020600020905b815481529060010190602001808311611bc057829003601f168201915b505050505081565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c8590615496565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cff90615528565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600882604051611d619190615548565b90815260200160405180910390206006016004018054611d8090614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054611dac90614bce565b8015611df95780601f10611dce57610100808354040283529160200191611df9565b820191906000526020600020905b815481529060010190602001808311611ddc57829003601f168201915b50505050509050919050565b8060088484604051611e18929190614de6565b908152602001604051809103902060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b80600883604051611efb9190615548565b90815260200160405180910390206006016004019080519060200190611f22929190613d02565b505050565b606060018054611f3690614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6290614bce565b8015611faf5780601f10611f8457610100808354040283529160200191611faf565b820191906000526020600020905b815481529060010190602001808311611f9257829003601f168201915b5050505050905090565b6000600361200a84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b101580156120655750600c61206284848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b11155b905092915050565b61207f612078612c48565b838361359c565b5050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b6120e06120da612c48565b83613257565b61211f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161211690615352565b60405180910390fd5b61212b84848484613709565b50505050565b606061213c82612bdc565b61217b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612172906155d1565b60405180910390fd5b600060066000848152602001908152602001600020805461219b90614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546121c790614bce565b80156122145780601f106121e957610100808354040283529160200191612214565b820191906000526020600020905b8154815290600101906020018083116121f757829003601f168201915b505050505090506000612225613765565b905060008151141561223b57819250505061227e565b6000825111156122705780826040516020016122589291906155f1565b6040516020818303038152906040529250505061227e565b6122798461377c565b925050505b919050565b6060600080600090505b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156122f85781806122e290615615565b92505080806122f090615615565b91505061228d565b5060008167ffffffffffffffff81111561231557612314614597565b5b60405190808252806020026020018201604052801561234857816020015b60608152602001906001900390816123335790505b50905060005b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156124b457600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106123e9576123e861565e565b5b90600052602060002090600c0201600001805461240590614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461243190614bce565b801561247e5780601f106124535761010080835404028352916020019161247e565b820191906000526020600020905b81548152906001019060200180831161246157829003601f168201915b50505050508282815181106124965761249561565e565b5b602002602001018190525080806124ac90615615565b91505061234e565b508092505050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61255b613c93565b6008838360405161256d929190614de6565b90815260200160405180910390206040518060e001604052908160008201805461259690614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546125c290614bce565b801561260f5780601f106125e45761010080835404028352916020019161260f565b820191906000526020600020905b8154815290600101906020018083116125f257829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160038201548152602001600482015481526020016005820180546126e890614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461271490614bce565b80156127615780601f1061273657610100808354040283529160200191612761565b820191906000526020600020905b81548152906001019060200180831161274457829003601f168201915b50505050508152602001600682016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546127e090614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461280c90614bce565b80156128595780601f1061282e57610100808354040283529160200191612859565b820191906000526020600020905b81548152906001019060200180831161283c57829003601f168201915b5050505050815260200160028201805461287290614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461289e90614bce565b80156128eb5780601f106128c0576101008083540402835291602001916128eb565b820191906000526020600020905b8154815290600101906020018083116128ce57829003601f168201915b5050505050815260200160038201805461290490614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461293090614bce565b801561297d5780601f106129525761010080835404028352916020019161297d565b820191906000526020600020905b81548152906001019060200180831161296057829003601f168201915b5050505050815260200160048201805461299690614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546129c290614bce565b8015612a0f5780601f106129e457610100808354040283529160200191612a0f565b820191906000526020600020905b8154815290600101906020018083116129f257829003601f168201915b50505050508152602001600582018054612a2890614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054612a5490614bce565b8015612aa15780601f10612a7657610100808354040283529160200191612aa1565b820191906000526020600020905b815481529060010190602001808311612a8457829003601f168201915b50505050508152505081525050905092915050565b600080612b0684848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b905060008111612b1557600080fd5b6003811415612b2f576706f05b59d3b20000915050612b56565b6004811415612b4957670429d069189e0000915050612b56565b67016345785d8a00009150505b92915050565b6001816000016000828254019250508190555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16612cc383611be5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b612d31828260405180602001604052806000815250613823565b5050565b60008060008084519050600092505b80821015612edf576000858381518110612d6157612d6061565e565b5b602001015160f81c60f81b9050608060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612db057600183612da99190614e88565b9250612ecb565b60e060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612df257600283612deb9190614e88565b9250612eca565b60f060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612e3457600383612e2d9190614e88565b9250612ec9565b60f8801b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612e7557600483612e6e9190614e88565b9250612ec8565b60fc60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612eb757600583612eb09190614e88565b9250612ec7565b600683612ec49190614e88565b92505b5b5b5b5b508280612ed790615615565b935050612d44565b829350505050919050565b60606000821415612f32576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613046565b600082905060005b60008214612f64578080612f4d90615615565b915050600a82612f5d91906156bc565b9150612f3a565b60008167ffffffffffffffff811115612f8057612f7f614597565b5b6040519080825280601f01601f191660200182016040528015612fb25781602001600182028036833780820191505090505b5090505b6000851461303f57600182612fcb91906156ed565b9150600a85612fda9190615721565b6030612fe69190614e88565b60f81b818381518110612ffc57612ffb61565e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561303891906156bc565b9450612fb6565b8093505050505b919050565b6060600082519050600081141561307457604051806020016040528060008152509150506131de565b600060036002836130859190614e88565b61308f91906156bc565b600461309b9190614e2e565b905060006020826130ac9190614e88565b67ffffffffffffffff8111156130c5576130c4614597565b5b6040519080825280601f01601f1916602001820160405280156130f75781602001600182028036833780820191505090505b5090506000604051806060016040528060408152602001615ce6604091399050600181016020830160005b8681101561319b5760038101905062ffffff818a015116603f8160121c168401518060081b905060ff603f83600c1c1686015116810190508060081b905060ff603f8360061c1686015116810190508060081b905060ff603f831686015116810190508060e01b90508084526004840193505050613122565b5060038606600181146131b557600281146131c5576131d0565b613d3d60f01b60028303526131d0565b603d60f81b60018303525b508484525050819450505050505b919050565b6131ec82612bdc565b61322b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613222906157c4565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190613252929190613d02565b505050565b600061326282612bdc565b6132a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161329890615856565b60405180910390fd5b60006132ac83611be5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061331b57508373ffffffffffffffffffffffffffffffffffffffff166133038461092b565b73ffffffffffffffffffffffffffffffffffffffff16145b8061332c575061332b81856124bf565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661335582611be5565b73ffffffffffffffffffffffffffffffffffffffff16146133ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133a2906158e8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561341b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016134129061597a565b60405180910390fd5b61342683838361387e565b613431600082612c50565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461348191906156ed565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546134d89190614e88565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4613597838383613883565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561360b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613602906159e6565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516136fc9190613ea5565b60405180910390a3505050565b613714848484613335565b61372084848484613888565b61375f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161375690615a78565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061378782612bdc565b6137c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016137bd90615b0a565b60405180910390fd5b60006137d0613765565b905060008151116137f0576040518060200160405280600081525061381b565b806137fa84612eea565b60405160200161380b9291906155f1565b6040516020818303038152906040525b915050919050565b61382d8383613a10565b61383a6000848484613888565b613879576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161387090615a78565b60405180910390fd5b505050565b505050565b505050565b60006138a98473ffffffffffffffffffffffffffffffffffffffff16613bea565b15613a03578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026138d2612c48565b8786866040518563ffffffff1660e01b81526004016138f49493929190615b7f565b6020604051808303816000875af192505050801561393057506040513d601f19601f8201168201806040525081019061392d9190615be0565b60015b6139b3573d8060008114613960576040519150601f19603f3d011682016040523d82523d6000602084013e613965565b606091505b506000815114156139ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016139a290615a78565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050613a08565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415613a80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613a7790615c59565b60405180910390fd5b613a8981612bdc565b15613ac9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613ac090615cc5565b60405180910390fd5b613ad56000838361387e565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254613b259190614e88565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4613be660008383613883565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054613c1990614bce565b90600052602060002090601f016020900481019282613c3b5760008555613c82565b82601f10613c5457803560ff1916838001178555613c82565b82800160010185558215613c82579182015b82811115613c81578235825591602001919060010190613c66565b5b509050613c8f9190613d88565b5090565b6040518060e0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160608152602001613cfc613da5565b81525090565b828054613d0e90614bce565b90600052602060002090601f016020900481019282613d305760008555613d77565b82601f10613d4957805160ff1916838001178555613d77565b82800160010185558215613d77579182015b82811115613d76578251825591602001919060010190613d5b565b5b509050613d849190613d88565b5090565b5b80821115613da1576000816000905550600101613d89565b5090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613e3a81613e05565b8114613e4557600080fd5b50565b600081359050613e5781613e31565b92915050565b600060208284031215613e7357613e72613dfb565b5b6000613e8184828501613e48565b91505092915050565b60008115159050919050565b613e9f81613e8a565b82525050565b6000602082019050613eba6000830184613e96565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613efa578082015181840152602081019050613edf565b83811115613f09576000848401525b50505050565b6000601f19601f8301169050919050565b6000613f2b82613ec0565b613f358185613ecb565b9350613f45818560208601613edc565b613f4e81613f0f565b840191505092915050565b60006020820190508181036000830152613f738184613f20565b905092915050565b6000819050919050565b613f8e81613f7b565b8114613f9957600080fd5b50565b600081359050613fab81613f85565b92915050565b600060208284031215613fc757613fc6613dfb565b5b6000613fd584828501613f9c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061400982613fde565b9050919050565b61401981613ffe565b82525050565b60006020820190506140346000830184614010565b92915050565b61404381613ffe565b811461404e57600080fd5b50565b6000813590506140608161403a565b92915050565b6000806040838503121561407d5761407c613dfb565b5b600061408b85828601614051565b925050602061409c85828601613f9c565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f8401126140cb576140ca6140a6565b5b8235905067ffffffffffffffff8111156140e8576140e76140ab565b5b602083019150836001820283011115614104576141036140b0565b5b9250929050565b6000806020838503121561412257614121613dfb565b5b600083013567ffffffffffffffff8111156141405761413f613e00565b5b61414c858286016140b5565b92509250509250929050565b6000806000806040858703121561417257614171613dfb565b5b600085013567ffffffffffffffff8111156141905761418f613e00565b5b61419c878288016140b5565b9450945050602085013567ffffffffffffffff8111156141bf576141be613e00565b5b6141cb878288016140b5565b925092505092959194509250565b600080600080606085870312156141f3576141f2613dfb565b5b600061420187828801614051565b945050602085013567ffffffffffffffff81111561422257614221613e00565b5b61422e878288016140b5565b9350935050604061424187828801613f9c565b91505092959194509250565b60008060006060848603121561426657614265613dfb565b5b600061427486828701614051565b935050602061428586828701614051565b925050604061429686828701613f9c565b9150509250925092565b6000602082840312156142b6576142b5613dfb565b5b60006142c484828501614051565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061431582613ec0565b61431f81856142f9565b935061432f818560208601613edc565b61433881613f0f565b840191505092915050565b61434c81613ffe565b82525050565b61435b81613f7b565b82525050565b600060c0830160008301516143796000860182614343565b5060208301518482036020860152614391828261430a565b915050604083015184820360408601526143ab828261430a565b915050606083015184820360608601526143c5828261430a565b915050608083015184820360808601526143df828261430a565b91505060a083015184820360a08601526143f9828261430a565b9150508091505092915050565b600060e0830160008301518482036000860152614423828261430a565b91505060208301516144386020860182614343565b50604083015161444b6040860182614343565b50606083015161445e6060860182614352565b5060808301516144716080860182614352565b5060a083015184820360a0860152614489828261430a565b91505060c083015184820360c08601526144a38282614361565b9150508091505092915050565b60006144bc8383614406565b905092915050565b6000602082019050919050565b60006144dc826142cd565b6144e681856142d8565b9350836020820285016144f8856142e9565b8060005b85811015614534578484038952815161451585826144b0565b9450614520836144c4565b925060208a019950506001810190506144fc565b50829750879550505050505092915050565b6000602082019050818103600083015261456081846144d1565b905092915050565b61457181613f7b565b82525050565b600060208201905061458c6000830184614568565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6145cf82613f0f565b810181811067ffffffffffffffff821117156145ee576145ed614597565b5b80604052505050565b6000614601613df1565b905061460d82826145c6565b919050565b600067ffffffffffffffff82111561462d5761462c614597565b5b61463682613f0f565b9050602081019050919050565b82818337600083830152505050565b600061466561466084614612565b6145f7565b90508281526020810184848401111561468157614680614592565b5b61468c848285614643565b509392505050565b600082601f8301126146a9576146a86140a6565b5b81356146b9848260208601614652565b91505092915050565b6000602082840312156146d8576146d7613dfb565b5b600082013567ffffffffffffffff8111156146f6576146f5613e00565b5b61470284828501614694565b91505092915050565b60008060006040848603121561472457614723613dfb565b5b600084013567ffffffffffffffff81111561474257614741613e00565b5b61474e868287016140b5565b9350935050602061476186828701614051565b9150509250925092565b600061477682613fde565b9050919050565b6147868161476b565b82525050565b60006020820190506147a1600083018461477d565b92915050565b600080604083850312156147be576147bd613dfb565b5b600083013567ffffffffffffffff8111156147dc576147db613e00565b5b6147e885828601614694565b925050602083013567ffffffffffffffff81111561480957614808613e00565b5b61481585828601614694565b9150509250929050565b61482881613e8a565b811461483357600080fd5b50565b6000813590506148458161481f565b92915050565b6000806040838503121561486257614861613dfb565b5b600061487085828601614051565b925050602061488185828601614836565b9150509250929050565b600067ffffffffffffffff8211156148a6576148a5614597565b5b6148af82613f0f565b9050602081019050919050565b60006148cf6148ca8461488b565b6145f7565b9050828152602081018484840111156148eb576148ea614592565b5b6148f6848285614643565b509392505050565b600082601f830112614913576149126140a6565b5b81356149238482602086016148bc565b91505092915050565b6000806000806080858703121561494657614945613dfb565b5b600061495487828801614051565b945050602061496587828801614051565b935050604061497687828801613f9c565b925050606085013567ffffffffffffffff81111561499757614996613e00565b5b6149a3878288016148fe565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006149e7838361430a565b905092915050565b6000602082019050919050565b6000614a07826149af565b614a1181856149ba565b935083602082028501614a23856149cb565b8060005b85811015614a5f5784840389528151614a4085826149db565b9450614a4b836149ef565b925060208a01995050600181019050614a27565b50829750879550505050505092915050565b60006020820190508181036000830152614a8b81846149fc565b905092915050565b60008060408385031215614aaa57614aa9613dfb565b5b6000614ab885828601614051565b9250506020614ac985828601614051565b9150509250929050565b600060e0830160008301518482036000860152614af0828261430a565b9150506020830151614b056020860182614343565b506040830151614b186040860182614343565b506060830151614b2b6060860182614352565b506080830151614b3e6080860182614352565b5060a083015184820360a0860152614b56828261430a565b91505060c083015184820360c0860152614b708282614361565b9150508091505092915050565b60006020820190508181036000830152614b978184614ad3565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680614be657607f821691505b60208210811415614bfa57614bf9614b9f565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000614c5c602c83613ecb565b9150614c6782614c00565b604082019050919050565b60006020820190508181036000830152614c8b81614c4f565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000614cee602183613ecb565b9150614cf982614c92565b604082019050919050565b60006020820190508181036000830152614d1d81614ce1565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000614d80603883613ecb565b9150614d8b82614d24565b604082019050919050565b60006020820190508181036000830152614daf81614d73565b9050919050565b600081905092915050565b6000614dcd8385614db6565b9350614dda838584614643565b82840190509392505050565b6000614df3828486614dc1565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614e3982613f7b565b9150614e4483613f7b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615614e7d57614e7c614dff565b5b828202905092915050565b6000614e9382613f7b565b9150614e9e83613f7b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115614ed357614ed2614dff565b5b828201905092915050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b6000614f14600183614db6565b9150614f1f82614ede565b600182019050919050565b60008190508160005260206000209050919050565b60008154614f4c81614bce565b614f568186614db6565b94506001821660008114614f715760018114614f8257614fb5565b60ff19831686528186019350614fb5565b614f8b85614f2a565b60005b83811015614fad57815481890152600182019150602081019050614f8e565b838801955050505b50505092915050565b6000614fcb828587614dc1565b9150614fd682614f07565b9150614fe28284614f3f565b9150819050949350505050565b6000614ffa82613ec0565b6150048185614db6565b9350615014818560208601613edc565b80840191505092915050565b600061502c8286614f3f565b91506150388285614fef565b91506150448284614f3f565b9150819050949350505050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b6000615087601a83614db6565b915061509282615051565b601a82019050919050565b60006150a88261507a565b91506150b48284614fef565b915081905092915050565b7f7b226e616d65223a202200000000000000000000000000000000000000000000600082015250565b60006150f5600a83614db6565b9150615100826150bf565b600a82019050919050565b7f222c20226465736372697074696f6e223a20224120646f6d61696e206f6e207460008201527f6865204d5452206e616d652073657276696365222c2022696d616765223a2022602082015250565b6000615167604083614db6565b91506151728261510b565b604082019050919050565b7f222c226c656e677468223a220000000000000000000000000000000000000000600082015250565b60006151b3600c83614db6565b91506151be8261517d565b600c82019050919050565b7f227d000000000000000000000000000000000000000000000000000000000000600082015250565b60006151ff600283614db6565b915061520a826151c9565b600282019050919050565b6000615220826150e8565b915061522c8286614fef565b91506152378261515a565b91506152438285614fef565b915061524e826151a6565b915061525a8284614fef565b9150615265826151f2565b9150819050949350505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b60006152a8601d83614db6565b91506152b382615272565b601d82019050919050565b60006152c98261529b565b91506152d58284614fef565b915081905092915050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061533c603183613ecb565b9150615347826152e0565b604082019050919050565b6000602082019050818103600083015261536b8161532f565b9050919050565b600081905092915050565b50565b600061538d600083615372565b91506153988261537d565b600082019050919050565b60006153ae82615380565b9150819050919050565b7f4661696c656420746f207769746864726177204d545200000000000000000000600082015250565b60006153ee601683613ecb565b91506153f9826153b8565b602082019050919050565b6000602082019050818103600083015261541d816153e1565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000615480602983613ecb565b915061548b82615424565b604082019050919050565b600060208201905081810360008301526154af81615473565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000615512602a83613ecb565b915061551d826154b6565b604082019050919050565b6000602082019050818103600083015261554181615505565b9050919050565b60006155548284614fef565b915081905092915050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b60006155bb603183613ecb565b91506155c68261555f565b604082019050919050565b600060208201905081810360008301526155ea816155ae565b9050919050565b60006155fd8285614fef565b91506156098284614fef565b91508190509392505050565b600061562082613f7b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561565357615652614dff565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006156c782613f7b565b91506156d283613f7b565b9250826156e2576156e161568d565b5b828204905092915050565b60006156f882613f7b565b915061570383613f7b565b92508282101561571657615715614dff565b5b828203905092915050565b600061572c82613f7b565b915061573783613f7b565b9250826157475761574661568d565b5b828206905092915050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006157ae602e83613ecb565b91506157b982615752565b604082019050919050565b600060208201905081810360008301526157dd816157a1565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000615840602c83613ecb565b915061584b826157e4565b604082019050919050565b6000602082019050818103600083015261586f81615833565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006158d2602583613ecb565b91506158dd82615876565b604082019050919050565b60006020820190508181036000830152615901816158c5565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000615964602483613ecb565b915061596f82615908565b604082019050919050565b6000602082019050818103600083015261599381615957565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006159d0601983613ecb565b91506159db8261599a565b602082019050919050565b600060208201905081810360008301526159ff816159c3565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000615a62603283613ecb565b9150615a6d82615a06565b604082019050919050565b60006020820190508181036000830152615a9181615a55565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000615af4602f83613ecb565b9150615aff82615a98565b604082019050919050565b60006020820190508181036000830152615b2381615ae7565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000615b5182615b2a565b615b5b8185615b35565b9350615b6b818560208601613edc565b615b7481613f0f565b840191505092915050565b6000608082019050615b946000830187614010565b615ba16020830186614010565b615bae6040830185614568565b8181036060830152615bc08184615b46565b905095945050505050565b600081519050615bda81613e31565b92915050565b600060208284031215615bf657615bf5613dfb565b5b6000615c0484828501615bcb565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000615c43602083613ecb565b9150615c4e82615c0d565b602082019050919050565b60006020820190508181036000830152615c7281615c36565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615caf601c83613ecb565b9150615cba82615c79565b602082019050919050565b60006020820190508181036000830152615cde81615ca2565b905091905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d7e0d6cfdc0db6de89d8b997355e6db612de60e25ec446e328b8c201c6e7615364736f6c634300080a00333c73766720786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f737667222077696474683d2232373022206865696768743d22323730222066696c6c3d226e6f6e65223e3c706174682066696c6c3d2275726c282361292220643d224d302030683237307632373048307a222f3e3c646566733e3c66696c7465722069643d22622220636f6c6f722d696e746572706f6c6174696f6e2d66696c746572733d2273524742222066696c746572556e6974733d227573657253706163654f6e55736522206865696768743d22323730222077696474683d22323730223e3c666544726f70536861646f772064783d2230222064793d22312220737464446576696174696f6e3d22322220666c6f6f642d6f7061636974793d222e323235222077696474683d223230302522206865696768743d2232303025222f3e3c2f66696c7465723e3c2f646566733e3c7061746820643d224d32342e383420312e36313541322e323520322e3235203020302031203237203068313861322e323520322e323520302030203120322e31333320322e3936314c33392e3132332032374835362e323561322e323520322e323520302030203120312e37373820332e3633326c2d33312e352034302e3561322e323520322e32352030203020312d332e3932392d322e3034346c382e3130352d32362e3333384831352e373561322e323520322e32352030203020312d322e31362d322e3838356c31312e32352d33382e32357a222066696c6c3d2223464646222f3e3c646566733e3c6c696e6561724772616469656e742069643d2261222078313d2230222079313d2230222078323d22323730222079323d2232373022206772616469656e74556e6974733d227573657253706163654f6e557365223e3c73746f702073746f702d636f6c6f723d2223333634663939222f3e3c73746f70206f66667365743d2231222073746f702d636f6c6f723d2223303130653335222073746f702d6f7061636974793d222e3939222f3e3c2f6c696e6561724772616469656e743e3c2f646566733e3c7465787420783d2233322e352220793d223233312220666f6e742d73697a653d223237222066696c6c3d2223313663346633222066696c7465723d2275726c282362292220666f6e742d66616d696c793d22506c7573204a616b617274612053616e732c44656a6156752053616e732c4e6f746f20436f6c6f7220456d6f6a692c4170706c6520436f6c6f7220456d6f6a692c73616e732d73657269662220666f6e742d7765696768743d22626f6c64223e",
        "deployedBytecode": "0x6080604052600436106101cd5760003560e01c806388828fa5116100f7578063a22cb46511610095578063e435422a11610064578063e435422a146106c3578063e985e9c514610700578063fc1d0f551461073d578063fe2c61981461077a576101cd565b8063a22cb465146105f7578063a710446814610620578063b88d4fde1461065d578063c87b56dd14610686576101cd565b80638f32d59b116100d15780638f32d59b1461053b578063913137fa1461056657806395d89b411461058f5780639791c097146105ba576101cd565b806388828fa5146104aa5780638b3f5634146104e75780638da5cb5b14610510576101cd565b80631af7a37a1161016f57806342842e0e1161013e57806342842e0e146103dc57806355bb61e0146104055780636352211e1461043057806370a082311461046d576101cd565b80631af7a37a1461034357806323b872dd1461035f578063366a6bb9146103885780633ccfd60b146103c5576101cd565b8063095ea7b3116101ab578063095ea7b3146102775780630a2494b0146102a05780630f4b163c146102dd57806317c6ab021461031a576101cd565b806301ffc9a7146101d257806306fdde031461020f578063081812fc1461023a575b600080fd5b3480156101de57600080fd5b506101f960048036038101906101f49190613e5d565b6107b7565b6040516102069190613ea5565b60405180910390f35b34801561021b57600080fd5b50610224610899565b6040516102319190613f59565b60405180910390f35b34801561024657600080fd5b50610261600480360381019061025c9190613fb1565b61092b565b60405161026e919061401f565b60405180910390f35b34801561028357600080fd5b5061029e60048036038101906102999190614066565b6109b0565b005b3480156102ac57600080fd5b506102c760048036038101906102c2919061410b565b610ac8565b6040516102d49190613f59565b60405180910390f35b3480156102e957600080fd5b5061030460048036038101906102ff919061410b565b610b81565b604051610311919061401f565b60405180910390f35b34801561032657600080fd5b50610341600480360381019061033c9190614158565b610bcf565b005b61035d600480360381019061035891906141d9565b610c0b565b005b34801561036b57600080fd5b506103866004803603810190610381919061424d565b61144b565b005b34801561039457600080fd5b506103af60048036038101906103aa91906142a0565b6114ab565b6040516103bc9190614546565b60405180910390f35b3480156103d157600080fd5b506103da611a71565b005b3480156103e857600080fd5b5061040360048036038101906103fe919061424d565b611b37565b005b34801561041157600080fd5b5061041a611b57565b6040516104279190613f59565b60405180910390f35b34801561043c57600080fd5b5061045760048036038101906104529190613fb1565b611be5565b604051610464919061401f565b60405180910390f35b34801561047957600080fd5b50610494600480360381019061048f91906142a0565b611c97565b6040516104a19190614577565b60405180910390f35b3480156104b657600080fd5b506104d160048036038101906104cc91906146c2565b611d4f565b6040516104de9190613f59565b60405180910390f35b3480156104f357600080fd5b5061050e6004803603810190610509919061470b565b611e05565b005b34801561051c57600080fd5b50610525611e6c565b604051610532919061478c565b60405180910390f35b34801561054757600080fd5b50610550611e92565b60405161055d9190613ea5565b60405180910390f35b34801561057257600080fd5b5061058d600480360381019061058891906147a7565b611eea565b005b34801561059b57600080fd5b506105a4611f27565b6040516105b19190613f59565b60405180910390f35b3480156105c657600080fd5b506105e160048036038101906105dc919061410b565b611fb9565b6040516105ee9190613ea5565b60405180910390f35b34801561060357600080fd5b5061061e6004803603810190610619919061484b565b61206d565b005b34801561062c57600080fd5b50610647600480360381019061064291906142a0565b612083565b6040516106549190614577565b60405180910390f35b34801561066957600080fd5b50610684600480360381019061067f919061492c565b6120cf565b005b34801561069257600080fd5b506106ad60048036038101906106a89190613fb1565b612131565b6040516106ba9190613f59565b60405180910390f35b3480156106cf57600080fd5b506106ea60048036038101906106e591906142a0565b612283565b6040516106f79190614a71565b60405180910390f35b34801561070c57600080fd5b5061072760048036038101906107229190614a93565b6124bf565b6040516107349190613ea5565b60405180910390f35b34801561074957600080fd5b50610764600480360381019061075f919061410b565b612553565b6040516107719190614b7d565b60405180910390f35b34801561078657600080fd5b506107a1600480360381019061079c919061410b565b612ab6565b6040516107ae9190614577565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061088257507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610892575061089182612b72565b5b9050919050565b6060600080546108a890614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546108d490614bce565b80156109215780601f106108f657610100808354040283529160200191610921565b820191906000526020600020905b81548152906001019060200180831161090457829003601f168201915b5050505050905090565b600061093682612bdc565b610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096c90614c72565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006109bb82611be5565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390614d04565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610a4b612c48565b73ffffffffffffffffffffffffffffffffffffffff161480610a7a5750610a7981610a74612c48565b6124bf565b5b610ab9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab090614d96565b60405180910390fd5b610ac38383612c50565b505050565b606060088383604051610adc929190614de6565b90815260200160405180910390206006016005018054610afb90614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054610b2790614bce565b8015610b745780601f10610b4957610100808354040283529160200191610b74565b820191906000526020600020905b815481529060010190602001808311610b5757829003601f168201915b5050505050905092915050565b600060088383604051610b95929190614de6565b908152602001604051809103902060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b818160088686604051610be3929190614de6565b90815260200160405180910390206006016005019190610c04929190613c0d565b5050505050565b6000610c17600d612d09565b9050610c21613c93565b84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050816000018190525085816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505085816040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050428160600181815250506301e1338083610cf89190614e2e565b42610d039190614e88565b81608001818152505060098054610d1990614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4590614bce565b8015610d925780601f10610d6757610100808354040283529160200191610d92565b820191906000526020600020905b815481529060010190602001808311610d7557829003601f168201915b50505050508160a001819052506040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152602001604051806020016040528060008152508152508160c00181905250610e403383612d17565b600760008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150506001900390600052602060002090600c02016000909190919091506000820151816000019080519060200190610ec5929190613d02565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005019080519060200190610f84929190613d02565b5060c08201518160060160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610ff1929190613d02565b50604082015181600201908051906020019061100e929190613d02565b50606082015181600301908051906020019061102b929190613d02565b506080820151816004019080519060200190611048929190613d02565b5060a0820151816005019080519060200190611065929190613d02565b5050505050806008868660405161107d929190614de6565b908152602001604051809103902060008201518160000190805190602001906110a7929190613d02565b5060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a0820151816005019080519060200190611166929190613d02565b5060c08201518160060160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906111d3929190613d02565b5060408201518160020190805190602001906111f0929190613d02565b50606082015181600301908051906020019061120d929190613d02565b50608082015181600401908051906020019061122a929190613d02565b5060a0820151816005019080519060200190611247929190613d02565b505050905050611257600d612b5c565b60008585600960405160200161126f93929190614fbe565b604051602081830303815290604052905060006112cf87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b905060006112dc82612eea565b905060606000600a85600b6040516020016112f993929190615020565b60405160208183030381529060405290506113138161304b565b604051602001611323919061509d565b6040516020818303038152906040529150600061136286848660405160200161134e93929190615215565b60405160208183030381529060405261304b565b905060008160405160200161137791906152be565b604051602081830303815290604052905061139289826131e3565b6113e08c8c8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505085611eea565b428c8c6040516113f1929190614de6565b60405180910390208e73ffffffffffffffffffffffffffffffffffffffff167fa28942077cbe9bc6fa65727a7d24defa6095c4ec5ffddd8da07277ea25df795860405160405180910390a450505050505050505050505050565b61145c611456612c48565b82613257565b61149b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149290615352565b60405180910390fd5b6114a6838383613335565b505050565b6060600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015611a6657838290600052602060002090600c02016040518060e001604052908160008201805461153f90614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461156b90614bce565b80156115b85780601f1061158d576101008083540402835291602001916115b8565b820191906000526020600020905b81548152906001019060200180831161159b57829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600382015481526020016004820154815260200160058201805461169190614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546116bd90614bce565b801561170a5780601f106116df5761010080835404028352916020019161170a565b820191906000526020600020905b8154815290600101906020018083116116ed57829003601f168201915b50505050508152602001600682016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461178990614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546117b590614bce565b80156118025780601f106117d757610100808354040283529160200191611802565b820191906000526020600020905b8154815290600101906020018083116117e557829003601f168201915b5050505050815260200160028201805461181b90614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461184790614bce565b80156118945780601f1061186957610100808354040283529160200191611894565b820191906000526020600020905b81548152906001019060200180831161187757829003601f168201915b505050505081526020016003820180546118ad90614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546118d990614bce565b80156119265780601f106118fb57610100808354040283529160200191611926565b820191906000526020600020905b81548152906001019060200180831161190957829003601f168201915b5050505050815260200160048201805461193f90614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461196b90614bce565b80156119b85780601f1061198d576101008083540402835291602001916119b8565b820191906000526020600020905b81548152906001019060200180831161199b57829003601f168201915b505050505081526020016005820180546119d190614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546119fd90614bce565b8015611a4a5780601f10611a1f57610100808354040283529160200191611a4a565b820191906000526020600020905b815481529060010190602001808311611a2d57829003601f168201915b505050505081525050815250508152602001906001019061150c565b505050509050919050565b611a79611e92565b611a8257600080fd5b600047905060003373ffffffffffffffffffffffffffffffffffffffff1682604051611aad906153a3565b60006040518083038185875af1925050503d8060008114611aea576040519150601f19603f3d011682016040523d82523d6000602084013e611aef565b606091505b5050905080611b33576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2a90615404565b60405180910390fd5b5050565b611b52838383604051806020016040528060008152506120cf565b505050565b60098054611b6490614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054611b9090614bce565b8015611bdd5780601f10611bb257610100808354040283529160200191611bdd565b820191906000526020600020905b815481529060010190602001808311611bc057829003601f168201915b505050505081565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611c8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c8590615496565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611d08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cff90615528565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600882604051611d619190615548565b90815260200160405180910390206006016004018054611d8090614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054611dac90614bce565b8015611df95780601f10611dce57610100808354040283529160200191611df9565b820191906000526020600020905b815481529060010190602001808311611ddc57829003601f168201915b50505050509050919050565b8060088484604051611e18929190614de6565b908152602001604051809103902060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b80600883604051611efb9190615548565b90815260200160405180910390206006016004019080519060200190611f22929190613d02565b505050565b606060018054611f3690614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054611f6290614bce565b8015611faf5780601f10611f8457610100808354040283529160200191611faf565b820191906000526020600020905b815481529060010190602001808311611f9257829003601f168201915b5050505050905090565b6000600361200a84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b101580156120655750600c61206284848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b11155b905092915050565b61207f612078612c48565b838361359c565b5050565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b6120e06120da612c48565b83613257565b61211f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161211690615352565b60405180910390fd5b61212b84848484613709565b50505050565b606061213c82612bdc565b61217b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612172906155d1565b60405180910390fd5b600060066000848152602001908152602001600020805461219b90614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546121c790614bce565b80156122145780601f106121e957610100808354040283529160200191612214565b820191906000526020600020905b8154815290600101906020018083116121f757829003601f168201915b505050505090506000612225613765565b905060008151141561223b57819250505061227e565b6000825111156122705780826040516020016122589291906155f1565b6040516020818303038152906040529250505061227e565b6122798461377c565b925050505b919050565b6060600080600090505b600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156122f85781806122e290615615565b92505080806122f090615615565b91505061228d565b5060008167ffffffffffffffff81111561231557612314614597565b5b60405190808252806020026020018201604052801561234857816020015b60608152602001906001900390816123335790505b50905060005b600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508110156124b457600760008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081815481106123e9576123e861565e565b5b90600052602060002090600c0201600001805461240590614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461243190614bce565b801561247e5780601f106124535761010080835404028352916020019161247e565b820191906000526020600020905b81548152906001019060200180831161246157829003601f168201915b50505050508282815181106124965761249561565e565b5b602002602001018190525080806124ac90615615565b91505061234e565b508092505050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61255b613c93565b6008838360405161256d929190614de6565b90815260200160405180910390206040518060e001604052908160008201805461259690614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546125c290614bce565b801561260f5780601f106125e45761010080835404028352916020019161260f565b820191906000526020600020905b8154815290600101906020018083116125f257829003601f168201915b505050505081526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016002820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160038201548152602001600482015481526020016005820180546126e890614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461271490614bce565b80156127615780601f1061273657610100808354040283529160200191612761565b820191906000526020600020905b81548152906001019060200180831161274457829003601f168201915b50505050508152602001600682016040518060c00160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546127e090614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461280c90614bce565b80156128595780601f1061282e57610100808354040283529160200191612859565b820191906000526020600020905b81548152906001019060200180831161283c57829003601f168201915b5050505050815260200160028201805461287290614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461289e90614bce565b80156128eb5780601f106128c0576101008083540402835291602001916128eb565b820191906000526020600020905b8154815290600101906020018083116128ce57829003601f168201915b5050505050815260200160038201805461290490614bce565b80601f016020809104026020016040519081016040528092919081815260200182805461293090614bce565b801561297d5780601f106129525761010080835404028352916020019161297d565b820191906000526020600020905b81548152906001019060200180831161296057829003601f168201915b5050505050815260200160048201805461299690614bce565b80601f01602080910402602001604051908101604052809291908181526020018280546129c290614bce565b8015612a0f5780601f106129e457610100808354040283529160200191612a0f565b820191906000526020600020905b8154815290600101906020018083116129f257829003601f168201915b50505050508152602001600582018054612a2890614bce565b80601f0160208091040260200160405190810160405280929190818152602001828054612a5490614bce565b8015612aa15780601f10612a7657610100808354040283529160200191612aa1565b820191906000526020600020905b815481529060010190602001808311612a8457829003601f168201915b50505050508152505081525050905092915050565b600080612b0684848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050612d35565b905060008111612b1557600080fd5b6003811415612b2f576706f05b59d3b20000915050612b56565b6004811415612b4957670429d069189e0000915050612b56565b67016345785d8a00009150505b92915050565b6001816000016000828254019250508190555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16612cc383611be5565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b612d31828260405180602001604052806000815250613823565b5050565b60008060008084519050600092505b80821015612edf576000858381518110612d6157612d6061565e565b5b602001015160f81c60f81b9050608060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612db057600183612da99190614e88565b9250612ecb565b60e060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612df257600283612deb9190614e88565b9250612eca565b60f060f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612e3457600383612e2d9190614e88565b9250612ec9565b60f8801b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612e7557600483612e6e9190614e88565b9250612ec8565b60fc60f81b817effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161015612eb757600583612eb09190614e88565b9250612ec7565b600683612ec49190614e88565b92505b5b5b5b5b508280612ed790615615565b935050612d44565b829350505050919050565b60606000821415612f32576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613046565b600082905060005b60008214612f64578080612f4d90615615565b915050600a82612f5d91906156bc565b9150612f3a565b60008167ffffffffffffffff811115612f8057612f7f614597565b5b6040519080825280601f01601f191660200182016040528015612fb25781602001600182028036833780820191505090505b5090505b6000851461303f57600182612fcb91906156ed565b9150600a85612fda9190615721565b6030612fe69190614e88565b60f81b818381518110612ffc57612ffb61565e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561303891906156bc565b9450612fb6565b8093505050505b919050565b6060600082519050600081141561307457604051806020016040528060008152509150506131de565b600060036002836130859190614e88565b61308f91906156bc565b600461309b9190614e2e565b905060006020826130ac9190614e88565b67ffffffffffffffff8111156130c5576130c4614597565b5b6040519080825280601f01601f1916602001820160405280156130f75781602001600182028036833780820191505090505b5090506000604051806060016040528060408152602001615ce6604091399050600181016020830160005b8681101561319b5760038101905062ffffff818a015116603f8160121c168401518060081b905060ff603f83600c1c1686015116810190508060081b905060ff603f8360061c1686015116810190508060081b905060ff603f831686015116810190508060e01b90508084526004840193505050613122565b5060038606600181146131b557600281146131c5576131d0565b613d3d60f01b60028303526131d0565b603d60f81b60018303525b508484525050819450505050505b919050565b6131ec82612bdc565b61322b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613222906157c4565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190613252929190613d02565b505050565b600061326282612bdc565b6132a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161329890615856565b60405180910390fd5b60006132ac83611be5565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061331b57508373ffffffffffffffffffffffffffffffffffffffff166133038461092b565b73ffffffffffffffffffffffffffffffffffffffff16145b8061332c575061332b81856124bf565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661335582611be5565b73ffffffffffffffffffffffffffffffffffffffff16146133ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016133a2906158e8565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561341b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016134129061597a565b60405180910390fd5b61342683838361387e565b613431600082612c50565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461348191906156ed565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546134d89190614e88565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4613597838383613883565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561360b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613602906159e6565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516136fc9190613ea5565b60405180910390a3505050565b613714848484613335565b61372084848484613888565b61375f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161375690615a78565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061378782612bdc565b6137c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016137bd90615b0a565b60405180910390fd5b60006137d0613765565b905060008151116137f0576040518060200160405280600081525061381b565b806137fa84612eea565b60405160200161380b9291906155f1565b6040516020818303038152906040525b915050919050565b61382d8383613a10565b61383a6000848484613888565b613879576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161387090615a78565b60405180910390fd5b505050565b505050565b505050565b60006138a98473ffffffffffffffffffffffffffffffffffffffff16613bea565b15613a03578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026138d2612c48565b8786866040518563ffffffff1660e01b81526004016138f49493929190615b7f565b6020604051808303816000875af192505050801561393057506040513d601f19601f8201168201806040525081019061392d9190615be0565b60015b6139b3573d8060008114613960576040519150601f19603f3d011682016040523d82523d6000602084013e613965565b606091505b506000815114156139ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016139a290615a78565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050613a08565b600190505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415613a80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613a7790615c59565b60405180910390fd5b613a8981612bdc565b15613ac9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401613ac090615cc5565b60405180910390fd5b613ad56000838361387e565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254613b259190614e88565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4613be660008383613883565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b828054613c1990614bce565b90600052602060002090601f016020900481019282613c3b5760008555613c82565b82601f10613c5457803560ff1916838001178555613c82565b82800160010185558215613c82579182015b82811115613c81578235825591602001919060010190613c66565b5b509050613c8f9190613d88565b5090565b6040518060e0016040528060608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160608152602001613cfc613da5565b81525090565b828054613d0e90614bce565b90600052602060002090601f016020900481019282613d305760008555613d77565b82601f10613d4957805160ff1916838001178555613d77565b82800160010185558215613d77579182015b82811115613d76578251825591602001919060010190613d5b565b5b509050613d849190613d88565b5090565b5b80821115613da1576000816000905550600101613d89565b5090565b6040518060c00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016060815260200160608152602001606081525090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613e3a81613e05565b8114613e4557600080fd5b50565b600081359050613e5781613e31565b92915050565b600060208284031215613e7357613e72613dfb565b5b6000613e8184828501613e48565b91505092915050565b60008115159050919050565b613e9f81613e8a565b82525050565b6000602082019050613eba6000830184613e96565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015613efa578082015181840152602081019050613edf565b83811115613f09576000848401525b50505050565b6000601f19601f8301169050919050565b6000613f2b82613ec0565b613f358185613ecb565b9350613f45818560208601613edc565b613f4e81613f0f565b840191505092915050565b60006020820190508181036000830152613f738184613f20565b905092915050565b6000819050919050565b613f8e81613f7b565b8114613f9957600080fd5b50565b600081359050613fab81613f85565b92915050565b600060208284031215613fc757613fc6613dfb565b5b6000613fd584828501613f9c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061400982613fde565b9050919050565b61401981613ffe565b82525050565b60006020820190506140346000830184614010565b92915050565b61404381613ffe565b811461404e57600080fd5b50565b6000813590506140608161403a565b92915050565b6000806040838503121561407d5761407c613dfb565b5b600061408b85828601614051565b925050602061409c85828601613f9c565b9150509250929050565b600080fd5b600080fd5b600080fd5b60008083601f8401126140cb576140ca6140a6565b5b8235905067ffffffffffffffff8111156140e8576140e76140ab565b5b602083019150836001820283011115614104576141036140b0565b5b9250929050565b6000806020838503121561412257614121613dfb565b5b600083013567ffffffffffffffff8111156141405761413f613e00565b5b61414c858286016140b5565b92509250509250929050565b6000806000806040858703121561417257614171613dfb565b5b600085013567ffffffffffffffff8111156141905761418f613e00565b5b61419c878288016140b5565b9450945050602085013567ffffffffffffffff8111156141bf576141be613e00565b5b6141cb878288016140b5565b925092505092959194509250565b600080600080606085870312156141f3576141f2613dfb565b5b600061420187828801614051565b945050602085013567ffffffffffffffff81111561422257614221613e00565b5b61422e878288016140b5565b9350935050604061424187828801613f9c565b91505092959194509250565b60008060006060848603121561426657614265613dfb565b5b600061427486828701614051565b935050602061428586828701614051565b925050604061429686828701613f9c565b9150509250925092565b6000602082840312156142b6576142b5613dfb565b5b60006142c484828501614051565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061431582613ec0565b61431f81856142f9565b935061432f818560208601613edc565b61433881613f0f565b840191505092915050565b61434c81613ffe565b82525050565b61435b81613f7b565b82525050565b600060c0830160008301516143796000860182614343565b5060208301518482036020860152614391828261430a565b915050604083015184820360408601526143ab828261430a565b915050606083015184820360608601526143c5828261430a565b915050608083015184820360808601526143df828261430a565b91505060a083015184820360a08601526143f9828261430a565b9150508091505092915050565b600060e0830160008301518482036000860152614423828261430a565b91505060208301516144386020860182614343565b50604083015161444b6040860182614343565b50606083015161445e6060860182614352565b5060808301516144716080860182614352565b5060a083015184820360a0860152614489828261430a565b91505060c083015184820360c08601526144a38282614361565b9150508091505092915050565b60006144bc8383614406565b905092915050565b6000602082019050919050565b60006144dc826142cd565b6144e681856142d8565b9350836020820285016144f8856142e9565b8060005b85811015614534578484038952815161451585826144b0565b9450614520836144c4565b925060208a019950506001810190506144fc565b50829750879550505050505092915050565b6000602082019050818103600083015261456081846144d1565b905092915050565b61457181613f7b565b82525050565b600060208201905061458c6000830184614568565b92915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6145cf82613f0f565b810181811067ffffffffffffffff821117156145ee576145ed614597565b5b80604052505050565b6000614601613df1565b905061460d82826145c6565b919050565b600067ffffffffffffffff82111561462d5761462c614597565b5b61463682613f0f565b9050602081019050919050565b82818337600083830152505050565b600061466561466084614612565b6145f7565b90508281526020810184848401111561468157614680614592565b5b61468c848285614643565b509392505050565b600082601f8301126146a9576146a86140a6565b5b81356146b9848260208601614652565b91505092915050565b6000602082840312156146d8576146d7613dfb565b5b600082013567ffffffffffffffff8111156146f6576146f5613e00565b5b61470284828501614694565b91505092915050565b60008060006040848603121561472457614723613dfb565b5b600084013567ffffffffffffffff81111561474257614741613e00565b5b61474e868287016140b5565b9350935050602061476186828701614051565b9150509250925092565b600061477682613fde565b9050919050565b6147868161476b565b82525050565b60006020820190506147a1600083018461477d565b92915050565b600080604083850312156147be576147bd613dfb565b5b600083013567ffffffffffffffff8111156147dc576147db613e00565b5b6147e885828601614694565b925050602083013567ffffffffffffffff81111561480957614808613e00565b5b61481585828601614694565b9150509250929050565b61482881613e8a565b811461483357600080fd5b50565b6000813590506148458161481f565b92915050565b6000806040838503121561486257614861613dfb565b5b600061487085828601614051565b925050602061488185828601614836565b9150509250929050565b600067ffffffffffffffff8211156148a6576148a5614597565b5b6148af82613f0f565b9050602081019050919050565b60006148cf6148ca8461488b565b6145f7565b9050828152602081018484840111156148eb576148ea614592565b5b6148f6848285614643565b509392505050565b600082601f830112614913576149126140a6565b5b81356149238482602086016148bc565b91505092915050565b6000806000806080858703121561494657614945613dfb565b5b600061495487828801614051565b945050602061496587828801614051565b935050604061497687828801613f9c565b925050606085013567ffffffffffffffff81111561499757614996613e00565b5b6149a3878288016148fe565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b60006149e7838361430a565b905092915050565b6000602082019050919050565b6000614a07826149af565b614a1181856149ba565b935083602082028501614a23856149cb565b8060005b85811015614a5f5784840389528151614a4085826149db565b9450614a4b836149ef565b925060208a01995050600181019050614a27565b50829750879550505050505092915050565b60006020820190508181036000830152614a8b81846149fc565b905092915050565b60008060408385031215614aaa57614aa9613dfb565b5b6000614ab885828601614051565b9250506020614ac985828601614051565b9150509250929050565b600060e0830160008301518482036000860152614af0828261430a565b9150506020830151614b056020860182614343565b506040830151614b186040860182614343565b506060830151614b2b6060860182614352565b506080830151614b3e6080860182614352565b5060a083015184820360a0860152614b56828261430a565b91505060c083015184820360c0860152614b708282614361565b9150508091505092915050565b60006020820190508181036000830152614b978184614ad3565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680614be657607f821691505b60208210811415614bfa57614bf9614b9f565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000614c5c602c83613ecb565b9150614c6782614c00565b604082019050919050565b60006020820190508181036000830152614c8b81614c4f565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000614cee602183613ecb565b9150614cf982614c92565b604082019050919050565b60006020820190508181036000830152614d1d81614ce1565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b6000614d80603883613ecb565b9150614d8b82614d24565b604082019050919050565b60006020820190508181036000830152614daf81614d73565b9050919050565b600081905092915050565b6000614dcd8385614db6565b9350614dda838584614643565b82840190509392505050565b6000614df3828486614dc1565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000614e3982613f7b565b9150614e4483613f7b565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615614e7d57614e7c614dff565b5b828202905092915050565b6000614e9382613f7b565b9150614e9e83613f7b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115614ed357614ed2614dff565b5b828201905092915050565b7f2e00000000000000000000000000000000000000000000000000000000000000600082015250565b6000614f14600183614db6565b9150614f1f82614ede565b600182019050919050565b60008190508160005260206000209050919050565b60008154614f4c81614bce565b614f568186614db6565b94506001821660008114614f715760018114614f8257614fb5565b60ff19831686528186019350614fb5565b614f8b85614f2a565b60005b83811015614fad57815481890152600182019150602081019050614f8e565b838801955050505b50505092915050565b6000614fcb828587614dc1565b9150614fd682614f07565b9150614fe28284614f3f565b9150819050949350505050565b6000614ffa82613ec0565b6150048185614db6565b9350615014818560208601613edc565b80840191505092915050565b600061502c8286614f3f565b91506150388285614fef565b91506150448284614f3f565b9150819050949350505050565b7f646174613a696d6167652f7376672b786d6c3b6261736536342c000000000000600082015250565b6000615087601a83614db6565b915061509282615051565b601a82019050919050565b60006150a88261507a565b91506150b48284614fef565b915081905092915050565b7f7b226e616d65223a202200000000000000000000000000000000000000000000600082015250565b60006150f5600a83614db6565b9150615100826150bf565b600a82019050919050565b7f222c20226465736372697074696f6e223a20224120646f6d61696e206f6e207460008201527f6865204d5452206e616d652073657276696365222c2022696d616765223a2022602082015250565b6000615167604083614db6565b91506151728261510b565b604082019050919050565b7f222c226c656e677468223a220000000000000000000000000000000000000000600082015250565b60006151b3600c83614db6565b91506151be8261517d565b600c82019050919050565b7f227d000000000000000000000000000000000000000000000000000000000000600082015250565b60006151ff600283614db6565b915061520a826151c9565b600282019050919050565b6000615220826150e8565b915061522c8286614fef565b91506152378261515a565b91506152438285614fef565b915061524e826151a6565b915061525a8284614fef565b9150615265826151f2565b9150819050949350505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000600082015250565b60006152a8601d83614db6565b91506152b382615272565b601d82019050919050565b60006152c98261529b565b91506152d58284614fef565b915081905092915050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b600061533c603183613ecb565b9150615347826152e0565b604082019050919050565b6000602082019050818103600083015261536b8161532f565b9050919050565b600081905092915050565b50565b600061538d600083615372565b91506153988261537d565b600082019050919050565b60006153ae82615380565b9150819050919050565b7f4661696c656420746f207769746864726177204d545200000000000000000000600082015250565b60006153ee601683613ecb565b91506153f9826153b8565b602082019050919050565b6000602082019050818103600083015261541d816153e1565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b6000615480602983613ecb565b915061548b82615424565b604082019050919050565b600060208201905081810360008301526154af81615473565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b6000615512602a83613ecb565b915061551d826154b6565b604082019050919050565b6000602082019050818103600083015261554181615505565b9050919050565b60006155548284614fef565b915081905092915050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b60006155bb603183613ecb565b91506155c68261555f565b604082019050919050565b600060208201905081810360008301526155ea816155ae565b9050919050565b60006155fd8285614fef565b91506156098284614fef565b91508190509392505050565b600061562082613f7b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561565357615652614dff565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006156c782613f7b565b91506156d283613f7b565b9250826156e2576156e161568d565b5b828204905092915050565b60006156f882613f7b565b915061570383613f7b565b92508282101561571657615715614dff565b5b828203905092915050565b600061572c82613f7b565b915061573783613f7b565b9250826157475761574661568d565b5b828206905092915050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006157ae602e83613ecb565b91506157b982615752565b604082019050919050565b600060208201905081810360008301526157dd816157a1565b9050919050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000615840602c83613ecb565b915061584b826157e4565b604082019050919050565b6000602082019050818103600083015261586f81615833565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006158d2602583613ecb565b91506158dd82615876565b604082019050919050565b60006020820190508181036000830152615901816158c5565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000615964602483613ecb565b915061596f82615908565b604082019050919050565b6000602082019050818103600083015261599381615957565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006159d0601983613ecb565b91506159db8261599a565b602082019050919050565b600060208201905081810360008301526159ff816159c3565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000615a62603283613ecb565b9150615a6d82615a06565b604082019050919050565b60006020820190508181036000830152615a9181615a55565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b6000615af4602f83613ecb565b9150615aff82615a98565b604082019050919050565b60006020820190508181036000830152615b2381615ae7565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000615b5182615b2a565b615b5b8185615b35565b9350615b6b818560208601613edc565b615b7481613f0f565b840191505092915050565b6000608082019050615b946000830187614010565b615ba16020830186614010565b615bae6040830185614568565b8181036060830152615bc08184615b46565b905095945050505050565b600081519050615bda81613e31565b92915050565b600060208284031215615bf657615bf5613dfb565b5b6000615c0484828501615bcb565b91505092915050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000615c43602083613ecb565b9150615c4e82615c0d565b602082019050919050565b60006020820190508181036000830152615c7281615c36565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000615caf601c83613ecb565b9150615cba82615c79565b602082019050919050565b60006020820190508181036000830152615cde81615ca2565b905091905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220d7e0d6cfdc0db6de89d8b997355e6db612de60e25ec446e328b8c201c6e7615364736f6c634300080a0033",
        "linkReferences": {},
        "deployedLinkReferences": {}
    },
    RPC_URL: "https://rpctest.meter.io",
    BLOCK_EXPLORER_URL: "https://scan-warringstakes.meter.io/"
}