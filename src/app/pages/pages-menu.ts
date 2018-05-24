import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '仪表盘',
    icon: 'nb-bar-chart',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '系统功能',
    group: true,
  },
  {
    title: '智能门锁子系统',
    icon: 'nb-locked',
    link: '/pages/ui-features',
    children: [
      {
        title: '开锁提示',
        link: '/pages/ui-features/buttons',
      },
      {
        title: '远程开锁',
        link: '/pages/ui-features/grid',
      },
      {
        title: '开锁联动',
        link: '/pages/ui-features/icons',
      },
      {
        title: '自动撤防',
        link: '/pages/ui-features/modals',
      },
    ],
  },
  {
    title: '智能情景子系统',
    icon: 'nb-home',
    children: [
      {
        title: '记忆功能',
        link: '/pages/forms/inputs',
      },
      {
        title: '情景重定义',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: '智能照明子系统',
    icon: 'nb-sunny-circled',
    children: [
      {
        title: '手动控制',
        link: '/pages/components/tree',
      }, {
        title: '明暗调节',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: '智能语音子系统',
    icon: 'nb-volume-high',
    children: [
      {
        title: '语音控制',
        link: '/pages/maps/gmaps',
      },
      {
        title: '手机控制',
        link: '/pages/maps/leaflet',
      },
      {
        title: '全开全关',
        link: '/pages/maps/bubble',
      },
      {
        title: '情景记忆功能',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: '智能安防子系统',
    icon: 'nb-notifications',
    children: [
      {
        title: '红外人体探测器',
        link: '/pages/charts/echarts',
      },
      {
        title: '智能门窗磁',
        link: '/pages/charts/chartjs',
      },
      {
        title: '室内云台摄像头',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: '智能背景音乐子系统',
    icon: 'nb-audio',
    children: [
      {
        title: '语音操控',
        link: '/pages/editors/tinymce',
      },
      {
        title: '云音乐',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: '智能空调子系统',
    icon: 'nb-snowy-circled',
    children: [
      {
        title: '温度智能感应控制',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: '智能插座子系统',
    icon: 'nb-layout-two-column',
    children: [
      {
        title: '远程通断电',
        link: '/auth/login',
      },
      {
        title: '儿童锁功能',
        link: '/auth/register',
      },
      {
        title: '权限管理功能',
        link: '/auth/request-password',
      },
      {
        title: '定时通断电',
        link: '/auth/reset-password',
      },
    ],
  },
];
