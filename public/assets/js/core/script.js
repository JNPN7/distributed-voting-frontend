// import { ethers } from "./ethers/ethers-5.1.esm.min.js";
// import { contractAddress, abi } from "./ethers/constants.js";

const connectBtn = document.getElementById("connect-btn");

connectBtn.onclick = connect;

async function connect() {
    if (typeof window.ethereum !== "undefined") {
        try {
            await window.ethereum.request({ method: "eth_requestAccounts" });
            connectBtn.innerHTML = "Connected!";
            connectBtn.classList.add("disabled");
        } catch (e) {
            console.log(e);
        }
    } else {
        connectBtn.innerHTML = "No Metamask!";
        connectBtn.classList.add("disabled");
    }
}