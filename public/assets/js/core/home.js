import { ethers } from "./ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "./ethers/constants.js";

const positions = document.querySelector("#positions");
const elections = document.querySelector("#elections");
const candidates = document.querySelector("#candidates");

await getAllPositions();
await getAllElections();
await getAllCandidates();

async function getAllPositions() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    // TODO! change getAllPosition
    var allPositions = await contract.getAllPostions();
    if (allPositions.length == 0) {
        var p = document.createElement("p");
        p.innerHTML = "Is empty";
        positions.appendChild(p);
    }

    allPositions.forEach((position) => {
        var li = document.createElement("li");
        li.innerHTML = position;
        li.classList.add("list-group-item");
        positions.appendChild(li);
    });
}

async function getAllElections() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    var allElections = await contract.getAllElections();
    if (allElections.length == 0) {
        var p = document.createElement("p");
        p.innerHTML = "Is empty";
        elections.appendChild(p);
    }

    allElections.forEach((position) => {
        var li = document.createElement("li");
        li.innerHTML = position;
        li.classList.add("list-group-item");
        elections.appendChild(li);
    });
}

async function getAllCandidates() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    var allCandidates = await contract.getAllCandidates();
    var allCandidatesName = allCandidates["allCandidatesName"];
    if (allCandidatesName.length == 0) {
        var p = document.createElement("p");
        p.innerHTML = "Is empty";
        candidates.appendChild(p);
    }

    allCandidatesName.forEach((position) => {
        var li = document.createElement("li");
        li.innerHTML = position;
        li.classList.add("list-group-item");
        candidates.appendChild(li);
    });
}