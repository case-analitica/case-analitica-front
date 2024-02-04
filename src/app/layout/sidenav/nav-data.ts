import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {
    routeLink: 'configurations',
    icon: 'fal fa-cog',
    label: 'Configurações',
    items: [
      {
        routeLink: 'configurations/parameters',
        label: 'Parâmetros',
        items: [
          {
            routeLink: 'configurations/user-profiles',
            label: 'Níveis de Usuário',
          },
          {
            routeLink: 'configurations/schedulle-configuration',
            label: 'Configurações de Agenda',
          }
        ]
      }
    ]
  },
  {
    routeLink: 'register',
    icon: 'fal fa-folder-open',
    label: 'Cadastros',
    items: [
      {
        routeLink: 'users',
        label: 'Usuários'
      },
      {
        routeLink: 'customers',
        label: 'Clientes'
      },
      {
        routeLink: 'devices',
        label: 'Equipamentos'
      },
      {
        routeLink: 'standards',
        label: 'Padrões'
      },
      {
        routeLink: 'instruments',
        label: 'Instrumentos'
      },
      {
        routeLink: 'calibration',
        label: 'Calibração',
        items: [
          {
            routeLink: 'calibration/calibration-program',
            label: 'Programa de Calibração',
          },
          {
            routeLink: 'calibration/calibration-control',
            label: 'Controle de Calibração',
          }
        ]
      },
      {
        routeLink: 'contracts',
        label: 'Contratos',
        items: [
          {
            routeLink: 'contracts/active',
            label: 'Ativos',
          },
          {
            routeLink: 'contracts/inactive',
            label: 'Inativos',
          }
        ]
      },
      {
        routeLink: 'base-register',
        label: 'Cadastros Base',
        items: [
          {
            routeLink: 'base-manufacturer',
            label: 'Fabricantes'
          },
          {
            routeLink: 'base-registration/model',
            label: 'Modelos'
          },
          {
            routeLink: 'base-registration/device-group',
            label: 'Grupos de Equipamento'
          },
          {
            routeLink: 'base-registration/device-type',
            label: 'Tipos de Equipamento'
          }
        ]
      },
    ]
  },
  {
    routeLink: 'service',
    icon: 'fal fa-screwdriver',
    label: 'Serviço Técnico',
    items: [
      {
        routeLink: 'service/schedule',
        label: 'Agenda Técnica'
      },
      {
        routeLink: 'service/service-order',
        label: 'Ordem de Serviço',
        items: [
          {
            routeLink: 'service/service-order/intern',
            label: 'Interna'
          },
          {
            routeLink: 'service/service-order/extern',
            label: 'Externa'
          }
        ]
      },
      {
        routeLink: 'service/documentation',
        label: 'Gerar Documentação',
        items: [
          {
            routeLink: 'service/documentation/create-dossie',
            label: 'Gerar Dossiê'
          },
        ]
      },
    ]
  },
  {
    routeLink: 'quality',
    icon: 'fal fa-chart-line',
    label: 'Gestão da Qualidade',
    items: [
      {
        routeLink: 'quality/dossie-certification',
        label: 'Dossiê de Certificação'
      },
      {
        routeLink: 'quality/technical-visit-questionnaire',
        label: 'Questionário de Visita Técnica'
      },
      {
        routeLink: 'quality/technical-documentation',
        label: 'Cadastro de Documentação Técnica'
      },
      {
        routeLink: 'quality/non-compliance-documentation',
        label: 'Relatório de Não Conformidade'
      },
      {
        routeLink: 'quality/improvement-action',
        label: 'Plano de Açao de Melhoria'
      },
      {
        routeLink: 'quality/change-control',
        label: 'Plano de Controle de Mudanças'
      },
      {
        routeLink: 'quality/customer-complaints',
        label: 'Relatório de Reclamação de Clientes'
      },
      {
        routeLink: 'quality/satisfaction-survey',
        label: 'Pesquisa de Satisfação de Clientes'
      },
      {
        routeLink: 'quality/training-plan',
        label: 'Plano Anual de Treinamentos'
      },
      {
        routeLink: 'quality/risks-opportunities',
        label: 'Identificação de Riscos e Oportunidades'
      },
      {
        routeLink: 'quality/self-evaluation',
        label: 'Questionário de Auto-Avaliação'
      }
    ]
  },
  {
    routeLink: 'strategic-management',
    icon: 'fal fa-gavel',
    label: 'Gestão Estratégica',
    items: [
      {
        routeLink: 'strategic-management/documents-external-origin',
        label: 'Controle de Documentos de Origem Externa'
      },
      {
        routeLink: 'strategic-management/audit-schedule',
        label: 'Agenda de Auditoria'
      },
      {
        routeLink: 'strategic-management/iso-requirements',
        label: 'Requisitos ISO 9001:2015'
      }
    ]
  },
  {
    routeLink: 'sales-support',
    icon: 'fal fa-briefcase',
    label: 'Suporte a Vendas',
    items: [
      {
        routeLink: 'sales-support/parts-registration',
        label: 'Cadastro de Peças'
      },
      {
        routeLink: 'sales-support/quote-request',
        label: 'Solicitação de Cotações'
      }
    ]
  },
];
