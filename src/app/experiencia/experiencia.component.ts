
import { PortfolioService } from '../servicios/portfolio.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  miportfolio:any;
  
 
      constructor(private datosPortfolio:PortfolioService) {} 
      
 
       ngOnInit(): void {
       this.datosPortfolio.obtenerDatos().subscribe(data => {
          console.log(data[0]);  
          this.miportfolio=data[0]; 
       });  
       }
     }
