class Usuario {
	constructor(){
		this._nome = "Indefinido";
		this._cpf = "Indefinido"; 
		this._idade = "Indefinida";
	};

	set set_idade(idade){
		this._idade = idade;
	};

	get get_cpf(){
		return this._cpf;
	};	
	get get_idade(){
		return this._idade;
	};
	get get_nome(){
		return this._nome;
	};
};

class Conta {
	constructor(){
		this._user;		
		this._saldo = "Indefinido";
	};
	
	set set_saldo(saldo){
		this._saldo = saldo;
	};
	set set_user(user){
		this._user = user;
	};

	get get_saldo(){
		return this._saldo;
	};
	get get_user(){
		return this._user;
	}

	saque(valor){
		if (valor < this.get_saldo) {
			this.set_saldo = this.get_saldo-valor;
		};
	};

	deposito(valor){
		let x = ("number" || "boolean");
		if ( (typeof(this.get_saldo) != x) && (typeof(valor) == x) ) {
			this.set_saldo = valor;
		} 
		else if (typeof(valor) == x) {
			this.set_saldo = this.get_saldo+valor;
		};
	};
};

// main teste

let contateste = new Conta();
let clienteteste = new Usuario();
clienteteste.set_idade = 23;
contateste.set_user = clienteteste;
contateste.deposito(100);
contateste.deposito("teste depósito string");
contateste.deposito(5.50);
contateste.saque(50);

console.log(contateste);

// main teste