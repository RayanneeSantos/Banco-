
const Banco = {
    conta: '345673', 
    saldo: 5000, 
    tipoConta: 'corrente', 
    agencia: '8907', 
  

    buscarSaldo() {
      return this.saldo;
    },
  
    
    deposito(valor) {
      this.saldo += valor;
      return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
  
    
    saque(valor) {
      if (valor > this.saldo) {
        return 'Saldo insuficiente';
      }
      this.saldo -= valor;
      return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`;
    },
  
    
    numeroConta() {
      return this.conta;
    }
  };
  
  
  console.log(`Saldo atual: R$ ${Banco.buscarSaldo()}`);
  console.log(Banco.deposito(500));
  console.log(Banco.saque(200));
  console.log(`Número da conta: ${Banco.numeroConta()}`);
  