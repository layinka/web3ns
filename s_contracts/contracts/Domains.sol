// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import { StringUtils } from "./libraries/StringUtils.sol";
import { Base64 } from "./libraries/Base64.sol";
import "hardhat/console.sol";

contract XNS is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string public tld;
    string svgPartOne = '<svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" fill="none"><path fill="url(#a)" d="M0 0h270v270H0z"/><defs><filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity=".225" width="200%" height="200%"/></filter></defs><path d="M24.84 1.615A2.25 2.25 0 0 1 27 0h18a2.25 2.25 0 0 1 2.133 2.961L39.123 27H56.25a2.25 2.25 0 0 1 1.778 3.632l-31.5 40.5a2.25 2.25 0 0 1-3.929-2.044l8.105-26.338H15.75a2.25 2.25 0 0 1-2.16-2.885l11.25-38.25z" fill="#FFF"/><defs><linearGradient id="a" x1="0" y1="0" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#364f99"/><stop offset="1" stop-color="#010e35" stop-opacity=".99"/></linearGradient></defs><text x="32.5" y="231" font-size="27" fill="#16c4f3" filter="url(#b)" font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif" font-weight="bold">';
    string svgPartTwo = '</text></svg>';

    mapping(string => address) public domains;
    mapping(string => string) public records;

    constructor(string memory _tld) payable ERC721("Meteor Name Service", "MNS") {
        tld = _tld;
        console.log("%s domain name service deployed", _tld);
    }

    // Change price of a domain based on length
    function price(string calldata name) public pure returns(uint) {
        uint length = StringUtils.strlen(name);
        require(length > 0);

        if (length == 3) {
            return 5 * 10**16; // 0.05 Token
        } else if (length == 4) {
            return 3 * 10**16;
        } else {
            return 1 * 10**16;
        }
    }

    // A function that adds a registrant's name to the service's mapping of domains
    function register(string calldata name) public payable {
        // Check that the name is unregistered
        require(domains[name] == address(0));        
        
        uint _price = price(name);
        // Check if enough TOKEN was paid in the transaction
        require(msg.value >= _price, "Not enough TOKEN paid");

        // Combine the name with the TLD
        string memory _name = string(abi.encodePacked(name, ".", tld));
        // Create the SVG image for the NFT using the above name
        string memory finalSvg = string(abi.encodePacked(svgPartOne, _name, svgPartTwo));

        uint256 newRecordId = _tokenIds.current();
        uint256 length = StringUtils.strlen(name);
        string memory strLen = Strings.toString(length);
        console.log("Registering %s.%s on the contract with tokenID %d", name, tld, newRecordId);

        // Create the onchain JSON metadata of the naming service NFT.
        string memory json = Base64.encode(
            abi.encodePacked(
                '{"name": "',
                _name,
                '", "description": "A domain on the Meteor name service", "image": "data:image/svg+xml;base64,',
                Base64.encode(bytes(finalSvg)),
                '", "length":"',
                strLen,
                '"}'
            )
        );

        string memory finalTokenURI = string(abi.encodePacked("data:application/json;base64,", json));

        console.log("\n--------------------------------------------------------");
        console.log("Final tokenURI", finalTokenURI);
        console.log("--------------------------------------------------------\n");


        _safeMint(msg.sender, newRecordId);
        _setTokenURI(newRecordId, finalTokenURI);
        domains[name] = msg.sender;
        console.log("%s has registered domain %s!", msg.sender, name);
    }

    // Get the domain owner's chain address by domain name
    function getOwner(string calldata name) public view returns (address) {
        return domains[name];
    }

    function setRecord(string calldata name, string calldata record) public {
        // Check that the owner is the transaction sender
        require(domains[name] == msg.sender);
        records[name] = record;
    }

    function getRecord(string calldata name) public view returns (string memory) {
        return records[name];
    }
}