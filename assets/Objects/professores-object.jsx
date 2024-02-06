const professoresObject = [
    {
        Nome: "Sébastien Roland Marie Joseph Rondineau",
        Foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFeIjX-NyJas36lONGBlrPiwsM1MoHF8J1lSBf1KN&s",
        Resumo:"IEEE Senior Member. - Possui Mestrado em Ciências da Computação, Processamento de Sinais e Telecom. - Université de Rennes 1 (1999) e Doutorado em Processamento de sinais e telecomunicações - Université de Rennes 1 (2002), Rennes, França. - É Professor Adjunto (desde fevereiro 2015) em Sistemas de Telecomunicações nos departamentos Aeroespacial e Eletrônica, Faculdade do Gama, Universidade de Brasília - UnB, DF, Brasil. - Atua no PPGEE (pós-graduação em Engenharia Elétrica da UnB) e no PPMEC (pós-graduação em Sistemas Mecatrônicos da UnB). - Dirige (desde 2016) do Lab Telecom - LCEPT da UnB. - Foi Pós Doutor (2002-2006) e Professor/Pesquisador (2006-2008) - University of Colorado, Colorado, EEUU. - Foi Professor no UniCEUB (2014), Brasília, DF. - Foi Sócio e/ou diretor de várias empresas brasileiras de tecnologia. - Tem experiência na área de Engenharia Elétrica, com ênfase em Sistemas, Guerra Eletrônica, Teoria Eletromagnética, Micro-ondas, Propagação de Ondas, Antenas, atuando principalmente nos seguintes temas: antenas muilti-feixe, lentes dielétricas, antenna arrays, discrete lens array e antenas planares/conformes e micro-ondas, modelagem eletromagnética e ótica, circuitos, retificação / modulação de sinais Laser/THz e RF, Radio Defined by Software, RFID, equipamento e Gateway para IoT, otimização convexa, Machine Learning. - Tem 23 anos de experiência em engenharia de sistemas / elétrica, Modelagem eletromagnética / óptica (Técnicas analíticas/numéricas), Antenas e Circuitos (Passivos / ativos, até micro-ondas) - Foi engenheiro de pesquisa estagiário na Agência Especial Europeia ESA-ESTEC (1999), Noordwijk-aan-Zee, Holanda - Foi pesquisador subcontratado. Por agências / empresas da defesa, aeroespaciais e de telecomunicações: Raytheon, BAE Systems (ex British Aerospace), NASA, Air Force Research Labs (Laboratório da Força Aérea Americana), Office of Naval Research (Escritório de Pesquia da Marinha), Thales Alenia Space (ex Alcatel Space Industries), European Space Agency (Agência Espacial Europeia).",
        Curriculo: {
            lattes: "http://lattes.cnpq.br/7293346445799114",
            orcid: "https://orcid.org/0000-0001-7894-3971",
            pesquisarUnB: "http://www.pesquisar.unb.br/professor/sebastien-roland-marie-joseph-rondineau",
            linkedIn: "https://www.linkedin.com/in/sebastienrondineau/"
        },
        Email: "sebastien@unb.br",
        Telefone: "(61) 983431144",
        EndereçoProfissional: "Universidade de Brasília, Campus Gama, Sala 31, Área Especial de Indústria Projeção A - UNB -Setor Leste (Gama) -  CEP: 72444240 - Brasília, DF - Brasil",
    },
    {
        Nome:"Daniel Costa Araújo",
        Foto: "data:image/jpeg;base64,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",
        Resumo: "Possui graduação em Engenharia de Telecomunicações pela Universidade de Fortaleza (2010), mestrado e doutorado em Engenharia de Teleinformática obtidos na Universiade Federal do Ceará em 2012 e 2016, respectivamente. Foi membro do Grupo de Pesquisa em Telecomunicações Sem Fio (GTEL), atuando na área de na Processamento de Sinais para Comunicações Sem Fio. Em 2013, foi pesquisador visitante na Ericsson Research Labs, Estocolmo, Suécia. Em 2015, participou de estágio doutoral por um período de 1 ano na mesma Ericsson, onde ficou envolvido em atividades de pesquisa relacionadas ao 5G da empresa em parceria com o grupo de pesquisa GTEL. Atualmente é membro do grupo de pesquisa Processamento de Sinais para Análise de Dados e Aprendizado de Sistemas (SIPRAL) e, desde 2019, é professor da Universidade de Brasília, onde atua nas áreas de processamento de arranjo, estimação de canal para sistemas de comunicação MIMO massivo e processamento estatístico de sinais.",
        Curriculo: {
            lattes: "http://lattes.cnpq.br/4333596254925501",
            orcid: "https://orcid.org/0000-0002-9107-1300",
            pesquisarUnB: "http://pesquisar.unb.br/professor/daniel-costa-araujo",

        },
        Email: "daniel.araujo@unb.br",
        Telefone: "(61) 3107-8904"
    },
    {
        Nome:"Adoniran Judson de Barros Braga",
        Foto: "http://ft.unb.br/images/fotos/professores/ene-adoniran-judson-braga.jpg",
        Resumo: "Professor da Universidade de Brasília desde 2009. Possui doutorado em Eletrônica e Comunicações pela Telecom ParisTech em Paris (2002-2006) e pós-doutorados no NIST de Maryland (2007-2008) e ENSTA em Paris (2008-2009). Tem experiência na área de Engenharia Elétrica, com ênfase em Sistemas de Comunicações, Propagação de Ondas, Antenas e Tratamento de Arranjo de Sensores, atuando principalmente nos seguintes temas: modelagem de canais de propagação, antenas, e sistemas de comunicação. O professor tem experiência laboratorial na implementação de sistemas de comunicação, radares e estimadores de parâmetros de canal de propagação. Participou de diversas projetos de pesquisa de financiamento público e privado. Participou de comissões acadêmicas como o NDE do curso de Eng. de Redes de Comunicação da UnB e científica como a comissão gestora do PPGEE da UnB.",
        Curriculo: {
            lattes: "http://lattes.cnpq.br/4323733280735046",
            orcid: "https://orcid.org/0000-0002-1254-4107",
            pesquisarUnB: "http://pesquisar.unb.br/professor/adoniran-judson-de-barros-braga",

        },
        Email: "jbraga@ene.unb.br",
        Telefone: "(61) 3107-5745"
    },
    {
        Nome:"Leonardo Rodrigues Araújo Xavier de Menezes",
        Foto: "http://ft.unb.br/images/fotos/professores/ene-leonardo-rodrigues-menezes.jpg",
        Resumo: "Leonardo Rodrigues Araujo Xavier de Menezes concluiu o doutorado em Engenharia Eletrica - University of Victoria em 1996. Atualmente é Professor associado da Universidade de Brasília. Atua na área de Engenharia Elétrica, com ênfase em Teoria Eletromagnetica, Microondas, Propagação de Ondas, Antenas.",
        Curriculo: {
            lattes: "http://lattes.cnpq.br/9279262545449206",
            orcid: "https://orcid.org/",
            pesquisarUnB: "http://pesquisar.unb.br/professor/leonardo-rodrigues-araujo-xavier-de-menezes",

        },
        Email: "leonardo@ene.unb.br",
        Telefone: "(61) 3107-5561"
    },
    {
        Nome:"Daniel Orquiza de Carvalho",
        Foto: "http://ft.unb.br/images/fotos/professores/ene-daniel-orquiza-carvalho.jpg",
        Resumo: "Atualmente é Professor do Dep. de Engenharia Elétrica da Universidade de Brasília (UnB). Possui graduação em Engenharia Elétrica (Sistemas Eletrônicos) pela Escola Politécnica da Universidade de São Paulo (2005), mestrado (2008) e doutorado (2012) em Engenharia Elétrica pela Universidade de São Paulo, com estágio de 4 meses no Centro Nacional de Microeletrônica (CNM), em Barcelona, Espanha, e pós-doutorados pela Universidade Estadual de Campinas em 2012 e no grupo de Nanofotônica da Universidade de Cornell, Estados Unidos (2012-2014). Atua principalmente nos seguintes temas: fotônica integrada, óptica não linear, eletromagnetismo computacional, dispositivos ópticos com aplicação em comunicações ópticas e sensores ópticos.",
        Curriculo: {
            lattes: "http://lattes.cnpq.br/8365033819367156",
            orcid: "https://orcid.org/0000-0002-0518-2021",
            pesquisarUnB: "http://pesquisar.unb.br/professor/daniel-orquiza-de-carvalho",

        },
        Email: "daniel.orquiza@ene.unb.br",
        Telefone: "(61) 3107-5577"
    },
    {
        Nome:"Achiles Fontana da Mota",
        Foto: "http://ft.unb.br/images/fotos/professores/ene-achiles-fontana-mota.jpg",
        Resumo: "Trabalha como Professor do Dep. de Engenharia Elétrica da UnB desde 2019. Possui doutorado na área de telecomunicações pela Universidade de São Paulo (USP) com cotutela pela Vrije Universiteit Brussels (VUB). Durante o doutorado, realizou em estágio de 1 ano no exterior com bolsas BeMundus e PDSE. Em 2022-23, realizou um pós-doutorado na Northeastern University desenvolvendo métodos numéricos para eletromagnetismo sobre a supervisão do Prof. Hossein Mossalaei. Possui mestrado e graduação em Engenharia Elétrica/Eletrônica com ênfase em Telecomunicações pela USP/São Carlos e especialização em Redes e Sistemas de Telecomunicações pelo Instituto Nacional de Telecomunicações (INATEL). Durante a carreira, participou de diversos projetos de pesquisa com financiamento público, tendo resultado em múltiplas publicações em periódicos internacionais, os quais também atua como revisor esporadicamente. Tem experiência e interesse nas áreas de metamateriais, metasuperfícies, modelagem eletromagnética, biossensores, telecomunicações.",
        Curriculo: {
            lattes: "http://lattes.cnpq.br/1900370546890907",
            orcid: "https://orcid.org/0000-0003-1221-1801",
            pesquisarUnB: "http://pesquisar.unb.br/professor/achiles-fontana-da-mota",
        },
        Email: "achiles.mota@ene.unb.br",
        Telefone: "(61) 3107-5567"
    }
];

export default professoresObject;