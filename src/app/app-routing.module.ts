import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialMediaComponentComponent } from './social-media-component/social-media-component.component';
import { TaskAssignmentComponentComponent } from './task-assignment-component/task-assignment-component.component';

const routes: Routes = [
  { path: '', component: SocialMediaComponentComponent},
  { path: 'task', component: TaskAssignmentComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
