import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const appRoutes: Routes = [{ path: '**', redirectTo: '/' }];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            enableTracing: !environment.production,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
