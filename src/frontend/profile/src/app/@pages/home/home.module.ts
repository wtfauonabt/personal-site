import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarModule } from '@core/components/navbar/navbar.module';
import { FooterModule } from './../../@core/components/footer/footer.module';

import { AnimatedTextModule } from '@core/components/animated-text/animated-text.module';
import { AnimatedBackgroundModule } from '@core/components/animated-background/animated-background.module';

import { SvgModule } from '@core/components/svg/svg.module';

import { BlockMenuModule } from '@core/components/block-menu/block-menu.module';

import { PortfolioCardModule } from '@core/components/portfolio-card/portfolio-card.module';
import { ExperienceCardModule } from './../../@core/components/experience-card/experience-card.module';

import { HomePage } from './home.page';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


@NgModule({
    imports: [
        CommonModule,

        FormsModule,
        ReactiveFormsModule,

        HomePageRoutingModule,

        FontAwesomeModule,

        NavbarModule,
        FooterModule,

        AnimatedBackgroundModule,
        AnimatedTextModule,

        SvgModule,

        BlockMenuModule,

        PortfolioCardModule,
        ExperienceCardModule,

    ],
    declarations: [
        HomePage,
        ProfileComponent,
        PortfolioComponent,
        SkillComponent,
        EducationComponent,
        ExperienceComponent,
        ContactMeComponent,
    ],
})
export class HomePageModule { }
