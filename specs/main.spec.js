describe("O jogo deve", function() {
	  var jogo = new Jogo();
	  it("ter dois jogadores diferentes", function() {
	    expect(jogo.jogador1).not.toBe(undefined);
	    expect(jogo.jogador2).not.toBe(undefined);
	    expect(jogo.jogador1.id).not.toBe(jogo.jogador2.id);
	  });	  	
	  it("os jogadores devem ter 0 ponto", function() {
	    expect(jogo.jogador1.pontuacao).toBe(0);
	    expect(jogo.jogador2.pontuacao).toBe(0);
	  });	  
	  it("nenhum jogador deve começar com vantagem", function() {
	    expect(jogo.jogador1.vantagem).toBe(false);
	    expect(jogo.jogador2.vantagem).toBe(false);
	  });
	  it("jogador deve pontuar", function() {
	    expect(jogo.pontuar).not.toBe(undefined);
	  });
	  it("se o jogador tiver 0 ou 15 pontos, pontuar 15", function() {
	    expect(jogo.pontuar(jogo.jogador1)).toBe(15);
	    expect(jogo.pontuar(jogo.jogador1)).toBe(15);
	  }); 
	  it("se o jogador tiver 30 pontos, pontuar 10", function() {
	    expect(jogo.pontuar(jogo.jogador1)).toBe(10);
	  });
	  it("se o jogador tiver 40 pontos, checar condições do mesmo", function() {
	    expect(jogo.checar).not.toBe(undefined);
	  });
  	  it("se o jogador tiver 40 pontos e outro tiver menos que 40, terminar jogo", function() {
	    jogo.pontuar(jogo.jogador1);
	    expect(jogo.jogador2.pontuacao < 40).toBe(true);
	    expect(jogo.terminado).toBe(true);
	    expect(jogo.jogador1.ganhou).toBe(true);
	  });
	  it("se os dois jogadores tiverem 40, jogador pontuador com vantagem", function() {
	    jogo = new Jogo();
	    jogo.jogador1.pontuacao = 40;
	    jogo.jogador2.pontuacao = 40;
	    expect(jogo.jogador1.pontuacao).toBe(40);
	    expect(jogo.jogador2.pontuacao).toBe(40);
	    jogo.pontuar(jogo.jogador1);
	    expect(jogo.jogador1.vantagem).toBe(true);
	    expect(jogo.terminado).toBe(false);
	  });

	  it("se o adversario tiver a vantagem e o jogador pontuar, tirar a vantagem", function() {
	    jogo = new Jogo();
	    jogo.jogador1.pontuacao = 40;
	    jogo.jogador2.pontuacao = 40;
	    jogo.jogador2.vantagem = true;
	    expect(jogo.jogador1.pontuacao).toBe(40);
	    expect(jogo.jogador2.vantagem).toBe(true);
	    expect(jogo.jogador2.pontuacao).toBe(40);
	    jogo.pontuar(jogo.jogador1);
	    expect(jogo.jogador2.vantagem).toBe(false);
	    expect(jogo.terminado).toBe(false);
	  });
	  it("se o adversario não tiver a vantagem e o jogador pontuador tiver vantagem, atribuir vitoria ", function() {
	    jogo = new Jogo();
	    jogo.jogador1.pontuacao = 40;
	    jogo.jogador2.pontuacao = 40;
	    jogo.jogador1.vantagem = true;
	    expect(jogo.jogador1.pontuacao).toBe(40);
	    expect(jogo.jogador2.pontuacao).toBe(40);
	    jogo.pontuar(jogo.jogador1);
	    expect(jogo.terminado).toBe(true);
	    expect(jogo.jogador1.ganhou).toBe(true);
	  });
	  it("deve existir um ganhador", function() {
	     expect(jogo.getganhador()).toBe(1);

	  });
	  it("se jogo terminado, ninguem pode pontuar", function() {
	     expect(jogo.terminado).toBe(true);
	     var teste = function(){
	     	jogo.pontuar(jogo.jogador1);
	     }
	     expect(teste).toThrow();
	  });
});  

