import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento/pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id:0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  save(){
   this.service.criar(this.pensamento).subscribe(()=>{
    this.router.navigate(['/home'])
   })
  }

  cancelar(){
    this.router.navigate(['/home'])
  }


}
