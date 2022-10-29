import { ethers } from "./ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "./ethers/constants.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    var candidateName = form.querySelector("#candidate-name").value
    var candidateDetails = form.querySelector("#candidate-details").value
    var candidateElection = form.querySelector("#candidate-election").value

    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            await contract.requestCandidancy(candidateName, candidateDetails, candidateElection);
            window.location.href = "/"
        } catch(e) {
            console.log(e)
        }
    }
});