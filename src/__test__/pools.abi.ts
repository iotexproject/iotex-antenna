export const ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "player",
        type: "address"
      },
      {
        name: "val",
        type: "uint256"
      }
    ],
    name: "sendReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "player",
        type: "address"
      }
    ],
    name: "finishattempt",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "kill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "user",
        type: "address"
      },
      {
        name: "attempt",
        type: "uint32"
      },
      {
        name: "status",
        type: "uint32"
      }
    ],
    name: "autoclear",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "otherMinedAddress",
        type: "address"
      }
    ],
    name: "setOtherminedAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "set_ticket_value",
        type: "uint256"
      }
    ],
    name: "setTicketValue",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "authstring",
        type: "string"
      }
    ],
    name: "auth",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "usrAddr",
        type: "address"
      },
      {
        name: "val",
        type: "uint256"
      },
      {
        name: "tmev_val",
        type: "uint256"
      }
    ],
    name: "cashOutTron",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "userpools",
    outputs: [
      {
        name: "attempt",
        type: "uint32"
      },
      {
        name: "authstring",
        type: "string"
      },
      {
        name: "status",
        type: "uint32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];
