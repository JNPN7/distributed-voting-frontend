import { ethers } from "./ethers/ethers-5.1.esm.min.js";
import { contractAddress, abi } from "./ethers/constants.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    var name = form.querySelector("#name").value

    if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);
        try {
            await contract.requestVoter(name);
            window.location.href = "/"
        } catch(e) {
            console.log(e)
        }
    }
});