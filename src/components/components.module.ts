import { NgModule } from '@angular/core';
import { SearchResultsComponent } from './search-results/search-results';
import { IonicModule } from "ionic-angular";
import { RepositoryComponent } from './repository/repository';

@NgModule({
	declarations: [SearchResultsComponent,
    RepositoryComponent],
	imports: [IonicModule],
	exports: [SearchResultsComponent,
    RepositoryComponent]
})
export class ComponentsModule {}
