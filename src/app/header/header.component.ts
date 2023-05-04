import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  miportfolio:any;

     constructor(private datosPortfolio:PortfolioService) {} 
     

      ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
         console.log(data[0]);  
         this.miportfolio=data[0]; 
      });  
      }
    }

 