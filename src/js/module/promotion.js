(function addElement(element, src, elmClass, title, content) {
	const textOfPromotion = `
		Critério de Participação: 1.1.1 - A empresa Sattrack Rastreamento e Logística Ltda.-ME, juntamente com a empresa Ctrack Rastreamento e Logística Ltda-ME, promove a Promoção Comercial “SHOW DE
    PRÊMIOS”, com abrangência no estado do Paraná. / 1.1.2 - Porém, a presente campanha é aberta a todos os consumidores, pessoas físicas e jurídicas, residentes e domiciliados no território nacional, desde
    que preencham os requisitos estabelecidos no regulamento. / 1.1.3 - O consumidor terá direito a 01 (um) cupom, para concorrer aos prêmios ofertados na presente campanha, a cada contrato de compra e
    venda de equipamento e/ou prestação de serviços firmado. / 1.1.4 - O consumidor que já é cliente dos serviços da empresa, terá direito a 01 (um) cupom, durante o período de vigência da promoção, desde
    que esteja com o pagamento das mensalidades do serviço de rastreamento em dia. / 1.1.5 - O cupom que dará o direito ao consumidor participar da promoção deverá ser preenchido por completo (nome,
    CPF, e/ou Carteira de Identidade), endereço completo (logradouro, número, complementos, bairro, cidade, estado e CEP), telefone e endereço eletrônico, quando possuir, de modo a possibilitar e facilitar a
    identificação e a localização do contemplado, ficando o participante ciente desde já, nos termos do item abaixo, que os campos do cupom referentes ao NOME, ENDEREÇO, CPF e/ou IDENTIDADE são de
    preenchimentos obrigatórios, sendo que a falta de um destes acarretará em desclassificação. Consequentemente, um novo cupom será sorteado imediatamente. 1.1.6 - O Participante reconhece que
    deverá informar com clareza, precisão e veracidade os dados solicitados no item 12.1.5 e que a Mandataria e Aderente não poderão ser responsabilizadas se a inconsistência destes implicar na impossibilidade de entrega dos prêmios. / 1.1.7 - Caso um dos cupons sorteados não contenha um dos campos elencados como de preenchimento obrigatório no item 12.1.5, será desclassificado automaticamente e,
    em ato contínuo, serão sorteados, quantos cupons forem necessários, até que encontre um cupom válido. / 1.1.8 - Fica ciente também o consumidor participante que, é condição determinante para a
    validação do cupom contemplado, que seja dada resposta correta à seguinte pergunta constante no cupom de participação: Qual o melhor sistema de rastreamento do Brasil? ( ) Sattrack/Ctrack ( )
    Outros / 1.1.9 - A empresa Mandatária da campanha disponibilizará urnas em cada uma das suas lojas, onde os cupons, devidamente preenchidos, atendendo as condições de participação deverão ser
    depositados nas mesmas. / 1.1.10 - Impreterivelmente, todos os cupons deverão ser depositados nas urnas previamente disponibilizadas, até o encerramento do expediente do dia 24 de janeiro de 2018,
    devendo todos os participantes se atentarem para o horário de funcionamento do respectivo estabelecimento. Encerrado o expediente ali, cada urna deverá ser devidamente lacrada e aberta somente no
    momento da apuração. / 1.1.11 - Cada urna permanecerá com lacre inviolável e assim, será transportada para o local da apuração, onde serão abertas na presença de pessoas idôneas, em cujo local, o
    público em geral terá livre acesso. / 1.1.12 - Não poderão participar desta promoção, negociações que envolverem os produtos vetados pelo art. 10 do decreto 70951/72, que são medicamentos, armas e
    munições, explosivos, fogos de artifício ou de estampido, bebidas alcoólicas, fumo e seus derivados. / 1.1.13 - No momento do sorteio será verificada a lista das pessoas impedidas de participar da promoção,
    são elas, colaboradores, contratados ou qualquer prestador de serviço da Mandatária e da Aderente. / 1.1.14 - Para a determinação da ordem de premiação e respectivo prêmio a que os participantes
    farão jus, os sorteios dos prêmios ocorrerão em ordem crescente de valor. / 1.1.15 -Uma mesma pessoa poderá ser sorteada mais de uma vez, tendo em vista a possibilidade do consumidor participar com
    mais de um cupom. / 1.1.16 - O auditor validará cada cupom sorteado pelo locutor, no momento em que for retirado da urna, verificando a correta resposta à pergunta. Caso não seja validado, outro cupom
    será sorteado até que se tenha o cupom válido. / 1.1.17 - O participante será excluído automaticamente da promoção em caso de fraude comprovada, e da não comprovação por meio dos documentos
    exigidos, podendo ainda responder por crime de falsidade documental. / 1.1.18 - A equipe da MANDATÁRIA entrará em contato por meio do telefone declarado no cupom em até cinco dias úteis contados
    da data do sorteio. Não conseguindo contato será enviada correspondência com aviso de recebimento para o endereço indicado no cupom sorteado. / 1.1.19 - A MANDATÁRIA disponibilizará a entrega do
    prêmio ao CONTEMPLADO por até 180 (cento e oitenta) dias a partir do comunicado oficial, durante esse período o CONTEMPLADO deverá apresentar-se na sede da mandatária para recebimento do
    prêmio, assinar o recibo de entrega e carta de compromisso dando quitação geral do prêmio. Caso o CONTEMPLADO não consiga comprovar e apresentar os documentos, o valor do prêmio será recolhido
    ao Tesouro Nacional, como renda da União conforme previsto no artigo 47 da Portaria 41/2008. / 1.1.20 - A assinatura do competente recibo de entrega e carta de compromisso de prêmios se dará com a
    efetiva entrega do prêmio e conseqüente quitação geral e ampla do direito de reclamá-lo. / 1.1.21 - A MANDATÁRIA não se responsabiliza por defeitos e/ou problemas técnicos apresentados pelo prêmio e
    nem pela garantia e assistência técnica, cabendo ao contemplado acionar diretamente a assistência técnica do fabricante em caso de defeito. / 1.1.22 - O prêmio a ser distribuído destina-se ao
    participante contemplado, e será entregue no nome do mesmo, sendo vedada sua transferência antes da entrega. / 1.1.23 - Na eventualidade do participante contemplado vir a falecer, o prêmio será
    entregue ao seu inventariante, que deverá comprovar tal condição. / 1.1.24 - O prêmio não pode ser trocado por outro, muito menos convertido em dinheiro, consoante previsão do parágrafo 3º do artigo 1º
    da lei 5.768/71. / 1.1.25 - Caso os prêmios não sejam distribuídos, serão recolhidos para o tesouro nacional. Critério para ter direito ao prêmio: 1.2.1 - Para ter direito ao prêmio o sorteado deverá ter
    preenchido corretamente o cupom de participação com os seus dados, bem como responder corretamente a seguinte pergunta: Qual o melhor sistema de rastreamento do Brasil? ( ) Sattrack/Ctrack ( )
    Outros / DATA, HORÁRIO E ENDEREÇO COMPLETO DA APURAÇÃO: 2.1 - Às 12h30 do dia 26/01/2018, no Programa de Televisão do Carlos Camargo, exibido ao vivo pela rede Massa (SBT).
	`;
	if (element === 'modal' && elmClass) {
		divFather = $('<div></div>').attr('id', 'modal1').addClass('modal modal-fixed-footer');

		divContent = $('<div></div>').addClass('modal-content');

		divHeader = $('<div></div>').addClass('row center');

		divHead = $('<div></div>').addClass('col s12').css({ 'color': '#000' });

		titleOfHead = $("<h3>Show de Prêmios Sattrack</h3>\n");

		bannerOfPromotion = $('<img src="../src/images/promo-min.png">').css({ 'width': '100%' });

		textOfModal = $(`<p>${textOfPromotion}</p>`).css({ 'color': '#000', 'text-align': 'justify' });

		divFooter = $('<div></div>').addClass('modal-footer');

		contentFooter = $('<a></a>').addClass('modal-action modal-close waves-effect waves-green btn-flat left');

		divFather.append(divContent);
		divFather.append(divHeader);
		divFather.append(divHead);
		divFather.append(titleOfHead);
		divFather.append(bannerOfPromotion);
		divFather.append(textOfModal);
		divFather.append(divFooter);
		divFather.append(contentFooter);

		divContent.append(divHeader);
		divContent.append(divHead);
		divContent.append(titleOfHead);
		divContent.append(bannerOfPromotion);
		divContent.append(textOfModal);
		divContent.append(divFooter);
		divContent.append(contentFooter);

		divHeader.append(divHead);
		divHeader.append(titleOfHead);

		divHead.append(titleOfHead);

		divFooter.append(contentFooter);
	}


	// <div id="modal1" class="modal modal-fixed-footer">
	//     <div class="modal-content">
	//       <div class="row center">
	//         <div class="col s12" style="color: #000;">
	//           <h3>Show de Prêmios Sattrack</h3>
	//         </div>
	//       </div>
	//       <hr>
	//       <img src="../src/images/promo-min.png" style="width: 100%;">
	//       <p style="color: #000; text-align: justify;">
	//           Critério de Participação: 1.1.1 - A empresa Sattrack Rastreamento e Logística Ltda.-ME, juntamente com a empresa Ctrack Rastreamento e Logística Ltda-ME, promove a Promoção Comercial “SHOW DE
	//           PRÊMIOS”, com abrangência no estado do Paraná. / 1.1.2 - Porém, a presente campanha é aberta a todos os consumidores, pessoas físicas e jurídicas, residentes e domiciliados no território nacional, desde
	//           que preencham os requisitos estabelecidos no regulamento. / 1.1.3 - O consumidor terá direito a 01 (um) cupom, para concorrer aos prêmios ofertados na presente campanha, a cada contrato de compra e
	//           venda de equipamento e/ou prestação de serviços firmado. / 1.1.4 - O consumidor que já é cliente dos serviços da empresa, terá direito a 01 (um) cupom, durante o período de vigência da promoção, desde
	//           que esteja com o pagamento das mensalidades do serviço de rastreamento em dia. / 1.1.5 - O cupom que dará o direito ao consumidor participar da promoção deverá ser preenchido por completo (nome,
	//           CPF, e/ou Carteira de Identidade), endereço completo (logradouro, número, complementos, bairro, cidade, estado e CEP), telefone e endereço eletrônico, quando possuir, de modo a possibilitar e facilitar a
	//           identificação e a localização do contemplado, ficando o participante ciente desde já, nos termos do item abaixo, que os campos do cupom referentes ao NOME, ENDEREÇO, CPF e/ou IDENTIDADE são de
	//           preenchimentos obrigatórios, sendo que a falta de um destes acarretará em desclassificação. Consequentemente, um novo cupom será sorteado imediatamente. 1.1.6 - O Participante reconhece que
	//           deverá informar com clareza, precisão e veracidade os dados solicitados no item 12.1.5 e que a Mandataria e Aderente não poderão ser responsabilizadas se a inconsistência destes implicar na impossibilidade de entrega dos prêmios. / 1.1.7 - Caso um dos cupons sorteados não contenha um dos campos elencados como de preenchimento obrigatório no item 12.1.5, será desclassificado automaticamente e,
	//           em ato contínuo, serão sorteados, quantos cupons forem necessários, até que encontre um cupom válido. / 1.1.8 - Fica ciente também o consumidor participante que, é condição determinante para a
	//           validação do cupom contemplado, que seja dada resposta correta à seguinte pergunta constante no cupom de participação: Qual o melhor sistema de rastreamento do Brasil? ( ) Sattrack/Ctrack ( )
	//           Outros / 1.1.9 - A empresa Mandatária da campanha disponibilizará urnas em cada uma das suas lojas, onde os cupons, devidamente preenchidos, atendendo as condições de participação deverão ser
	//           depositados nas mesmas. / 1.1.10 - Impreterivelmente, todos os cupons deverão ser depositados nas urnas previamente disponibilizadas, até o encerramento do expediente do dia 24 de janeiro de 2018,
	//           devendo todos os participantes se atentarem para o horário de funcionamento do respectivo estabelecimento. Encerrado o expediente ali, cada urna deverá ser devidamente lacrada e aberta somente no
	//           momento da apuração. / 1.1.11 - Cada urna permanecerá com lacre inviolável e assim, será transportada para o local da apuração, onde serão abertas na presença de pessoas idôneas, em cujo local, o
	//           público em geral terá livre acesso. / 1.1.12 - Não poderão participar desta promoção, negociações que envolverem os produtos vetados pelo art. 10 do decreto 70951/72, que são medicamentos, armas e
	//           munições, explosivos, fogos de artifício ou de estampido, bebidas alcoólicas, fumo e seus derivados. / 1.1.13 - No momento do sorteio será verificada a lista das pessoas impedidas de participar da promoção,
	//           são elas, colaboradores, contratados ou qualquer prestador de serviço da Mandatária e da Aderente. / 1.1.14 - Para a determinação da ordem de premiação e respectivo prêmio a que os participantes
	//           farão jus, os sorteios dos prêmios ocorrerão em ordem crescente de valor. / 1.1.15 -Uma mesma pessoa poderá ser sorteada mais de uma vez, tendo em vista a possibilidade do consumidor participar com
	//           mais de um cupom. / 1.1.16 - O auditor validará cada cupom sorteado pelo locutor, no momento em que for retirado da urna, verificando a correta resposta à pergunta. Caso não seja validado, outro cupom
	//           será sorteado até que se tenha o cupom válido. / 1.1.17 - O participante será excluído automaticamente da promoção em caso de fraude comprovada, e da não comprovação por meio dos documentos
	//           exigidos, podendo ainda responder por crime de falsidade documental. / 1.1.18 - A equipe da MANDATÁRIA entrará em contato por meio do telefone declarado no cupom em até cinco dias úteis contados
	//           da data do sorteio. Não conseguindo contato será enviada correspondência com aviso de recebimento para o endereço indicado no cupom sorteado. / 1.1.19 - A MANDATÁRIA disponibilizará a entrega do
	//           prêmio ao CONTEMPLADO por até 180 (cento e oitenta) dias a partir do comunicado oficial, durante esse período o CONTEMPLADO deverá apresentar-se na sede da mandatária para recebimento do
	//           prêmio, assinar o recibo de entrega e carta de compromisso dando quitação geral do prêmio. Caso o CONTEMPLADO não consiga comprovar e apresentar os documentos, o valor do prêmio será recolhido
	//           ao Tesouro Nacional, como renda da União conforme previsto no artigo 47 da Portaria 41/2008. / 1.1.20 - A assinatura do competente recibo de entrega e carta de compromisso de prêmios se dará com a
	//           efetiva entrega do prêmio e conseqüente quitação geral e ampla do direito de reclamá-lo. / 1.1.21 - A MANDATÁRIA não se responsabiliza por defeitos e/ou problemas técnicos apresentados pelo prêmio e
	//           nem pela garantia e assistência técnica, cabendo ao contemplado acionar diretamente a assistência técnica do fabricante em caso de defeito. / 1.1.22 - O prêmio a ser distribuído destina-se ao
	//           participante contemplado, e será entregue no nome do mesmo, sendo vedada sua transferência antes da entrega. / 1.1.23 - Na eventualidade do participante contemplado vir a falecer, o prêmio será
	//           entregue ao seu inventariante, que deverá comprovar tal condição. / 1.1.24 - O prêmio não pode ser trocado por outro, muito menos convertido em dinheiro, consoante previsão do parágrafo 3º do artigo 1º
	//           da lei 5.768/71. / 1.1.25 - Caso os prêmios não sejam distribuídos, serão recolhidos para o tesouro nacional. Critério para ter direito ao prêmio: 1.2.1 - Para ter direito ao prêmio o sorteado deverá ter
	//           preenchido corretamente o cupom de participação com os seus dados, bem como responder corretamente a seguinte pergunta: Qual o melhor sistema de rastreamento do Brasil? ( ) Sattrack/Ctrack ( )
	//           Outros / DATA, HORÁRIO E ENDEREÇO COMPLETO DA APURAÇÃO: 2.1 - Às 12h30 do dia 26/01/2018, no Programa de Televisão do Carlos Camargo, exibido ao vivo pela rede Massa (SBT)</p>
	//     </div>
	//     <div class="modal-footer">
	//       <a class="modal-action modal-close waves-effect waves-green btn-flat left">Fechar</a>
	//     </div>
	//   </div>
})();
