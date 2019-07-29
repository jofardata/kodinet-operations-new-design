import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { GlobalService } from '../../services/global.service';
import {CreateUserService} from '../../services/create-user.service';

@Component({
  selector: 'kt-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
// declaration variable pour leurs utilisation
myForm: FormGroup;
bdnId:any;
middleName:any;
lastName:any;
gender:any;
entityId:any;
profession:any[];
phone:any[];
fiscalEntity:[];
sectors:[];
Roles:[];
responseCode :any;
creadtedBy;
constructor(private createUserService:CreateUserService,
  private globalService:GlobalService) { }

  ngOnInit() {
    this.myForm= new FormGroup({
      bdnId: new FormControl('',Validators.required),
      // role: new FormControl('',Validators.required),
      createdBy: new FormControl('',Validators.required),
      entityId: new FormControl('',Validators.required),
      id: new FormControl('',Validators.required),
      agentName : new FormControl('',Validators.required),
      telephone: new FormControl('',Validators.required),
      sector:new FormControl('',Validators.required),
      sectorId: new FormControl('',Validators.required),
      sectorName: new FormControl('',Validators.required),
      roleId: new FormControl('',Validators.required),
      
  })
  this.getEntites();
  this.getRoles();
  this.getSector();
  }

  postRecherche(myForm){
    this.createUserService.chargerRecherche(myForm.value.bdnId).subscribe(response=>{
      console.log(response);
      this.bdnId = response.body.data.bdnId;
      this.middleName = response.body.data.middleName;
      this.lastName = response.body.data.lastName;
      this.gender = response.body.data.gender;
      this.profession = response.body.data.profession;
      this.responseCode = response.body.responseCode;
      this.entityId = response.body.data.entityId
      this.myForm.patchValue({telephone:this.phone})
      
      this.myForm.patchValue({
        telephone:this.phone
      })
      
    },err=>{
      console.log(err)
    })
  }
  post(myForm){
    console.log(myForm.value)
    this.createUserService.Enregistrement(myForm.value).subscribe(response=>{
      if(response.body.responseCode==="00"){
        alert(response.body.responseMessage)
         this.ngOnInit();
      }else{
        alert(response.body.responseMessage)
      }
    })
  }
  getEntites(){
    this.createUserService.getAllEntites().subscribe(response=>{
      this.fiscalEntity = response.body.data;

      console.log(this.fiscalEntity) 
  })
  }
  getRoles(){
    this.createUserService.getAllRoless().subscribe(response=>{
      this.Roles = response.body.data;

      console.log(this.Roles)
  })
  }

  getSector(){
    this.createUserService.getAllSector().subscribe(response=>{
      this.sectors = response.body.data;

      console.log(this.sectors)
  })
  }


}
