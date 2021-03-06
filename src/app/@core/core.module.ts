import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs/observable/of';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';

const socialLinks = [
  {
    url: 'https://github.com/gdouzwt/',
    target: '_blank',
    icon: 'socicon-github',
  },
  {
    url: 'https://www.facebook.com/wentao.zhao.391/',
    target: '_blank',
    icon: 'socicon-facebook',
  },
  {
    url: 'https://twitter.com/gdouzwt',
    target: '_blank',
    icon: 'socicon-twitter',
  },
];

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,

  ...NbAuthModule.forRoot({
    providers: {
// 以下部分到时候要接入登录验证的功能
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          baseEndpoint: 'https://gdougym.cn',
          login: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: '/auth/sign-in',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['邮箱或密码错误'],
            defaultMessages: ['你已经登录成功'],
          },
          register: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: '/auth/sign-up',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['出现了一些错误，请重试！'],
            defaultMessages: ['你已经注册成功了'],
          },
          logout: {
             alwaysFail: false,
             endpoint: '/auth/sign-out',
             method: 'post',
             redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['出现了一些错误，请重试！'],
            defaultMessages: ['你已经成功退出登录！'],
           },
           requestPass: {
             endpoint: '/auth/request-pass',
             method: 'post',
             redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['出现了一些错误，请重试！'],
            defaultMessages: ['重置密码链接已发送到你的邮箱！'],
           },
           resetPass: {
             endpoint: '/auth/reset-pass',
             method: 'post',
             redirect: {
              success: '/',
              failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['出现了一些错误，请重试！'],
            defaultMessages: ['密码修改成功！'],
           },

         }
      },
    },

    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },

  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
        remove: '*',
      },
    },
  }).providers,
  {
    provide: NbRoleProvider,
    useValue: {
      getRole: () => {
        return observableOf('guest'); // here you could provide any role based on any auth flow
      },
    },
  },
  AnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
