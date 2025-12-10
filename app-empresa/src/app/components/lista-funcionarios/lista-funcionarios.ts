import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lista-funcionarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-funcionarios.html',
  styleUrl: './lista-funcionarios.scss',
})
export class ListaFuncionarios implements OnInit {

  funcionarios: any[] = [];
  departamentos: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarDepartamentos();
    this.carregarFuncionarios();
  }

  carregarDepartamentos(): void {
    this.http.get('http://localhost:3000/departamentos').subscribe((dados: any) => {
      this.departamentos = dados;
    });
  }

  carregarFuncionarios(): void {
    this.http.get('http://localhost:3000/funcionarios').subscribe((dados: any) => {
      this.funcionarios = dados;
    });
  }

  buscarPorDepartamento(departamentoId: string): string {
    var dep = this.departamentos.find(function (item: any) {
      return item.id === departamentoId;
    });
    return dep ? dep.nome : 'Desconhecido';
  }

  novoFuncionario(): void {
    this.router.navigate(['/form-funcionarios']);
  }

  editarFuncionario(id: string): void {
    this.router.navigate(['/form-funcionarios', id]);
  }

  excluirFuncionario(id: string): void {
    var confirmar = confirm("Deseja realmente excluir este funcionário?");
    if (confirmar) {
      this.http.delete('http://localhost:3000/funcionarios/' + id).subscribe(() => {
        alert("Funcionário excluído com sucesso!");
        this.carregarFuncionarios();
      });
    }
  }
}