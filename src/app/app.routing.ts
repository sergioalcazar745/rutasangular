import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { TelevisionComponent } from "./components/television/television.component";
import { ErrorComponent } from "./components/error/error.component";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NumerodobleComponent } from "./components/numerodoble/numerodoble.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "cine", component: CineComponent},
    {path: "musica", component: MusicaComponent},
    {path: "television", component: TelevisionComponent},
    {path: "numerodoble", component: NumerodobleComponent},
    {path: "numerodoble/:numero", component: NumerodobleComponent},
    {path: "**", component: ErrorComponent},
]

export const appRoutinProviders: any[] = []
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)