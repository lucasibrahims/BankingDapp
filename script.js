var web3 = new Web3(ethereum);
var bancoAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "endGrifo",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "endZangada",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "endXarada",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "grifo",
      "outputs": [
        {
          "internalType": "contract interfaceGrifo",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "xarada",
      "outputs": [
        {
          "internalType": "contract interfaceXarada",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "zangada",
      "outputs": [
        {
          "internalType": "contract interfaceZangada",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositarGrifo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositarZangada",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositarXarada",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sacarGrifo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sacarXarada",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sacarZangada",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalanceOfGrifo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getBalanceOfXarada",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getBalanceOfZangada",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
var grifoAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var xaradaAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var zangadaAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
var bancoEndereco = "0x57C9D52a9113deEe5800a83d7703AEC310E20298";
var grifoEndereco = "0x5D0229FDf3C05dA2a3167ecADd0A5eEd6de8F690";
var xaradaEndereco = "0xdf09ef3D02FFF6292f3193dD1b08b912a55Dd71d";
var zangadaEndereco = "0xD8Ed973DAFcbc1034872F64167791D8ac778D11b";
let bancoContrato = new web3.eth.Contract(bancoAbi, bancoEndereco);
let grifoContrato = new web3.eth.Contract(grifoAbi, grifoEndereco);
let xaradaContrato = new web3.eth.Contract(xaradaAbi, xaradaEndereco);
let zangadaContrato = new web3.eth.Contract(zangadaAbi, zangadaEndereco);
var conectarBtn = document.getElementById("conectar"); 
var grifoInput = document.getElementById("qnt_grifo");
var zangadaInput = document.getElementById("qnt_zangada");
var xaradaInput = document.getElementById("qnt_xarada");
var grifoSacarBtn = document.getElementById("sacar_grifo");
var xaradaSacarBtn = document.getElementById("sacar_xarada");
var zangadaSacarBtn = document.getElementById("sacar_zangada");
var grifoDepositarBtn = document.getElementById("depositar_grifo");
var xaradaDepositarBtn = document.getElementById("depositar_xarada");
var zangadaDepositarBtn = document.getElementById("depositar_zangada");
var endGrifo = document.getElementById("end_grifo");
endGrifo.innerHTML = `GRF: ${grifoEndereco}`
var endXarada = document.getElementById("end_xarada");
endXarada.innerHTML = `XRD: ${xaradaEndereco}`
var endZangada = document.getElementById("end_zangada");
endZangada.innerHTML = `ZGD: ${zangadaEndereco}`
var saldo = document.getElementById("saldo");
var saldoGrifoBtn = document.getElementById("saldo_grifo");
var saldoXaradaBtn = document.getElementById("saldo_xarada");
var saldoZangadaBtn = document.getElementById("saldo_zangada");


async function conectar(){
    if(ethereum){
        try{
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            alert ("Conectado!");
            console.log(account);
            return account;
        } catch(err){
            alert('Error');
            console.log(err);
        }
    } else{
        alert('Por favor, instale a carteira');
    }
}

async function depositarGrifo(_quantidade)
{
    if(ethereum) {
        try {
            console.log(_quantidade)
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let bancoContrato = new web3.eth.Contract(bancoAbi, bancoEndereco);
            let call = await bancoContrato.methods.depositarGrifo(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function aprovarGrifo(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let sendCall = await grifoContrato.methods.approve(bancoEndereco, _quantidade).send({from:account});
            return sendCall;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function depositarXarada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let bancoContrato = new web3.eth.Contract(bancoAbi, bancoEndereco);
            let call = await bancoContrato.methods.depositarXarada(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function aprovarXarada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let sendCall = await xaradaContrato.methods.approve(bancoEndereco, _quantidade).send({from:account});
            return sendCall;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}
async function depositarZangada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let bancoContrato = new web3.eth.Contract(bancoAbi, bancoEndereco);
            let call = await bancoContrato.methods.depositarZangada(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function aprovarZangada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let sendCall = await zangadaContrato.methods.approve(bancoEndereco, _quantidade).send({from:account});
            return sendCall;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function sacarGrifo(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await bancoContrato.methods.sacarGrifo(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function sacarXarada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await bancoContrato.methods.sacarXarada(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function sacarZangada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await bancoContrato.methods.sacarZangada(_quantidade).send({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function saldoGrifo(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await bancoContrato.methods.getBalanceOfGrifo().call({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function saldoXarada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await bancoContrato.methods.getBalanceOfXarada().call({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

async function saldoZangada(_quantidade)
{
    if(ethereum) {
        try {
            let accounts = await ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let call = await bancoContrato.methods.getBalanceOfZangada().call({from:account});
            return call;
        } catch(err){
    alert('Error');
    console.log(err);
    }
    } else{
    alert('Por favor, instale a carteira');
    }
}

conectarBtn.addEventListener('click', ()=>{
    conectar().then((response)=>{
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

grifoSacarBtn.addEventListener('click', ()=>{
    let bigNumber = Number(grifoInput.value)*10**18;
    sacarGrifo(BigInt(bigNumber)).then((response)=>{
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

xaradaSacarBtn.addEventListener('click', ()=>{
    let bigNumber = Number(xaradaInput.value)*10**18;
    sacarXarada(BigInt(bigNumber)).then((response)=>{
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

zangadaSacarBtn.addEventListener('click', ()=>{
    let bigNumber = Number(zangadaInput.value)*10**18;
    sacarZangada(BigInt(bigNumber)).then((response)=>{
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
});

grifoDepositarBtn.addEventListener('click', () => {
    let bigNumber = Number(grifoInput.value)*10**18;
    aprovarGrifo(BigInt(bigNumber)).then((res1)=>{
        console.log(res1);
        depositarGrifo(BigInt(bigNumber)).then((res)=>{
            console.log(res);
        }).catch((err2) => {
            console.log(err2);
        });
    }).catch((err1)=>{
        console.log(err1);
    });
});

xaradaDepositarBtn.addEventListener('click', () => {
    let bigNumber = Number(xaradaInput.value)*10**18;
    aprovarXarada(BigInt(bigNumber)).then((res1)=>{
        console.log(res1);
        depositarXarada(BigInt(bigNumber)).then((res)=>{
            console.log(res);
        }).catch((err2) => {
            console.log(err2);
        });
    }).catch((err1)=>{
        console.log(err1);
    });
});


zangadaDepositarBtn.addEventListener('click', () => {
    let bigNumber = Number(zangadaInput.value)*10**18;
    aprovarZangada(BigInt(bigNumber)).then((res1)=>{
        console.log(res1);
        depositarZangada(BigInt(bigNumber)).then((res)=>{
            console.log(res);
        }).catch((err2) => {
            console.log(err2);
        });
    }).catch((err1)=>{
        console.log(err1);
    });
});


saldoGrifoBtn.addEventListener('click', () =>{
    saldoGrifo().then((res) => {
        saldo.innerHTML = `Saldo ${res/10**18} GRF`
    }).catch((err) => {
        console.log(err);
    });

});

saldoXaradaBtn.addEventListener('click', () =>{
    saldoXarada().then((res) => {
        saldo.innerHTML = `Saldo ${res/10**18} XRD`
    }).catch((err) => {
        console.log(err);
    });

});

saldoZangadaBtn.addEventListener('click', () =>{
    console.log("zangada")
    saldoZangada().then((res) => {
        saldo.innerHTML = `Saldo ${res/10**18} ZGD`
    }).catch((err) => {
        console.log(err);
    });

});