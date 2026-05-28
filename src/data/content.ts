import {
  CalendarItem,
  CurriculumPeriod,
  CurriculumStage,
  FAQ,
  Highlight,
  Lab,
  NavItem,
  NewsItem,
  Person,
  QuickAction,
  ResourceItem,
  Stat,
} from '../types';

export const siteMeta = {
  name: 'Engenharia Biomédica UFRN',
  subtitle: 'UFRN · Centro de Tecnologia',
  email: 'engbio@ct.ufrn.br',
  departmentEmail: 'deb@ct.ufrn.br',
  campus: 'Centro de Tecnologia — UFRN, Natal/RN',
};

export const navItems: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'O curso', path: '/curso' },
  { label: 'Graduação', path: '/graduacao' },
  { label: 'Pesquisa', path: '/pesquisa' },
  { label: 'Pessoas', path: '/pessoas' },
  { label: 'Informativos', path: '/informativos' },
  { label: 'Contato', path: '/contato' },
];

export const heroStats: Stat[] = [
  {
    value: '40',
    label: 'vagas semestrais',
    detail: 'Oferta no turno noturno para o segundo ciclo.',
  },
  {
    value: '3.700h',
    label: 'carga horária mínima',
    detail: 'Curso com duração prevista de 11 períodos letivos.',
  },
  {
    value: '2 ciclos',
    label: 'formação acadêmica',
    detail: 'Percurso dividido entre ciclo básico e ciclo profissional.',
  },
  {
    value: 'CT',
    label: 'base institucional',
    detail: 'Curso vinculado ao Centro de Tecnologia da UFRN.',
  },
];

export const quickActions: QuickAction[] = [
  {
    title: 'Quero ingressar',
    description: 'Veja como funciona o acesso ao segundo ciclo e as vagas do curso.',
    path: '/curso',
  },
  {
    title: 'Preciso de documentos',
    description: 'Encontre regulamentos, modelos, resoluções e recursos da graduação.',
    path: '/graduacao',
  },
  {
    title: 'Busco estágio ou oportunidade',
    description: 'Acesse informativos, editais e publicações recentes do curso.',
    path: '/informativos',
  },
  {
    title: 'Quero falar com a coordenação',
    description: 'Consulte os canais institucionais do curso e do departamento.',
    path: '/contato',
  },
];

export const homepageHighlights: Highlight[] = [
  {
    eyebrow: 'Formação',
    title: 'Integração entre exatas, tecnologia e saúde',
    description:
      'O curso reúne engenharia, matemática, física, biologia e medicina em ambiente colaborativo e multidisciplinar.',
  },
  {
    eyebrow: 'Profissão',
    title: 'Atuação em diagnóstico, terapia, reabilitação e pesquisa',
    description:
      'O engenheiro biomédico pode atuar em hospitais, clínicas, universidades, institutos de pesquisa e empresas da área médica.',
  },
  {
    eyebrow: 'Graduação',
    title: 'Portal com documentos, estágio, TCCs e datas importantes',
    description:
      'O site público do curso reúne áreas como Documentos, Estágio, Estrutura Curricular, TCCs, Docentes e Informativos.',
  },
];

export const calendarItems: CalendarItem[] = [
  {
    date: '11 ago 2025',
    title: 'Início das aulas — 2025.2',
    description: 'Marco principal do semestre letivo publicado na página pública de datas importantes.',
  },
  {
    date: '31 out 2025',
    title: 'Prazo para solicitação de suspensão de curso',
    description: 'Data importante para estudantes acompanharem os procedimentos acadêmicos do período.',
  },
  {
    date: '20 dez 2025',
    title: 'Término das aulas — 2025.2',
    description: 'Encerramento previsto do período letivo informado pelo curso.',
  },
];

