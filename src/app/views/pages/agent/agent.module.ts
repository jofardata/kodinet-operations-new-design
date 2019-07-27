import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes=[{
  path:'',
  component:AgentListComponent
},

{
  path:'create',
  component:AddAgentComponent
},
{
  path:'add-role',
  component:AddRoleComponent
}
]

@NgModule({
  declarations: [AgentListComponent, AddAgentComponent, AddRoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class AgentModule { }
