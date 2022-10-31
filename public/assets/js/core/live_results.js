import { ethers } from "./ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "./ethers/constants.js";
import { States } from "./ethers/state.js";

const elections = document.querySelector("#elections");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

getElections();

async function getElections() {
    var allElections = await contract.getAllElections();
    allElections.forEach(async (election) => {
        var electionInfo = await contract.getElection(election);
        var votes = await contract.getVotes(election);
        let card = document.createElement("div");

        var candidateNameValue = votes["candidateName"];
        var voteCountValue = votes["voteCount"];

        card.classList.add("card", "m-2");
        card.style.width = "22rem";
        // card.style.cursor = "pointer";
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

        let candidates = document.createElement("div");
        candidates.classList.add("d-flex", "flex-column", "candidates");
        let candidateTitle = document.createElement("p");
        candidateTitle.classList.add("pe-2");
        candidateTitle.innerHTML = "Candidates:";
        candidates.appendChild(candidateTitle);

        for (let i = 0; i < candidateNameValue.length; i++) {
            let candidate = document.createElement("div");
            candidate.classList.add("d-flex");
            let candidateName = document.createElement("p");
            candidateName.innerHTML = `${candidateNameValue[i]}:`;
            candidateName.classList.add("text-primary");
            let voteCount = document.createElement("p");
            voteCount.classList.add("ms-auto", "text-info");
            voteCount.innerHTML = voteCountValue[i];
            candidate.appendChild(candidateName);
            candidate.appendChild(voteCount);

            candidates.appendChild(candidate);
        }

        card_body.appendChild(card_title);
        card_body.appendChild(details);
        card_body.appendChild(states);
        card_body.appendChild(candidates);

        card.appendChild(card_body);

        elections.appendChild(card);
    });
}

// <div class="d-flex flex-column" id="election-candidate">
//     <p class="pe-2"> Candidates: </p>
//     {{!-- <button class="btn btn-info mb-3">Padme Amadala</button>
//     <button class="btn btn-info">Yoda</button> --}}
// </div>