export const courseHighlights: Highlight[] = [
  {
    title: 'Apresentação do curso',
    description:
      'O SIGAA apresenta o curso como uma excelente oportunidade para estudantes interessados em pesquisa e treinamento na área de engenharia aplicada à saúde.',
    link: 'https://sigaa.ufrn.br/sigaa/public/curso/portal.jsf?id=85341136&lc=pt_BR',
    external: true,
  },
  {
    title: 'Como ingressar',
    description:
      'O ingresso ocorre no segundo ciclo, com preenchimento das vagas por alunos oriundos do Bacharelado em Ciências e Tecnologia e por reingresso de cursos correlatos.',
    link: 'https://sigaa.ufrn.br/sigaa/public/curso/secao_extra.jsf?extra=911074500&id=85341136&lc=pt_BR',
    external: true,
  },
  {
    title: 'Carreira e emprego',
    description:
      'A atuação profissional inclui manutenção hospitalar, desenvolvimento de produtos médicos e pesquisa acadêmica aplicada à saúde.',
    link: 'https://sigaa.ufrn.br/sigaa/public/curso/secao_extra.jsf?extra=911074502&id=85341136&lc=pt_BR',
    external: true,
  },
];

export const programPillars: Highlight[] = [
  {
    title: 'Base multidisciplinar',
    description: 'Integra engenharia, matemática, física, biologia e medicina em ambiente colaborativo.',
  },
  {
    title: 'Dois ciclos de formação',
    description: 'A trajetória acadêmica combina ciclo básico e ciclo profissional, alinhados às competências do curso.',
  },
  {
    title: 'Subáreas profissionalizantes',
    description:
      'O projeto pedagógico destaca Engenharia Tecidual, Neuroengenharia, Engenharia de Reabilitação, Engenharia Médica e Engenharia Clínica.',
  },
  {
    title: 'Perfil do egresso',
    description:
      'A formação busca desenvolver competências técnicas, atuação em equipes multidisciplinares, ética e atualização profissional permanente.',
  },
];

export const graduationResources: ResourceItem[] = [
  {
    title: 'Datas importantes',
    category: 'Calendário',
    description: 'Página pública com marcos do período letivo e prazos acadêmicos do curso.',
    href: 'https://eb.ct.ufrn.br/datas-importantes/',
    external: true,
  },
  {
    title: 'Estrutura curricular',
    category: 'Guia',
    description: 'Consulte no próprio portal a visão geral da matriz, a divisão por ciclos e a grade por nível.',
    href: '/graduacao#estrutura-curricular',
    external: false,
  },
  {
    title: 'Documentos do curso',
    category: 'Documento',
    description: 'Atividades complementares, estágio supervisionado e outros regulamentos relevantes.',
    href: 'https://eb.ct.ufrn.br/documentos/',
    external: true,
  },
  {
    title: 'Resolução de TCC',
    category: 'TCC',
    description: 'Norma pública com regras, etapas e fluxo do trabalho de conclusão de curso.',
    href: 'https://eb.ct.ufrn.br/wp-content/uploads/2023/12/Resolu%C3%A7%C3%A3o_01-2023-CCEB_TCC.pdf',
    external: true,
  },
  {
    title: 'Modelo de TCC',
    category: 'TCC',
    description: 'Arquivo-base para orientar a estrutura e a padronização da escrita final.',
    href: 'https://eb.ct.ufrn.br/wp-content/uploads/2019/03/Anexo-I-Modelo-de-TCC_V03.docx',
    external: true,
  },
  {
    title: 'Resolução de estágio supervisionado',
    category: 'Estágio',
    description: 'Documento público recente com procedimentos e submissão por e-mail da coordenação.',
    href: 'https://eb.ct.ufrn.br/wp-content/uploads/2025/07/Minuta-da-Resolu%C3%A7%C3%A3o_01-2025-CCEB_Est%C3%A1gio-Supervisionado.pdf',
    external: true,
  },
  {
    title: 'Regimento da graduação UFRN',
    category: 'Documento',
    description: 'Normas institucionais úteis para orientar rotinas acadêmicas e decisões do estudante.',
    href: 'https://sigaa.ufrn.br/sigaa/public/curso/documentos.jsf?id=85341136&lc=pt_BR&nivel=G',
    external: true,
  },
  {
    title: 'TCCs de acesso público',
    category: 'TCC',
    description: 'Coleção de trabalhos para consulta, referência de temas e acompanhamento da produção discente.',
    href: 'https://eb.ct.ufrn.br/tccs/',
    external: true,
  },
];


