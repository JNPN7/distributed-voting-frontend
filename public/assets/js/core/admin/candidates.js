import { ethers } from "../ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "../ethers/constants.js";

const unVerifiedCandidate = document.querySelector("#unverified-candidate");
const candidateElection = document.querySelector("#candidate-election");
const modal = document.querySelector("#candidate");
const modalTitle = modal.querySelector("#candidate-label");
const modalCandidateName = modal.querySelector("#candidate-name");
const modalCandidateDetails = modal.querySelector("#candidate-details");
const modalFooter = modal.querySelector("#candidate-footer");
const election = modal.querySelector("#election");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

getUnVerifiedCandidates();
getCandiateWithElection();

async function getUnVerifiedCandidates() {
    var allUnVerifiedCandidates = await contract.getAllUnVerifiedCandidates();

    var candidateName = allUnVerifiedCandidates["candidateName"];
    var candidateAddress = allUnVerifiedCandidates["candidateAddress"];
    for (let i = 0; i < candidateName.length; i++) {
        if (candidateAddress[i] == 0) return;
        var li = document.createElement("button");
        li.type = "button";
        li.setAttribute("data-bs-toggle", "modal");
        li.setAttribute("data-bs-target", "#candidate");
        li.innerHTML = candidateName[i];
        li.id = candidateAddress[i];
        li.classList.add("list-group-item");
        unVerifiedCandidate.appendChild(li);
        li.onclick = function () {
            updateModal(candidateAddress[i]);
        };
    }
}

async function getCandiateWithElection() {
    var allElection = await contract.getAllElections();

    allElection.forEach(async (election) => {
        var elec = document.createElement("div");
        elec.classList.add("p-2");
        var elec_name = document.createElement("h5");
        elec_name.innerHTML = election;
        elec.appendChild(elec_name);
        candidateElection.appendChild(elec);
        
        var candidates = await contract.getVerifiedCandidatesOfElection(election);
        console.log(candidates)
        var candidateName = candidates["candidateName"];
        var candidateAddress = candidates["candidatesAddress"];
        for (let i = 0; i < candidateName.length; i++) {
            if (candidateAddress[i] == 0) return;
            var li = document.createElement("button");
            li.type = "button";
            li.setAttribute("data-bs-toggle", "modal");
            li.setAttribute("data-bs-target", "#candidate");
            li.innerHTML = candidateName[i];
            li.id = candidateAddress[i];
            li.classList.add("list-group-item");
            elec.appendChild(li);
            li.onclick = function () {
                updateModal(candidateAddress[i]);
            };
        }
    });
}

async function updateModal(_address) {
    document.querySelectorAll('.elec').forEach((elem) => elem.remove())

    modalTitle.innerHTML = _address;
    modalCandidateName.innerHTML = "...";
    modalCandidateDetails.innerHTML = "...";

    var candidateInfo = await contract.getCandidate(_address);
    modalCandidateName.innerHTML = candidateInfo["name"];
    modalCandidateDetails.innerHTML = candidateInfo["details"];

    var elections = candidateInfo["election"];
    for (let i = 0; i < elections.length; i++) {
        var parentDiv = document.createElement("div");
        parentDiv.classList.add("d-flex", "pb-1", "justify-content-between", "elec");

        var electionText = document.createElement("div");
        electionText.classList.add("d-flex");
        var electionLabel = document.createElement("p");
        electionLabel.classList.add("pe-2");
        electionLabel.innerHTML = "Election:";
        var electionName = document.createElement("p");
        electionName.classList.add("text-dark");
        electionName.innerHTML = elections[i]["name"];

        electionText.appendChild(electionLabel);
        electionText.appendChild(electionName);

        parentDiv.appendChild(electionText);

        if (candidateInfo["verified"][i] != true) {
            var verifyBtn = document.createElement("button");
            verifyBtn.classList.add("btn", "btn-success");
            verifyBtn.innerHTML = "Verify";
            verifyBtn.onclick = function () {
                verifyCandidancy(_address, true, elections[i]["name"]);
            };
            parentDiv.appendChild(verifyBtn);
        }

        election.appendChild(parentDiv);
    }
}

async function verifyCandidancy(_address, isVerified, electionName) {
    await contract.verifyCandidancy(_address, isVerified, electionName);
    window.location.href = "/admin/candidates";
}
