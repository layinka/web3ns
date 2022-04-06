// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import { StringUtils } from "./libraries/StringUtils.sol";
import { Base64 } from "./libraries/Base64.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// import "hardhat/console.sol";

struct Record {
        address ethAddress;
        string email;
        string desc;
        string url;
        string avatar;
        string discord;
}

struct Domain {
        string label;
        address registrant;
        address controller;
        uint256 registrationDate;
        uint expiry;
        string parentTLD;
        Record records;
}

contract DomainRegistrar is ERC721URIStorage {
    mapping (address => Domain[]) domains;
    mapping (string => Domain) domainNames;

    string public _tld = "mtr";
    string svgPartOne = '<svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" fill="none"><path fill="url(#a)" d="M0 0h270v270H0z"/><defs><filter id="b" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="270" width="270"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-opacity=".225" width="200%" height="200%"/></filter></defs><path d="M24.84 1.615A2.25 2.25 0 0 1 27 0h18a2.25 2.25 0 0 1 2.133 2.961L39.123 27H56.25a2.25 2.25 0 0 1 1.778 3.632l-31.5 40.5a2.25 2.25 0 0 1-3.929-2.044l8.105-26.338H15.75a2.25 2.25 0 0 1-2.16-2.885l11.25-38.25z" fill="#FFF"/><defs><linearGradient id="a" x1="0" y1="0" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stop-color="#364f99"/><stop offset="1" stop-color="#010e35" stop-opacity=".99"/></linearGradient></defs><text x="32.5" y="231" font-size="27" fill="#16c4f3" filter="url(#b)" font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif" font-weight="bold">';
    string svgPartTwo = '</text></svg>';

    address payable public owner;

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event NewDomainRegistered(
        address indexed domainRegistrant,
        string indexed domainNameRegistered,
        uint256 indexed time
    );

    constructor() payable ERC721("Meter Naming Service", "MNS") {
        owner = payable(msg.sender);
        _tokenIds.increment();
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }

    modifier onlyOwner() {
        require(isOwner());
        _;
    }

    function withdraw() public onlyOwner {
        uint amount = address(this).balance;
        
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Failed to withdraw MTR");
    } 

    function valid(string calldata name) public pure returns(bool) {
        return StringUtils.strlen(name) >= 3 && StringUtils.strlen(name) <= 12;
    }

    function price(string calldata name) public pure returns(uint) {
        uint len = StringUtils.strlen(name);
        require(len > 0);
        if (len == 3) {
          return 5 * 10**17; // 5 MTR = 5 000 000 000 000 000 000 (18 decimals).
        } else if (len == 4) {
	        return 3 * 10**17; // To charge smaller amounts, reduce the decimals. This is 0.3
        } else {
	        return 1 * 10**17;
        }
    }

    /**
    * @dev Add mint function to make ERC721-compatible
    */
    function registerDomain(address _registrant, string calldata _name, uint yearsRegistered) public payable {

       // uint256 _price = this.price(_name);
       // console.log(_price, msg.value);
       // require(msg.value >= _price, "Not enough MTR paid");

        uint256 newDomainId = _tokenIds.current();

        Domain memory _domain; 

        _domain.label = _name;
        _domain.registrant = _registrant;
        _domain.controller = _registrant;
        _domain.registrationDate = block.timestamp;
        _domain.expiry = block.timestamp + yearsRegistered * 365 days;
        _domain.parentTLD = _tld;
        _domain.records = Record(address(0), "", "", "", "", "");

        _safeMint(msg.sender, newDomainId);
        domains[_registrant].push(_domain);
        domainNames[_name] = _domain;
    
        _tokenIds.increment(); 

        string memory cName = string(abi.encodePacked(_name, ".", _tld));
        uint256 length = StringUtils.strlen(_name);
        string memory strLen = Strings.toString(length);
        string memory avatar;
        string memory finalSvg = string(abi.encodePacked(svgPartOne, cName, svgPartTwo));
        avatar = string(abi.encodePacked('data:image/svg+xml;base64,',Base64.encode(bytes(finalSvg))));

        string memory json = Base64.encode(
            bytes(
                string(
                abi.encodePacked(
                    '{"name": "',
                    cName,
                    '", "description": "A domain on the MTR name service", "image": "',
                    avatar,
                    '","length":"',
                    strLen,
                    '"}'
                )
                )
            )
        );

        string memory finalTokenURI = string(abi.encodePacked("data:application/json;base64,", json));
        _setTokenURI(newDomainId, finalTokenURI);
        setAvatarForDomainLabel(_name, avatar);

        emit NewDomainRegistered(_registrant, _name, block.timestamp);
    }


    function getAllDomainsByAddress(address _registrant) public view returns (Domain[] memory) {
        return domains[_registrant];
    }
    
    function getNumberofDomainsByAddress(address _registrant) public view returns (uint256) {
       return domains[_registrant].length;
    }

    function getAllDomainLabelsByAddress(address _registrant) public view returns (string[] memory) {
        
        uint256 domainCount;

        for (uint i = 0; i < domains[_registrant].length; i++) {
            domainCount++;
        }

        string[] memory domainlabels = new string[](domainCount);

        for (uint i = 0; i < domains[_registrant].length; i++) {
            domainlabels[i] = domains[_registrant][i].label;
        }

        return domainlabels;
    }

    function getDomainInfoByName(string calldata _name) public view returns (Domain memory) {
        return domainNames[_name];
    }

    // Line-by-line returns

    function setControllerForDomainLabel(string calldata _name, address newController) public {
        domainNames[_name].controller = newController;
    }

    function getControllerFromDomainLabel(string calldata _name) public view returns (address) {
        return domainNames[_name].controller;
    }

    function setAvatarForDomainLabel(string memory _name, string memory avatarURL) public {
        domainNames[_name].records.avatar = avatarURL;
    }

    function getAvatarFromDomainLabel(string memory _name) public view returns (string memory) {
        return domainNames[_name].records.avatar;
    }
    
    function setDiscordTagForDomainLabel(string calldata _name, string calldata discordTag) public {
        domainNames[_name].records.discord = discordTag;
    }

    function getDiscordTagFromDomainLabel(string calldata _name) public view returns (string memory) {
        return domainNames[_name].records.discord;
    }

}