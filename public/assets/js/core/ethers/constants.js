export const contractAddress = "0x6c8639F37F72b170D5DfeBA146EfC10Ae2Cc4ebB";
export const abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "VotingNew__ElectionExists",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__ElectionNotExists",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__ElectionNotRunning",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__NoCandidate",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__NoPosition",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__NotVerifiedVoter",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__NotVoter",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__OnlyAdmin",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__PositionAlreadyExists",
        type: "error",
    },
    {
        inputs: [],
        name: "VotingNew__UnverifiedCandidate",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "addAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "candidateList",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "checkAdmin",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
            {
                internalType: "string",
                name: "position",
                type: "string",
            },
        ],
        name: "createElection",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
        ],
        name: "createPosition",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "electionsList",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
        ],
        name: "endElection",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllCandidates",
        outputs: [
            {
                internalType: "address[]",
                name: "allCandidatesAddress",
                type: "address[]",
            },
            {
                internalType: "string[]",
                name: "allCandidatesName",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllElections",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllPostions",
        outputs: [
            {
                internalType: "string[]",
                name: "",
                type: "string[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllVoters",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
        ],
        name: "getCandidate",
        outputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "details",
                        type: "string",
                    },
                    {
                        components: [
                            {
                                internalType: "string",
                                name: "name",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "details",
                                type: "string",
                            },
                            {
                                internalType: "address",
                                name: "person",
                                type: "address",
                            },
                            {
                                internalType: "bool",
                                name: "exists",
                                type: "bool",
                            },
                        ],
                        internalType: "struct VotingNew.Position",
                        name: "position",
                        type: "tuple",
                    },
                    {
                        internalType: "enum VotingNew.State",
                        name: "state",
                        type: "uint8",
                    },
                    {
                        internalType: "address[]",
                        name: "voted",
                        type: "address[]",
                    },
                    {
                        internalType: "bool",
                        name: "exists",
                        type: "bool",
                    },
                    {
                        internalType: "address[]",
                        name: "candidates",
                        type: "address[]",
                    },
                ],
                internalType: "struct VotingNew.Election[]",
                name: "election",
                type: "tuple[]",
            },
            {
                internalType: "bool",
                name: "exists",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "getElection",
        outputs: [
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
            {
                internalType: "enum VotingNew.State",
                name: "state",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
        ],
        name: "getIsCandidateVerified",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "getPosition",
        outputs: [
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
            {
                internalType: "address",
                name: "person",
                type: "address",
            },
            {
                internalType: "bool",
                name: "exists",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
        ],
        name: "getVotes",
        outputs: [
            {
                internalType: "address[]",
                name: "candidateAddr",
                type: "address[]",
            },
            {
                internalType: "string[]",
                name: "candidateName",
                type: "string[]",
            },
            {
                internalType: "uint256[]",
                name: "voteCount",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "positionsList",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "details",
                type: "string",
            },
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
        ],
        name: "requestCandidancy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "requestVoter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
        ],
        name: "startElection",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "bool",
                name: "isVerified",
                type: "bool",
            },
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
        ],
        name: "verifyCandidancy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_address",
                type: "address",
            },
            {
                internalType: "bool",
                name: "isVerified",
                type: "bool",
            },
        ],
        name: "verifyVoter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "election",
                type: "string",
            },
            {
                internalType: "address",
                name: "candidate",
                type: "address",
            },
        ],
        name: "vote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
