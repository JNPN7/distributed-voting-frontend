import { ethers } from "../ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "../ethers/constants.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    var electionName = form.querySelector("#election-name").value
    var electionDetails = form.querySelector("#election-details").value
    var electionPosition = form.querySelector("#election-position").value

    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            await contract.createElection(electionName, electionDetails, electionPosition);
            window.location.href = "/admin"
        } catch(e) {
            console.log(e)
        }
    }
});