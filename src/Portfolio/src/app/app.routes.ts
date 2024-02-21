import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudiesComponent } from './studies/studies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "projects",
        component: ProjectsComponent
    },
    {
        path: "studies",
        component: StudiesComponent
    },
    {
        path: "contacts",
        component: ContactsComponent
    },
    {
        path: "**",
        component: HomeComponent,
        pathMatch: 'full'
    }
];