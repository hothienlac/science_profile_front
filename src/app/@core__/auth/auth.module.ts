import { NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';
import { AuthStrategyService } from './auth-strategy.service';
import { AuthService } from '../services/auth.service';
import { StoreService } from '../services/store.service';

const socialLinks = [
  {
    url: environment.COMPANY_GITHUB_LINK,
    target: '_blank',
    icon: 'github-outline'
  },
  {
    url: environment.COMPANY_TWITTER_LINK,
    target: '_blank',
    icon: 'twitter-outline'
  },
];

@NgModule({
  imports: [CommonModule, NbAuthModule],
  providers: [
    ...NbAuthModule.forRoot({
      strategies: [AuthStrategyService.setup({ name: 'email' })],
      forms: {
        login: { socialLinks }
      }
    }).providers,

    AuthGuard,
    RoleGuard,
    AuthStrategyService,
    AuthService,
    StoreService,
    
  ]
})
export class AuthModule {}
