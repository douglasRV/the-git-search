import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Services
import { APIService } from '../../services/api.service';

// Formgroup
import { GitSearchFiltroFormGroup } from '../formgroup/git-search-filtro.formgroup';

// Modals
import { GitSearchModalComponent } from '../git-search-modal/git-search-modal.component';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.scss']
})
export class GitSearchComponent implements OnInit {

  // Array Grid
  data: any[] = [];

  // Vars
  filtroForm: FormGroup;

  page: number = 1;
  pageSize: number = 8;
  quantidade: number = null;
  tabela: boolean = false;
  nome: string;

  // Resultado da Pesquisa
  results: any;

  constructor(
    private service: APIService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.filtroForm = new FormBuilder().group(GitSearchFiltroFormGroup.toFormGroup());
  }

  openmodal(name: string) {
    console.log('name', name);
    const modalRef = this.modalService.open(GitSearchModalComponent, {
      // windowClass : 'myCustomModalClass'
      size: 'xl'
    });

    modalRef.componentInstance.name = name;

    modalRef.result
      .then((value) => {
      })
      .catch((reason) => {
      });
  }

  search() {
    const filtro = this.filtroForm.value;
    this.nome = filtro.Nome;
    filtro.Page = (this.page) ? this.page : 1;
    this.service.listar(filtro).subscribe((res) => {
      this.data = [];
      this.results = res;
      this.tabela = true;
      for (const item in res.items) {

        if (!isNaN(Number(item))) {

          this.data.push(res.items[item]);
          continue;
        } else {
          break;
        }
      }
    }, err => {
      console.log(err);
      const error = err.message;
      console.log('error', error);
    });
  }

  formatDate(date: Date, separator: string = '/') {
    date = new Date(date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

    return (day + separator + month + separator + year);
  }

  get dados() {
    this.quantidade = this.results.total_count / this.pageSize;
    return this.data;
  }
}
