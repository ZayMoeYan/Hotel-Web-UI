import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home', loadComponent: () => import('./core/home/home.component').then(c => c.HomeComponent), title: 'HOME'
    }, 
    {
        path: 'room', children: [
            {
               path: 'superior', loadComponent: () => import('./core/rooms/superior/superior.component').then(c => c.SuperiorComponent), title: 'ROOMS | SUPERIOR'
            },
            {
                path: 'deluxe', loadComponent: () => import('./core/rooms/deluxe/deluxe.component').then(c => c.DeluxeComponent), title: 'ROOMS | DELUXE'
            },
            {
               path: 'suite', loadComponent: () => import('./core/rooms/suite/suite.component').then(c => c.SuiteComponent), title: 'ROOMS | SUITE'
            },
        ]
    },
    {
        path: 'dining', loadComponent: () => import('./core/dining/dining.component').then(c => c.DiningComponent), title: 'DINING'
    },
    {
        path: 'facilities', loadComponent: () => import('./core/facilities/facilities.component').then(c => c.FacilitiesComponent), title: 'FACILITIES'
    },
    {
        path: 'gallery', loadComponent: () => import('./core/gallery/gallery.component').then(c => c.GalleryComponent), title: 'GALLERY'
    },
    {
        path: 'contact', loadComponent: () => import('./core/location-contact/location-contact.component').then(c => c.LocationContactComponent), title: 'LOCATION & CONTACT'
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
    
];
