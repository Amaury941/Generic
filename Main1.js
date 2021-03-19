class Inimigo {
	constructor(){
		this._vida = 0;
		this._defesa = 0;
		this._dano = 0;
	};

	set set_DMG(damage){
		this._dano = damage; 
	};
	set set_DEF(defense){
		this._defesa = defense;
	};
	set set_HP(health){
		this._vida = health;
	};

	get get_HP(){
		return this._vida;
	};
	get get_DEF(){
		return this._defesa;
	};

	get get_DMG(){
		return this._dano;
	};
	
	atacar(){
		console.log("ataque de %s pontos de dano!",this.get_DMG);
	};

	bloquear(){
		console.log("bloqueio de %s pontos de defesa!",this.get_DEF);
	};
}

class Morcego extends Inimigo{
	constructor(){
		super();
		this._voando = false;
		this._flyheight = 0;
	};

	// set altura de voo
	set set_flyh(flyh){
		this._flyheight = flyh;
	};

	// get altura de voo
	get get_flyh(){
		return this._flyheight;
	};
	

	voar(){
		this._voando = true;
	};

	//bloquear * polimorfo
	bloquear(){
		if (this._voando){
			console.log("bloqueio de %s pontos de defesa!",this.get_DEF+this.get_flyh);	
		} else {
			console.log("bloqueio de %s pontos de defesa!",this.get_DEF);
		}; 
	}
}

class Orc extends Inimigo{
	constructor(){
		super();
		this._weapon_damage = 0; 
	};

	// set dano da arma
	set set_WDMG(damage){
		this._weapon_damage = damage;
	};

	// get dano da arma
	get get_WDMG(){
		return this._weapon_damage;
	};

	// atacar * polimorfo
	atacar(){
		console.log("ataque de %s pontos de dano!",this.get_DMG+this.get_WDMG);
	};
}

// inimigo com 2 novos status: vida máxima(que limita o quanto de vida o inimigo tem), e distância de especial.
// OBS** definir vida máxima antes de definir vida atual

class Kamikaze extends Inimigo{
	constructor(){
		super();
		this._max_hp = 0;	
		this._Special_range = 0;
	}

	// set vida máxima
	set set_MHP(health){
		this._max_hp = health;
		if (this.get_MHP < this.get_HP){
			this.set_HP = health;
		}
	};

	// set vida atual * polimorfo
	set set_HP(health){
		if (this.get_MHP < health){
			this._vida = this.get_MHP;
		} else {
			this._vida = health;
		}
	};

	// set distância de especial
	set set_SPR(distance){
		this._Special_range = distance;
	};
	
	// get vida máxima
	get get_MHP(){
		return this._max_hp;
	};

	// get distância de especial
	get get_SPR(){
		return this._Special_range;
	};

	// diminui a vida atual do inimigo em 20% da vida máxima (mínimo 1HP), aumenta a vida máxima em 20% e aumenta a distância dos especiais em 2% da vida máxima em metros 
	Divine_Wind_Charge(){
		if (this.get_HP > 1){
			
			let x = (this.get_MHP*0.20);
			this.set_MHP = this.get_MHP + x;
			//this.set_SPR = ((x - this.get_HP)/3);
			this.set_SPR = x/10;
			if (this.get_HP - x < 1){
				this.set_HP  = 1;
			} else {
				this.set_HP  = this.get_HP - x;	
			};	
		};
	};

	//dá dano equivalente a (vida máxima total - vida atual + 10% do dano) em uma distância igual a distância de especial acumulada.(após o ataque, zera a distancia do especial e reduz vida máxima para 1)
	Divine_Wind_Special_Attack(){
		console.log("ataque de %s pontos de dano em um raio de %s metros!!!", (this.get_MHP - this.get_HP + this.get_DMG*0.10).toFixed(2),(this.get_SPR).toFixed(2));
		this.set_SPR = 0;		
		this.set_MHP = 1;
	}
}

// main teste 

let y = new Kamikaze();

y.set_HP = 99999;
console.log(y); // vida 0, pois vida máxima == 0 
y.set_MHP = 1000;
console.log(y); // vida máxima == 1000,
y.set_HP = 99999;
console.log(y); // vida 1000, pois vida máxima == 1000

y.Divine_Wind_Charge()
y.Divine_Wind_Charge()
y.Divine_Wind_Charge()
y.Divine_Wind_Charge()
y.Divine_Wind_Special_Attack()
y.Divine_Wind_Special_Attack()

// main teste