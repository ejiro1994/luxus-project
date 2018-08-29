import {
    BrowserModule
} from '@angular/platform-browser';
import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    AppComponent
} from './app.component';
import {
    MealtypeComponent
} from './mealtype/mealtype.component';
import {
    WorldcuisineComponent
} from './worldcuisine/worldcuisine.component';
import {
    AllComponent
} from './all/all.component';

const routes: Routes = [
    {
        path: "",
        component: AllComponent
  },
    {
        path: "all",
        component: AllComponent
  },
    {
        path: "mealtype",
        component: MealtypeComponent
  },
    {
        path: "worldcuisine",
        component: WorldcuisineComponent
  },
];

@NgModule({
    declarations: [
    AppComponent,
    MealtypeComponent,
    WorldcuisineComponent,
    AllComponent
  ],
    imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],
  ],
    exports: [RouterModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
