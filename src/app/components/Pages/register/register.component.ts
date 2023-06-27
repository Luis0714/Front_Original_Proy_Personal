import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators,FormGroup } from '@angular/forms';
import { CreateUserModel } from 'src/app/Models/Users/CreateUserModel';
import { UserServiceService } from 'src/app/services/Users/user-service.service';
import { faRightFromBracket, faImage,faUser, faCalendar, faIdCard, faLocationDot, faEnvelope, faXmark,faUsers,faPhone, faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { Event, Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  imagenSeleccionada: File = new File([],'');
  imagenBase64: string = '';
  faUsers = faUsers;
  faUser = faUser;
  faPhone = faPhone;
  faUserSecret = faUserSecret;
  faEnvelope = faEnvelope;
  faRightFromBracket = faRightFromBracket;
  faLocationDot = faLocationDot;
  faIdCard  = faIdCard;
  faCalendar = faCalendar;
  faImage = faImage;

  form:FormGroup = new FormGroup('');


  constructor
  (
    private formBuilder: FormBuilder,
    private userService : UserServiceService,
    private router: Router,
    private fireStorage:AngularFireStorage
  )
  {
    this.buidForm()
  }

  buidForm(){
    this.form = this.formBuilder.group({
        name: ['Luis Andres',[Validators.required]],
        image : ['foto.png',[Validators.required]],
        lastName: ['Martinez',[Validators.required]],
        secondLastName: ['Estremor',[Validators.required]],
        dateOfBirth: ['',[Validators.required]],
        documentTypeId: ['1',[Validators.required]],
        document: ['901282344',[Validators.required]],
        numberPhone: ['3209876565',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        email: ['luisandres@gamil.com',[Validators.required, Validators.email]],
        password: ['Hola123*',[Validators.required]],
        address: ['Carrera 31 #65A-21',[Validators.required]],
        rolId:['1',[Validators.required]]
    });
  }

  registerUser(event:any){
    if(this.form.valid){
      this.createUser();
    }else{
      this.form.markAllAsTouched();
    }
  }
  createUser(){
    const data = this.form.value;
    this.userService.create(data).
    subscribe(response =>{
      if(response){
        this.router.navigate(['/users'])
      }
    })
  }
  uploadFile(event: any){
    const File = event.target.files[0];
    const name = File.name;


  }
  }











