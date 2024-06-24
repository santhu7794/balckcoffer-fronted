import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizationService } from '../visualization.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';




@Component({
    selector: 'app-view',
    standalone: true,
    templateUrl: './view.component.html',
    styleUrl: './view.component.css',
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink,]
})
export class ViewComponent implements OnInit {
  santhu: any;
  // filteredProducts: any;
  // allProducts:any
  // searchInput=""
 
  constructor(private from: FormBuilder, private api: VisualizationService) {}

  ngOnInit(): void {
    this.api.getdata().subscribe((res: any) => {
      this.santhu = res;
      // this.filterProducts=res;
      // this.allProducts=res;
      console.log('santhu', this.santhu);
    });
  }
  // filterProducts(){
  // this.filteredProducts=this.allProducts.filter(
  //     (p:any)=>{
  //       return p.title.includes(this.searchInput)
  //     }
  //   )
  // }
}