export const curriculumStages: CurriculumStage[] = [
  {
    title: 'Primeiro ciclo — Bacharelado em Ciências e Tecnologia',
    periodRange: '1º ao 7º períodos',
    description:
      'A organização geral publicada pelo curso informa que os sete primeiros semestres correspondem ao primeiro ciclo, cursado no Bacharelado em Ciências e Tecnologia.',
    items: [
      'Formação em matemática, computação, física, química e modelagem',
      'Base para materiais, mecânica, eletricidade e expressão gráfica',
      'Leitura, escrita acadêmica e componentes de ciência, tecnologia e sociedade',
    ],
  },
  {
    title: 'Segundo ciclo — Engenharia Biomédica',
    periodRange: '8º ao 11º períodos',
    description:
      'A formação específica aprofunda a interface entre engenharia, tecnologia e saúde, com componentes profissionalizantes e atividades de conclusão.',
    items: [
      'Sistemas de informação em saúde, biofísica, fisiologia e neuroengenharia',
      'Instrumentação hospitalar, órteses e próteses, engenharia clínica e projeto biomédico',
      'Processamento de sinais e imagens, estágio supervisionado, TCC e atividades complementares',
    ],
  },
];

const discipline = (
  code: string,
  name: string,
  hours: string,
  summary?: string,
) => ({
  code,
  name,
  hours,
  summary,
});

