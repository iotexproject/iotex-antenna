pragma solidity ^0.4.23;

contract SimpleStorage {
    uint storedData;

    constructor(uint32 _x) public {
        storedData = _x;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}