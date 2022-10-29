import { ethers } from "../ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "../ethers/constants.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    var positionName = form.querySelector("#position-name").value
    var positionDetails = form.querySelector("#position-details").value

    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            await contract.createPosition(positionName, positionDetails);
            window.location.href = "/admin"
        } catch(e) {
            console.log(e)
        }
    }
});