export const curriculumReferencePeriods: CurriculumPeriod[] = [
  {
    period: '1º período',
    shortLabel: '1º',
    workload: '420h',
    group: 'Básico',
    items: [
      discipline('ECT1101', 'Fundamentos de Matemática', '60h', 'Base quantitativa para acompanhar cálculo, modelagem e outras disciplinas do ciclo inicial.'),
      discipline('ECT1102', 'Cálculo I', '60h', 'Desenvolve o raciocínio analítico usado em modelagem, física e engenharia.'),
      discipline('ECT1103', 'Informática Fundamental', '60h', 'Introduz ferramentas computacionais e lógica aplicada à formação em tecnologia.'),
      discipline('ECT1104', 'Química Tecnológica', '60h', 'Apresenta fundamentos de química importantes para materiais, processos e saúde.'),
      discipline('ECT1105', 'Prática de Leitura e Escrita', '30h', 'Fortalece leitura acadêmica, produção textual e comunicação universitária.'),
      discipline('ECT1106', 'Ciência, Tecnologia e Sociedade I', '30h', 'Discute o papel social da ciência e da tecnologia na formação do estudante.'),
      discipline('ECT1107', 'Vetores e Geometria Analítica', '60h'),
      discipline('ECT1108', 'Metodologia Científica e Tecnológica', '60h'),
    ],
  },
  {
    period: '2º período',
    shortLabel: '2º',
    workload: '420h',
    group: 'Básico',
    items: [
      discipline('ECT1201', 'Álgebra Linear', '60h'),
      discipline('ECT1202', 'Cálculo II', '60h'),
      discipline('ECT1203', 'Linguagem de Programação', '60h'),
      discipline('ECT1204', 'Princípios e Fenômenos da Mecânica', '60h'),
      discipline('ECT1205', 'Prática de Leitura e Escrita II', '30h'),
      discipline('ECT1206', 'Ciência, Tecnologia e Sociedade II', '30h'),
      discipline('ECT1207', 'Laboratório de Programação', '60h'),
      discipline('ECT1208', 'Química Experimental', '60h'),
    ],
  },
  {
    period: '3º período',
    shortLabel: '3º',
    workload: '420h',
    group: 'Básico',
    items: [
      discipline('ECT1301', 'Probabilidade e Estatística', '60h'),
      discipline('ECT1302', 'Cálculo Aplicado', '60h'),
      discipline('ECT1303', 'Computação Numérica', '60h'),
      discipline('ECT1304', 'Princípios e Fenômenos Térmicos e Ondulatórios', '60h'),
      discipline('ECT1305', 'Princípios e Fenômenos Eletromagnéticos', '60h'),
      discipline('ECT1306', 'Ciência, Tecnologia e Sociedade III', '30h'),
      discipline('ECT1307', 'Práticas de Leitura e Escrita em Inglês', '30h'),
      discipline('ECT1308', 'Métodos Experimentais', '60h'),
    ],
  },
  {
    period: '4º período',
    shortLabel: '4º',
    workload: '390h',
    group: 'Básico',
    items: [
      discipline('ECT1401', 'Ciência e Tecnologia dos Materiais', '60h'),
      discipline('ECT1402', 'Mecânica dos Sólidos', '60h'),
      discipline('ECT1403', 'Mecânica dos Fluidos', '60h'),
      discipline('ECT1404', 'Eletricidade Aplicada', '60h'),
      discipline('ECT1405', 'Modelagem Integrada', '60h'),
      discipline('ECT1406', 'Expressão Gráfica', '60h'),
      discipline('ECT1407', 'Projeto Integrador em C&T', '30h'),
    ],
  },
  {
    period: '5º período',
    shortLabel: '5º',
    workload: '300h',
    group: 'Transição',
    items: [
      discipline('DEB0501', 'Bases Cinesiológicas e Biomecânicas do Movimento Humano', '90h'),
      discipline('DEB0502', 'Introdução à Engenharia Biomédica', '30h'),
      discipline('DEB0503', 'Sistemas de Informação na Saúde', '60h'),
      discipline('MOR0070', 'Bloco Morfológico', '120h'),
    ],
  },
  {
    period: '6º período',
    shortLabel: '6º',
    workload: '300h',
    group: 'Transição',
    items: [
      discipline('DBF3003', 'Biofísica', '60h'),
      discipline('DEB0601', 'Implantes Odonto-Médicos', '60h'),
      discipline('DEB0602', 'Processos e Certificação de Software em Saúde', '60h'),
      discipline('DEB0603', 'Sinais e Sistemas', '60h'),
      discipline('DFS0028', 'Fisiologia', '60h'),
    ],
  },
  {
    period: '7º período',
    shortLabel: '7º',
    workload: '300h',
    group: 'Transição',
    items: [
      discipline('DEB0701', 'Resistência dos Materiais', '60h'),
      discipline('DEB0705', 'Eletrônica Analógica', '60h'),
      discipline('DEB0706', 'Biossegurança e Bioética', '60h'),
      discipline('DEB0707', 'Introdução à Neuroengenharia', '60h'),
      discipline('DEB0708', 'Metrologia', '60h'),
    ],
  },
  {
    period: '8º período',
    shortLabel: '8º',
    workload: '300h',
    group: 'Profissionalizante',
    items: [
      discipline('DEB0804', 'Processamento Digital de Sinais', '60h'),
      discipline('DEB0822', 'Instrumentação Hospitalar', '60h'),
      discipline('DEB0824', 'Cirurgia e Reabilitação Bucomaxilar', '60h'),
      discipline('DEB0902', 'Órteses e Próteses', '60h'),
      discipline('DEB1108', 'Algoritmo e Programação Orientada a Objetos', '60h'),
    ],
  },
  {
    period: '9º período',
    shortLabel: '9º',
    workload: '300h',
    group: 'Profissionalizante',
    items: [
      discipline('DEB0920', 'Engenharia Tecidual', '60h'),
      discipline('DEB0921', 'Técnicas de Análise Estrutural e Projeto', '60h'),
      discipline('DEB0922', 'Engenharia Clínica', '60h'),
      discipline('DEB0923', 'Processamento Digital de Imagens I', '60h'),
      discipline('DEB0924', 'Projeto Biomédico', '60h'),
    ],
  },
  {
    period: '10º período',
    shortLabel: '10º',
    workload: '180h',
    group: 'Conclusão',
    items: [
      discipline('DEB1004', 'Biotecnologia Aplicada à Saúde', '60h'),
      discipline('DEB1107', 'Empreendedorismo na Saúde', '60h'),
      discipline('DEB1201', 'Atividades Complementares', '60h'),
    ],
  },
  {
    period: '11º período',
    shortLabel: '11º',
    workload: '250h',
    group: 'Conclusão',
    items: [
      discipline('DEB1202', 'Trabalho de Conclusão de Curso', '60h'),
      discipline('DEB1203', 'Estágio Obrigatório Supervisionado', '160h'),
      discipline('DEB1204', 'Seminários Integradores em Engenharia Biomédica', '30h'),
    ],
    note: 'Visualização interna do portal com foco em leitura rápida da matriz curricular. Para detalhes acadêmicos oficiais, o curso mantém a referência institucional no SIGAA e em seus documentos públicos.',
  },
];

