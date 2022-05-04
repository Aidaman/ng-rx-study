import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from "../services/util.service";

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() total: number = 1;
  @Input() limit: number = 10;
  @Input() baseUrl: string = '';
  @Input() currentPage: number = 1;

  private pagesCount: number = Math.ceil(this.total/this.limit);
  public pages: number[] = [];

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.pages = this.utilsService.range(1, this.pagesCount);
    // this.pages = this.utilsService.range(1, 10);
  }

}
