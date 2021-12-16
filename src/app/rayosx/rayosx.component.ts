import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import Servicio from 'src/models/servicio-m.model';
import { ServicioService } from 'src/services/servicio.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-rayosx',
  templateUrl: './rayosx.component.html',
  styleUrls: ['./rayosx.component.css']
})
export class RayosxComponent implements OnInit {
  servicio: Servicio = new Servicio();

 //@ViewChild('formulario')formulario!;
 form!:FormGroup;
 constructor(
   private formBuilder:FormBuilder,private servicioService: ServicioService,
   private afuauth: AngularFireAuth
 ) { 
   this.formulario();
   this.afuauth.onAuthStateChanged((user) => {
    if (user){
      var uid=user.uid;
      this.servicio.uid=uid
    }else {}
  })
 }

 persona={
   genero:'F'
 }
 formulario(){
  this.form=this.formBuilder.group({
    prueba: ['',[Validators.required]],
    fecha: ['',[Validators.required]],
    hora:['',[Validators.required]],
    nombre: ['',[Validators.required]],
    apellidopaterno: ['',[Validators.required]],
    apellidomaterno: ['',[Validators.required]],
    nacimiento:['',[Validators.required]],
    cp:['',[Validators.required]],
    colonia:['',[Validators.required]],
    calle:['',[Validators.required]],
    numdir:['',[Validators.required]],
    correo: ['',[Validators.required]],
    tel:['',[Validators.required]],
    genero:['',[Validators.required]],
  });
  }
  ngOnInit(): void {
  }
  saveRayos(): void {
    this.servicioService.create(this.servicio).then(() => {
      console.log('Created new item successfully!');
    });
    Swal.fire(
      '¡Cita exitosa!','Favor de llegar 5 minutos antes','success'
    )
  }

  validar(){
    
    var serviciovacio = (<HTMLInputElement>document.getElementById("serviciovacio")).value;
    var fechavacio = (<HTMLInputElement>document.getElementById("fechavacio")).value;
    var sexoservicio = (<HTMLInputElement>document.getElementById("sexoservicio")).value;
    var nombreservicio = (<HTMLInputElement>document.getElementById("nombreservicio")).value;
    var apellidopaservicio = (<HTMLInputElement>document.getElementById("apellidopaservicio")).value;
    var apellidomaservicio = (<HTMLInputElement>document.getElementById("apellidomaservicio")).value;
    var fechanacimientoservicio = (<HTMLInputElement>document.getElementById("fechanacimientoservicio")).value;
    var postalservicio = (<HTMLInputElement>document.getElementById("postalservicio")).value;
    var coloniaservicio = (<HTMLInputElement>document.getElementById("coloniaservicio")).value;
    var calleservicio = (<HTMLInputElement>document.getElementById("calleservicio")).value;
    var numerocalleservicio = (<HTMLInputElement>document.getElementById("numerocalleservicio")).value;
    var numerocontactoservicio = (<HTMLInputElement>document.getElementById("numerocontactoservicio")).value;
    var correoservicio = (<HTMLInputElement>document.getElementById("correoservicio")).value;
  
    var b1=false,b2=false,b3=false,b4=false,b5=false,b6=false,b7=false,b8=false,b9=false,b10=false,b11=false,b12=false,b13=false;
  
    if (serviciovacio.length>0){
      b1=true;
   }
   if (fechavacio.length>0){
      b2=true;
   }
   if (sexoservicio.length>0){
      b3=true;
   }
   if (nombreservicio.length>0){
      b4=true;
   }
   if (apellidopaservicio.length>0){
      b5=true;
   }
   if (apellidomaservicio.length>0){
      b6=true;
   }
   if (fechanacimientoservicio.length>0){
      b7=true;
   }
   if (postalservicio.length>0){
      b8=true;
   }
   if (coloniaservicio.length>0){
      b9=true;
   }
   if (calleservicio.length>0){
      b10=true;
   }
   if (numerocalleservicio.length>0){
      b11=true;
   }
   if (numerocontactoservicio.length>0){
      b12=true;
   }
   if (correoservicio.length>0){
      b13=true;
   }
  
  
   if (b1==true && b2==true &&  b3==true &&  b4==true &&  b5==true &&  b6==true &&  b7==true &&  b8==true &&  b9==true &&  b10==true &&  b11==true &&  b12==true &&  b13==true  ){
    Swal.fire(
      '¡Cita exitosa!','Favor de llegar 5 minutos antes','success'
    )
    this.saveRayos();
   }else{
    Swal.fire(
      'Ocurrio un problema','Revisa que todos los campos esten llenos','warning'
    )
  
   }
  
    }

}