export const labs: Lab[] = [
  {
    name: 'LAPSIM — Laboratório de Aquisição e Processamento de Sinais e Imagens Médicas',
    type: 'Laboratório',
    summary: 'Espaço laboratorial apresentado publicamente no curso, localizado no CTEC.',
    detail:
      'O curso destaca atividades e disciplinas ministradas em laboratórios para dar suporte à formação acadêmica.',
    href: 'https://eb.ct.ufrn.br/laboratorios/',
  },
  {
    name: 'Engenharia Clínica',
    type: 'Frente acadêmica',
    summary: 'Frente aplicada à gestão, manutenção, calibração e qualificação de equipamentos médicos.',
    detail: 'Relaciona-se à atuação em hospitais, clínicas e serviços especializados em tecnologia em saúde.',
  },
  {
    name: 'Neuroengenharia',
    type: 'Frente acadêmica',
    summary: 'Subárea destacada no projeto pedagógico como parte dos conteúdos profissionalizantes.',
    detail: 'Conecta o curso a aplicações avançadas em sinais, sistemas biomédicos e inovação em saúde.',
  },
  {
    name: 'Engenharia de Reabilitação',
    type: 'Frente acadêmica',
    summary: 'Área voltada a acessibilidade, dispositivos assistivos e soluções clínicas.',
    detail: 'Amplia a interface entre tecnologia, qualidade de vida e cuidado em saúde.',
  },
  {
    name: 'Engenharia Tecidual',
    type: 'Frente acadêmica',
    summary: 'Expressa a amplitude científica do curso em biomateriais, saúde e pesquisa translacional.',
    detail: 'Mostra a diversidade de frentes acadêmicas previstas na formação em Engenharia Biomédica.',
  },
];

export const people: Person[] = [
  {
    name: 'Luciana de Andrade Mendes',
    role: 'Coordenadora do curso',
    team: 'Coordenação',
    summary: 'Contato principal da graduação e referência pública da coordenação do curso.',
    href: 'https://eb.ct.ufrn.br/coordenacao/',
  },
  {
    name: 'Karilany Dantas Coutinho',
    role: 'Chefe do departamento',
    team: 'Departamento',
    summary: 'Responsável pela chefia do Departamento de Engenharia Biomédica.',
    href: 'https://eb.ct.ufrn.br/departamento/',
  },
  {
    name: 'Danilo Alves Pinto Nagem',
    role: 'Vice-chefe do departamento',
    team: 'Departamento',
    summary: 'Apoio à gestão departamental e ponto de contato institucional complementar.',
    href: 'https://eb.ct.ufrn.br/departamento/',
  },
  {
    name: 'Denise da Silva Dantas',
    role: 'Assistente administrativa',
    team: 'Técnicos',
    summary: 'Referência administrativa exibida na página pública de técnicos do curso.',
    href: 'https://eb.ct.ufrn.br/tecnicos-administrativos-2/',
  },
  {
    name: 'Antonio Moliterno de Oliveira Neto',
    role: 'Docente',
    team: 'Docentes',
    summary: 'Integrante do corpo docente listado publicamente no portal do curso.',
    href: 'https://eb.ct.ufrn.br/docentes/',
  },
  {
    name: 'Beatriz Stransky Ferreira',
    role: 'Docente',
    team: 'Docentes',
    summary: 'Docente listada na página pública de professores do curso.',
    href: 'https://eb.ct.ufrn.br/docentes/',
  },
  {
    name: 'Caroline Dantas Vilar',
    role: 'Docente',
    team: 'Docentes',
    summary: 'Docente apresentada no diretório público institucional.',
    href: 'https://eb.ct.ufrn.br/docentes/',
  },
];

export const peopleFilters = ['Todos', 'Coordenação', 'Departamento', 'Docentes', 'Técnicos'] as const;

export const featuredTccs: Highlight[] = [
  {
    title: 'O legado da CORE Engenharia Biomédica',
    description: 'Trabalho público disponível na biblioteca de TCCs do curso.',
    link: 'https://eb.ct.ufrn.br/wp-content/uploads/2025/01/TCC-AMANDA-CILENE-FERREIRA-DE-AZEVEDO.pdf',
    external: true,
  },
  {
    title: 'Avaliando retenção e trajetória acadêmica no curso',
    description: 'TCC público com foco em permanência estudantil e desafios da graduação.',
    link: 'https://eb.ct.ufrn.br/wp-content/uploads/2024/02/TCC_2023.2_WELLINGTON-NOBREGA-FERNANDES.pdf',
    external: true,
  },
  {
    title: 'Biblioteca de TCCs do curso',
    description: 'Página pública para consulta de monografias e trabalhos concluídos.',
    link: 'https://eb.ct.ufrn.br/tccs/',
    external: true,
  },
];

