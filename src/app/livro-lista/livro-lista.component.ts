import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService){ }

  ngOnInit(): void{
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codLivro: number): void =>{
    this.servLivros.excluir(codLivro);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string =>{
    return this.servEditora.getNomeEditora(codEditora);
  }

}
