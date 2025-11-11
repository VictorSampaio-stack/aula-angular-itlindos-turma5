import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-vagas',
  imports: [],
  templateUrl: './form-vagas.html',
  styleUrl: './form-vagas.scss',
})
export class FormVagas implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
