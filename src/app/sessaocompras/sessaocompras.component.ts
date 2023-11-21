import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { OnInit } from '@angular/core';
import { SessaoService } from './service/sessao.service';
import { Isessao } from './service/isessao';
@Component({
  selector: 'app-sessaocompras',
  templateUrl: './sessaocompras.component.html',
  styleUrls: ['./sessaocompras.component.scss']
})
export class SessaocomprasComponent implements OnInit{



  ngOnInit(): void { this.listar()}

  produtos: Isessao[] = [];


  constructor(private service:SessaoService){ }

  listar(){
    this.service.listar().subscribe(dados => this.produtos = dados);
  }
  
  comprar(){
    Swal.fire({
      title: "Você desja comprar esse produto?",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "Sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }
}
