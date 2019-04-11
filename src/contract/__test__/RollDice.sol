pragma solidity ^0.4.23;

contract RollDice {
  function rollAward(string requestId, address target) public payable returns (uint256) {
    uint256 rollVal = roll(requestId);
    target.transfer(rollVal);
    return rollVal;
  }

  function roll(string requestId) public view returns (uint256) {
    return (bytesToUint(sha256(abi.encodePacked(block.difficulty, requestId, block.timestamp))) % 5) + 1;
  }

  function bytesToUint(bytes32 b) private pure returns (uint256) {
    uint256 number;
    for (uint i = 0; i < b.length; i++) {
      number = number + uint(b[i]) * (2 ** (8 * (b.length - (i + 1))));
    }
    return number;
  }

  event Deposit(
    address indexed _from,
    uint _value
  );

  function deposit() public payable {
    emit Deposit(msg.sender, msg.value);
  }
}
