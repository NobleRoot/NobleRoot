// Lấy các phần tử DOM
const modal = document.getElementById("walletModal");
const connectWalletBtn = document.getElementById("connectWallet");
const span = document.getElementsByClassName("close")[0];

// Mở modal khi nhấp vào "Connect Wallet"
connectWalletBtn.onclick = function() {
    modal.style.display = "block";
}

// Đóng modal khi nhấp vào nút "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Đóng modal khi nhấp ra ngoài modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Kết nối với Phantom Wallet
document.getElementById('phantomWallet').onclick = async function() {
    if (window.solana && window.solana.isPhantom) {
        try {
            await window.solana.connect();
            console.log('Connected to Phantom');
            modal.style.display = "none";
        } catch (err) {
            console.error('Connection to Phantom failed', err);
        }
    } else {
        window.open('https://phantom.app/', '_blank');
    }
};

// Kết nối với Metamask
document.getElementById('metamaskWallet').onclick = async function() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected to Metamask');
            modal.style.display = "none";
        } catch (err) {
            console.error('Connection to Metamask failed', err);
        }
    } else {
        window.open('https://metamask.io/', '_blank');
    }
};
