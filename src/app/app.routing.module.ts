import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicExpansionPanelComponent } from './basic-expansion-panel/basic-expansion-panel.component';





@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'basic', component:  BasicExpansionPanelComponent},
      { path: 'other', component: BasicExpansionPanelComponent },
      { path: 'position', component: BasicExpansionPanelComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}