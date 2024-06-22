import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizationService } from '../visualization.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
santhu:any
constructor(private from:FormBuilder,private api:VisualizationService){}

  ngOnInit(): void {
    this.api.getdata().subscribe((res: any) => {
      this.santhu = res;
      console.log('santhu', this.santhu);
    });
    
  }

}
