var Jogo = function(){
	
	var Jogador = function(id){
		this.id = id;
		this.pontuacao = 0;
		this.vantagem = false;
		this.ganhou = false;
	};
	
	this.jogador1 = new Jogador(1);
	this.jogador2 = new Jogador(2);
	this.terminado = false;
	this.CONST_FIM = "Não pode pontuar, jogo terminado.";
	
	this.pontuar = function(jogador){
		var acrescimo = 0;
		if(!this.terminado){
			switch (jogador.pontuacao){
				case 0:
				acrescimo = 15;
				break;
				case 15:
				acrescimo = 15;
				break;
				case 30:
				acrescimo = 10;
				break;
				case 40:
				this.victoryTrigger(jogador);
			}

			jogador.pontuacao += acrescimo;
			return acrescimo;
		}
		else {
			throw new error(this.CONST_FIM);
		}

	};
	
	this.victoryTrigger = function(jogador){
		var adversario;
		if (jogador.id === this.jogador1.id){
			adversario = this.jogador2;
		} else {
			adversario = this.jogador1;
		}

		if(adversario.pontuacao < 40){
			this.terminado = true;
			jogador.ganhou = true;
			return;
		}
		if(adversario.pontuacao === 40 && adversario.vantagem === false && jogador.vantagem === false){
			jogador.vantagem = true;
			return;
		}
		if(adversario.pontuacao === 40 && adversario.vantagem === true && jogador.vantagem === false){
			adversario.vantagem = false;
			return;
		}
		if(adversario.pontuacao === 40 && adversario.vantagem === false && jogador.vantagem === true){
			this.terminado = true;
			jogador.ganhou = true;
			return;
		}

	};

	this.getganhador = function(){
		if(this.terminado){
			if(this.jogador1.ganhou){
				return this.jogador1.id;
			}else{
				return this.jogador2.id;
			}
		}
		return 0;
	};

};