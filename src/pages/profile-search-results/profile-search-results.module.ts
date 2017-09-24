import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultsPage } from './profile-search-results';
import  {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProfileSearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultsPage),
    ComponentsModule,
  ],
  schemas:  [
    CUSTOM_ELEMENTS_SCHEMA],

})
export class ProfileSearchResultsPageModule {}
