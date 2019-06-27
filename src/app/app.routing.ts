import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PssbWizardComponent } from './pssb-wizard/pssb-wizard.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MasterDetailComponent
  }

  // {
  //   path: 'edit-opportunity',
  //   component: EditOpportunityComponent
  // },
  // {  
  //   path: 'edit-opportunity/page/',
  //   component: EditOpportunityComponent
  // },
  // {  
  //   path: 'edit-opportunity/page/:page',
  //   component: EditOpportunityComponent
  // },
  // {  
  //   path: 'edit-opportunity/page/:page/:advanced',
  //   component: EditOpportunityComponent
  // },

  // {
  //   path: 'create-opportunity',
  //   component: CreateOpportunityComponent
  // },
  // {  
  //   path: 'create-opportunity/page/',
  //   component: CreateOpportunityComponent
  // },
  // {  
  //   path: 'create-opportunity/page/:page',
  //   component: CreateOpportunityComponent
  // },
  // // {  
  // //   path: 'create-opportunity/page/:rd',
  // //   component: CreateOpportunityComponent
  // // },
  // {
  //   path: 'create-opportunity/page/:page/:rd',
  //   component: CreateOpportunityComponent
  // },
  // {
  //   path: 'create-opportunity/page/:page/:rd/:storefront',
  //   component: CreateOpportunityComponent
  // },
  // {
  //   path: 'create-opportunity/page/:page/:rd/:storefront/:sku',
  //   component: CreateOpportunityComponent
  // }
];

// { path: 'myUrlpath/:id1/:id2', component: componentToGoTo},


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }