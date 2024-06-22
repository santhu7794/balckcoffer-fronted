import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { VisualizationService } from '../visualization.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  visualdata!: FormGroup;
  // verify: any;

  constructor(private form: FormBuilder, private api: VisualizationService,private router:Router) {}
  ngOnInit(): void {
    this.visualdata = this.form.group({
      intensity: [''],
      likelihood: [''],
      relevance: [''],
      year: [''],
      country: [''],
      topic: [''],
      region: [''],
      city: [''],
      published: [''],
    });
    // this.api.getdata().subscribe((res: any) => {
    //   this.verify = res;
    //   console.log('verify', this.verify);
    // });
  }
  add() {
    this.api.visualdata(this.visualdata.value).subscribe((res: any) => {
      console.log('res', res);
      this.router.navigate(['/view'])
    });
  }
}
