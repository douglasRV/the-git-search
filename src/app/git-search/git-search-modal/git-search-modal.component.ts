import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// Services
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-git-search-modal',
  templateUrl: './git-search-modal.component.html',
  styleUrls: ['./git-search-modal.component.scss']
})
export class GitSearchModalComponent implements OnInit {
  @Input() name: string;


  // Resultado da Pequisa
  results: any;

  constructor(
    public activeModal: NgbActiveModal,
    private service: APIService
    ) { }

  ngOnInit() {
    this.getDetalhes(this.name);
  }

  getDetalhes(search: string) {
    this.service.detalhes(search).subscribe((res) => {
      this.results = res;
      this.results.created_at = this.formatDate(res.created_at);
    });
  }

  formatDate(date: Date, separator: string = '/') {
    date = new Date(date);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());

    return (day + separator + month + separator + year);
  }
}
