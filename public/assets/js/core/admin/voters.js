import { ethers } from "../ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "../ethers/constants.js";

const verifiedVoters = document.querySelector("#verified-voters");
const unVerifiedVoters = document.querySelector("#unverified-voters");
const modal = document.querySelector("#voter");
const modalTitle = modal.querySelector("#voter-label");
const modalVoterName = modal.querySelector("#voter-name");
const modalVoterVerified = modal.querySelector("#voter-verified");
const modalFooter = modal.querySelector("#voter-footer");

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, abi, signer);

getAllVerifiedVoters();
getAllUnVerifiedVoters();

async function getAllVerifiedVoters() {
    var allVerfiedVoters = await contract.getVerifiedVoters();
    // if (allVerfiedVoters.length == 0) {
    //     var p = document.createElement("p");
    //     p.innerHTML = "Is empty";
    //     verifiedVoters.appendChild(p);
    // }

    allVerfiedVoters.forEach((voter) => {
        if (voter == 0) return;
        var li = document.createElement("button");
        li.type = "button";
        li.setAttribute("data-bs-toggle", "modal");
        li.setAttribute("data-bs-target", "#voter");
        li.innerHTML = voter;
        li.id = voter;
        li.classList.add("list-group-item");
        verifiedVoters.appendChild(li);
        li.onclick = function () {
            updateModal(voter);
        };
    });
}

async function getAllUnVerifiedVoters() {
    var allUnVerifiedVoters = await contract.getUnVerifiedVoters();
    // if (allUnVerifiedVoters.length == 0) {
    //     var p = document.createElement("p");
    //     p.innerHTML = "Is empty";
    //     unVerifiedVoters.appendChild(p);
    // }

    allUnVerifiedVoters.forEach((voter) => {
        if (voter == 0) return;
        var li = document.createElement("button");
        li.type = "button";
        li.setAttribute("data-bs-toggle", "modal");
        li.setAttribute("data-bs-target", "#voter");
        li.innerHTML = voter;
        li.id = voter;
        li.classList.add("list-group-item");
        unVerifiedVoters.appendChild(li);
        li.onclick = function () {
            updateModal(voter);
        };
    });
}

async function updateModal(voter) {
    document.querySelectorAll('.verify').forEach((elem) => elem.remove())

    modalTitle.innerHTML = voter;
    modalVoterName.innerHTML = "..."
    modalVoterVerified.innerHTML = "..."

    var voterInfo = await contract.getVoter(voter);
    modalVoterName.innerHTML = voterInfo["name"];
    modalVoterVerified.innerHTML = voterInfo["verified"];

    if (voterInfo["verified"] == false) {
        var button = document.createElement("button");
        button.classList.add("btn", "btn-success", "verify");
        button.innerHTML = "Verify";
        button.onclick = function () {
            verifyVoter(voter, true);
        }
        modalFooter.appendChild(button);
    }

    // TODO!
    // button = document.createElement("button");
    // button.classList.add("btn", "btn-danger", "verify");
    // button.innerHTML = "Reject";

    // modalFooter.appendChild(button);
    
}

async function verifyVoter(voter, isVerified) {
    await contract.verifyVoter(voter, isVerified);
    window.location.href = "/admin/voters";
}