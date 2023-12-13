import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-grid-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss']
})
export class GridContentComponent {
  
  constructor(){
  } 

  public ngOnInit(): void{
    this.fetchData();
  }

  public sites: any[] = [] 
    
 
  // must be deleted/replaced soon  
  webScraper(currentSite: any){
    // (async () => {
    //   const response = await fetch(currentSite);
    //   const text = await response.text();
    //   console.log(text);
    // })();

    console.log(currentSite);
    return currentSite;
  }



  public onCardClick(cardName: any){ 
    window.open(cardName, '_blank');
  }

  public deleteCard(cardName: any){
    console.log(cardName + " deleted");
    this.sites = this.sites.filter(value => value != cardName);
  }

  // gets called at startup through ngOnInit()
  public fetchData(){
    const jsonData = require('../../data.json'); 

    for(const [key, value] of Object.entries(jsonData)){
      this.sites.push([`${key}`, `${value}`]);
    }
    console.log(Object.entries(jsonData));
  }


  


}

// WRITE TO FILE 
// wont work on browserapplications
// const jsonDDD = require('../../data.json');
//     let fs = require('fs');
//     //fs.writeFile(this.sites);

//     fs.writeFile('../../data.json', this.sites , (err: any) => {
//       if (err) {
//         console.error(err);
//       }
//     });