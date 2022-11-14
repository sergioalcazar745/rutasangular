import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {

  public numero!: number;
  public doble!: number;

  constructor(private _activatedRoute: ActivatedRoute, private _route: Router) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros: Params) => {
      if(parametros['numero'] != undefined){
        this.numero = parametros['numero']
        this.doble = parseInt(parametros['numero']) * 2;
      }
    })
  }

  redirect(num: number){
    this._route.navigate(["/numerodoble", num])
  }
}
