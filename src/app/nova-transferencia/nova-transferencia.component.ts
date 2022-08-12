import { TransferenciaService } from '../service/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  tranferir() {
    console.log("Olá mundo!");
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampo();
      this.router.navigateByUrl('extrato');
    }, (error) => {
      console.log(error);
    });
  }

  limparCampo() {
    this.valor = 0;
    this.destino = 0;
  }

}