export const newsItems: NewsItem[] = [
  {
    title: 'Programa CAPES/BRAFITEC 2026',
    date: '12 mar 2026',
    category: 'Oportunidade',
    summary: 'Mobilidade internacional divulgada aos estudantes do curso como oportunidade acadêmica.',
    href: 'https://eb.ct.ufrn.br/2026/03/12/%F0%9F%93%A2-mais-uma-oportunidade-de-mobilidade-internacional-programa-capes-brafitec-2026/',
  },
  {
    title: 'Recepção aos calouros de Engenharia Biomédica',
    date: '15 ago 2025',
    category: 'Acolhimento',
    summary: 'Publicação de acolhimento e integração para estudantes ingressantes.',
    href: 'https://eb.ct.ufrn.br/2025/08/15/%F0%9F%8E%89-bem-vindos-novos-biomedicos-%F0%9F%8E%89recepcao-aos-calouros-de-engenharia-biomedica/',
  },
  {
    title: 'Vaga para professor efetivo do Departamento de Engenharia Biomédica',
    date: '03 jun 2025',
    category: 'Edital',
    summary: 'Divulgação pública de processo seletivo com inscrições online via SIGRH.',
    href: 'https://eb.ct.ufrn.br/2025/06/03/vaga-para-professor-efetivo-do-departamento-de-engenharia-biomedica/',
  },
  {
    title: 'InovaSC — inovação na saúde coletiva',
    date: '01 jul 2025',
    category: 'Evento',
    summary: 'Chamada pública conectando inovação, transformação digital e gestão inteligente no SUS.',
    href: 'https://eb.ct.ufrn.br/2025/07/01/estao-abertas-as-inscricoes-para-o-inovasc-inovacao-na-saude-coletiva-para-a-transformacao-digital-e-gestao-inteligente-no-sus/',
  },
  {
    title: 'Eleições para coordenação e chefia do departamento',
    date: '27 nov 2024',
    category: 'Institucional',
    summary: 'Comunicado sobre eleição para coordenador, vice-coordenador, chefe e vice-chefe.',
    href: 'https://eb.ct.ufrn.br/2024/11/27/eleicoes-para-coordenador-vice-coordenador-chefe-e-vice-chefe-do-departamento-de-engenharia-biomedica-candidatos-as/',
  },
];

export const faqItems: FAQ[] = [
  {
    question: 'Como ingressar no curso?',
    answer:
      'O ingresso ocorre no segundo ciclo, com preenchimento das vagas por alunos oriundos do Bacharelado em Ciências e Tecnologia e por reingresso de cursos de engenharia correlatos.',
  },
  {
    question: 'Quantas vagas são oferecidas e em qual turno?',
    answer:
      'O curso oferece 40 vagas semestrais no turno noturno para a formação específica em Engenharia Biomédica.',
  },
  {
    question: 'Qual a carga horária e a duração previstas?',
    answer:
      'A estrutura curricular pública informa carga horária mínima de 3.700 horas e duração prevista de 11 períodos letivos semestrais.',
  },
  {
    question: 'Onde o engenheiro biomédico pode atuar?',
    answer:
      'O profissional pode atuar em hospitais, clínicas, centros de saúde, universidades, institutos de pesquisa, indústria e empresas da área médica.',
  },
];

export const footerLinks = [
  {
    title: 'SIGAA do curso',
    href: 'https://sigaa.ufrn.br/sigaa/public/curso/portal.jsf?id=85341136&lc=pt_BR',
  },
  {
    title: 'Site público atual',
    href: 'https://eb.ct.ufrn.br/',
  },
  {
    title: 'Sociedade Brasileira de Engenharia Biomédica',
    href: 'https://www.sbeb.org.br/',
  },
  {
    title: 'IEEE Engineering in Medicine & Biology Society',
    href: 'https://www.embs.org/',
  },
];
