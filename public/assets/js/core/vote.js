import { ethers } from "./ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "./ethers/constants.js";
import { States } from "./ethers/state.js";

const elections = document.querySelector("#elections");
const modalElectionName = document.querySelector("#election-name");
const modalElectionDetails = document.querySelector("#election-details");
const modalElectionCandidate = document.querySelector("#election-candidate");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

getElections();

async function getElections() {
    var allElections = await contract.getAllElections();
    allElections.forEach(async (election) => {
        var electionInfo = await contract.getElection(election);
        let card = document.createElement("div");

        card.classList.add("card", "m-2");
        card.style.width = "22rem";
        let card_body = document.createElement("div");
        card_body.classList.add("card-body");

        let card_title = document.createElement("h5");
        card_title.innerHTML = election;

        let details = document.createElement("div");
        details.classList.add("d-flex", "m-0");
        let detailLabel = document.createElement("p");
        detailLabel.classList.add("pe-1", "m-1");
        detailLabel.innerHTML = "Details:";
        let detail = document.createElement("p");
        detail.classList.add("m-1", "text-dark");
        detail.innerHTML = electionInfo["details"];
        details.appendChild(detailLabel);
        details.appendChild(detail);

        let states = document.createElement("div");
        states.classList.add("d-flex", "m-0");
        let stateLabel = document.createElement("p");
        stateLabel.classList.add("pe-1", "m-1");
        stateLabel.innerHTML = "State:";
        let state = document.createElement("p");
        state.classList.add("m-1", "text-dark");
        state.innerHTML = States[electionInfo["state"]];
        states.appendChild(stateLabel);
        states.appendChild(state);

        card_body.appendChild(card_title);
        card_body.appendChild(details);
        card_body.appendChild(states);

        if (electionInfo["state"] == 1) {
            let vote = document.createElement("div");
            vote.classList.add("d-flex");
            let temp = document.createElement("p");
            let voteBtn = document.createElement("button");
            voteBtn.classList.add("btn", "btn-success", "ms-auto");
            voteBtn.setAttribute("data-bs-toggle", "modal");
            voteBtn.setAttribute("data-bs-target", "#election");
            voteBtn.innerHTML = "Vote";
            voteBtn.onclick = function () {
                updateModal(election, electionInfo);
            };
            vote.appendChild(temp);
            vote.appendChild(voteBtn);
            card_body.appendChild(vote);
        }

        card.appendChild(card_body);

        elections.appendChild(card);
    });
}

async function updateModal(election, electionInfo) {
    document.querySelectorAll(".candidate").forEach((elem) => elem.remove());

    modalElectionName.innerHTML = election;
    modalElectionDetails.innerHTML = electionInfo["details"];

    var candidates = await contract.getVerifiedCandidatesOfElection(election);
    var candidateName = candidates["candidateName"];
    var candidateAddress = candidates["candidatesAddress"];

    for (let i = 0; i < candidateName.length; i++) {
        let voteBtn = document.createElement("button");
        voteBtn.classList.add("btn", "btn-info", "mb-3", "candidate");
        voteBtn.innerHTML = candidateName[i];
        voteBtn.onclick = function () {
            vote(election, candidateAddress[i]);
        };
        modalElectionCandidate.appendChild(voteBtn);
    }
}

async function vote(election, candidate) {
    await contract.vote(election, candidate);
    window.location.href = "/live-results";
}
