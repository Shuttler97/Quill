import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('a', { read: ElementRef, static:false }) aImg: ElementRef |undefined;
  counter =0
  constructor( private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.addActiveClass()
    }, 5000);
  }

  ngAfterViewInit(){
    
  }

  addActiveClass(){
    if(this.aImg){
    var c = this.counter % this.aImg?.nativeElement.children.length;
    for(let i=0;i <  this.aImg?.nativeElement.children.length;i++){
      this.aImg?.nativeElement.children[i].classList.remove('active');
      this.aImg?.nativeElement.children[i].setAttribute("style", "display: none")
      console.log(this.aImg.nativeElement.children[i].children)
      for(let j=0; j<this.aImg.nativeElement.children[i].children.length ; j++){
        this.aImg.nativeElement.children[i].children[j].classList.remove('active')
      this.aImg?.nativeElement.children[i].children[j].setAttribute("style", "opacity: 0")


      }
    }

     this.aImg?.nativeElement.children[c].classList.add('active')
     this.aImg?.nativeElement.children[c].setAttribute("style", "display: block")
     for(let j=0; j<this.aImg.nativeElement.children[c].children.length ; j++){
      this.aImg.nativeElement.children[c].children[j].classList.add('active')
      this.aImg?.nativeElement.children[c].children[j].setAttribute("style", "opacity:1")


    }

      ++this.counter
    }
  }

}
