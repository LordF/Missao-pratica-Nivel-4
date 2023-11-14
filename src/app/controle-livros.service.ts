import { Injectable } from '@angular/core';
import {Livro} from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Use a cabeça:Java",
      resumo: "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
      autores: ["Bert Bates", "Kathy Sierra"],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "Java, como Programar",
      resumo: "Milhões de alunos e profissionas aprenderam programação e desenvolvimento de software com os livros Deitel.",
      autores: ["Paul Deitel", "Harvey Deitel"],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "Core Java for the Impatient",
      resumo: "Readers familiar with Horstmann's original, two-volume \"Core Java\" books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries",
      autores: ["Cay Horstmann"],
    },
  ]

  obterLivros(): Livro[]{
    return this.livros;
  };
  incluir(livro:Livro): void{
    const maior = this.livros.reduce((inicial,atual) => Math.max(atual.codigo, inicial),0);
    livro.codigo = maior + 1;
    this.livros.push(livro);
  };
  excluir(codigo:number): void{
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice >= 0 && indice < this.livros.length){
      this.livros.splice(indice, 1);
    }
  }
}




