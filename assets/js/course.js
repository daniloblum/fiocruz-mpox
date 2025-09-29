const course = {
  modules: [
    {
      title: "Módulo 1: Conceitos básicos sobre a Mpox",
      items: [
        { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo1/apresentacao.html" },
        {
          type: "accordion",
          title: "Aula 1 | Mpox: a doença, o vírus e a epidemiologia",
          items: [
            { type: "link", icon: "lesson", title: "Introdução", path: "/modulo1/aula1/introducao.html" },
            { type: "link", icon: "lesson", title: "Tópico 1: Histórico: origem da doença e do nome", path: "/modulo1/aula1/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2: Diferença entre varíola e a Mpox", path: "/modulo1/aula1/topico2.html" },
            { type: "link", icon: "lesson", title: "Tópico 3: Visão geral do vírus e sua biologia", path: "/modulo1/aula1/topico3.html" },
            { type: "link", icon: "lesson", title: "Tópico 4: A epidemiologia", path: "/modulo1/aula1/topico4.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 2 | Transmissão, sinais e sintomas e diagnóstico",
          items: [
            { type: "link", icon: "lesson", title: "Introdução", path: "/modulo1/aula2/introducao.html" },
            { type: "link", icon: "lesson", title: "Tópico 1: Sinais e sintomas clínicos", path: "/modulo1/aula2/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2: Desenvolvimento de formas graves", path: "/modulo1/aula2/topico2.html" },
            { type: "link", icon: "lesson", title: "Tópico 3: Diagnóstico clínico, diferencial e laboratorial", path: "/modulo1/aula2/topico3.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 3 | Tratamento e prevenção",
          items: [
            { type: "link", icon: "lesson", title: "Introdução", path: "/modulo1/aula3/introducao.html" },
            { type: "link", icon: "lesson", title: "Tópico 1: Tratamento", path: "/modulo1/aula3/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2: Medidas de prevenção e controle da infecção", path: "/modulo1/aula3/topico2.html" },
            { type: "link", icon: "lesson", title: "Tópico 3: Medidas de proteção ao trabalhador da APS (atenção primária à saúde) na Unidade Básica de Saúde", path: "/modulo1/aula3/topico3.html" },
            { type: "link", icon: "lesson", title: "Tópico 4: Medidas de proteção ao trabalhador da APS (atenção primária à saúde) nas visitas aos domicílios com casos suspeitos", path: "/modulo1/aula3/topico4.html" }
          ]
        },
        { type: "link", icon: "activity", title: "Atividade", path: "/modulo1/atividade.html" },
        { type: "link", icon: "closing", title: "Encerramento do módulo", path: "/modulo1/encerramento.html" }
      ]
    },

    {
      title: "Módulo 2: O processo de notificação da Mpox e o papel do profissional de nível médio",
      items: [
        { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo2/apresentacao.html" },
        {
          type: "accordion",
          title: "Aula 1 | O registro da Mpox no sistema de informação em saúde",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo2/aula1/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo2/aula1/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 2 | Como realizar o processo de notificação da Mpox",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo2/aula2/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo2/aula2/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 3 | Aspectos éticos no registro da Mpox com ênfase nos ambientes digitais",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo2/aula3/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo2/aula3/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 4 | O protagonismo dos profissionais de Nível Médio no registro e informação sobre a Mpox",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo2/aula4/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo2/aula4/topico2.html" }
          ]
        },
        { type: "link", icon: "activity", title: "Atividade", path: "/modulo2/atividade.html" },
        { type: "link", icon: "closing", title: "Encerramento do módulo", path: "/modulo2/encerramento.html" }
      ]
    },

    {
      title: "Módulo 3: Mpox no sistema de saúde: os desafios da prática educativa para a sua prevenção",
      items: [
        { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo3/apresentacao.html" },
        {
          type: "accordion",
          title: "Aula 1 | Prevenção e o papel dos profissionais de saúde na suspeita, encaminhamento e acompanhamento de casos",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo3/aula1/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo3/aula1/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 2 | Educação em saúde",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo3/aula2/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo3/aula2/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 3 | Educação popular em saúde e o planejamento de atividades educativas",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo3/aula3/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo3/aula3/topico2.html" }
          ]
        },
        { type: "link", icon: "activity", title: "Atividade", path: "/modulo3/atividade.html" },
        { type: "link", icon: "closing", title: "Encerramento do módulo", path: "/modulo3/encerramento.html" }
      ]
    },

    {
      title: "Módulo 4: Mpox: a importância das ações de vigilância em saúde",
      items: [
        { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo4/apresentacao.html" },
        {
          type: "accordion",
          title: "Aula 1 | Vigilância em Saúde",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo4/aula1/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo4/aula1/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 2 | Informações na gestão de risco da Mpox",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo4/aula2/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo4/aula2/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 3 | A vigilância da Mpox no território",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo4/aula3/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo4/aula3/topico2.html" }
          ]
        },
        {
          type: "accordion",
          title: "Aula 4 | Ações educativas e comunicativas de vigilância em saúde",
          items: [
            { type: "link", icon: "lesson", title: "Tópico 1", path: "/modulo4/aula4/topico1.html" },
            { type: "link", icon: "lesson", title: "Tópico 2", path: "/modulo4/aula4/topico2.html" }
          ]
        },
        { type: "link", icon: "activity", title: "Atividade", path: "/modulo4/atividade.html" },
        { type: "link", icon: "closing", title: "Encerramento do módulo", path: "/modulo4/encerramento.html" }
      ]
    }
  ]
};
