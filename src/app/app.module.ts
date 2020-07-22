import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { EntrainementComponent } from './entrainement/entrainement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SommaireComponent } from './sommaire/sommaire.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { InformationsComponent } from './informations/informations.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; 
import { ModalModule } from 'ngx-bootstrap/modal';  
import { PopoverModule } from 'ngx-bootstrap/popover'; 
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveSidenavModule } from "./responsive-sidenav/responsive-sidenav.module";
import { TactiqueComponent } from './tactique/tactique.component';
import { DefisTechniqueComponent } from './defis-technique/defis-technique.component';
import { AttaquesComponent } from './attaques/attaques.component';
import { CoupsFrancsComponent } from './coups-francs/coups-francs.component';
import { DefenseComponent } from './defense/defense.component';
import { CornersComponent } from './corners/corners.component';
import { TouchesComponent } from './touches/touches.component';
import { PresseComponent } from './presse/presse.component';
import { PresaisonComponent } from './presaison/presaison.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    SommaireComponent,
    RevisionsComponent,
    InformationsComponent,
    TactiqueComponent,
    DefisTechniqueComponent,
    EntrainementComponent,
    AttaquesComponent,
    CoupsFrancsComponent,
    DefenseComponent,
    CornersComponent,
    TouchesComponent,
    PresseComponent,
    PresaisonComponent,
    CalendrierComponent
  ],
  imports: [
    CommonModule, 
    AlertModule.forRoot(), 
    BsDatepickerModule.forRoot(), 
    BsDropdownModule.forRoot(), 
    ModalModule.forRoot(), 
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'alimentation', component: AlimentationComponent},
      {path: 'entrainement', component: EntrainementComponent},
      {path: 'intro', component: IntroComponent},
      {path: 'sommaire', component: SommaireComponent},
      {path: 'revisions', component: RevisionsComponent},
      {path: 'informations', component: InformationsComponent},
      {path: 'tactique', component: TactiqueComponent},
      {path: 'defis-technique', component: DefisTechniqueComponent},
      {path: 'attaque', component: AttaquesComponent},
      {path: 'defense', component: DefenseComponent},
      {path: 'coups-francs', component: CoupsFrancsComponent},
      {path: 'corners', component: CornersComponent},
      {path: 'touches', component: TouchesComponent},
      {path: 'presse', component: PresseComponent},
      {path: 'presaison', component: PresaisonComponent},
      {path: 'calendrier', component: CalendrierComponent},

      

    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatNativeDateModule, 
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    ResponsiveSidenavModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatNativeDateModule, 
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatIconModule,
    ResponsiveSidenavModule
  ]

})
export class AppModule { }