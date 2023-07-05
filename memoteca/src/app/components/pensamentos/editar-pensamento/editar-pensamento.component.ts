import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento = {
    id:0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })

  }

  editarPensamento(){
    if(this.pensamento.id){
      this.service.editar(this.pensamento).subscribe(()=>{
        this.router.navigate(['/home'])
       })
    }
  }

  cancelar(){
    this.router.navigate(['/home'])
  }

}
