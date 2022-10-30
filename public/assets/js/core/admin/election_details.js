import { ethers } from "../ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "../ethers/constants.js";
import { States } from "../ethers/state.js";

const elections = document.querySelector("#elections");

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

        card_body.appendChild(card_title);
        card_body.appendChild(details);
        card_body.appendChild(states);

        if (electionInfo["state"] == 0) {
            let start = document.createElement("div");
            start.classList.add("d-flex");
            let temp = document.createElement("p");
            let startBtn = document.createElement("button");
            startBtn.classList.add("btn", "btn-success", "ms-auto");
            startBtn.innerHTML = "Start Election";
            startBtn.onclick = function () {
                startElection(election);
            };
            start.appendChild(temp);
            start.appendChild(startBtn);
            card_body.appendChild(start);
        } else if (electionInfo["state"] == 1) {
            let end = document.createElement("div");
            end.classList.add("d-flex");
            let temp = document.createElement("p");
            let endBtn = document.createElement("button");
            endBtn.classList.add("btn", "btn-danger", "ms-auto");
            endBtn.innerHTML = "End Election";
            endBtn.onclick = function () {
                endElection(election);
            };
            end.appendChild(temp);
            end.appendChild(endBtn);
            card_body.appendChild(end);
        }

        card.appendChild(card_body);

        elections.appendChild(card);
    });
}

async function startElection(election) {
    await contract.startElection(election);
    window.location.href = "/admin/election-details";
}

async function endElection(election) {
    await contract.endElection(election);
    window.location.href = "/admin/election-details";
}
