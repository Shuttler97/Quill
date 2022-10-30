import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('a', { read: ElementRef, static:false }) aImg: ElementRef |undefined;
  @ViewChild('side', { read: ElementRef, static:false }) side: ElementRef |undefined;

  counter =0
  barCounter = 0;
  constructor( private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.addActiveClass()
      this.addProgressBar()
    }, 5000);
  }


  addActiveClass(){
    if(this.aImg){
    var c = this.counter % this.aImg?.nativeElement.children.length;
    for(let i=0;i <  this.aImg?.nativeElement.children.length;i++){
      this.aImg?.nativeElement.children[i].setAttribute("style", "display: none")
      // for(let j=0; j<this.aImg.nativeElement.children[i].children.length ; j++){
      this.aImg?.nativeElement.children[i].children[0].classList.remove("userTextActive")
      this.aImg?.nativeElement.children[i].children[1].classList.remove("correctionActive")
      

      // }
    }

     this.aImg?.nativeElement.children[c].setAttribute("style", "display: block")
    //  for(let j=0; j<this.aImg.nativeElement.children[c].children.length ; j++){
      this.aImg?.nativeElement.children[c].children[0].classList.add('userTextActive')
      this.aImg?.nativeElement.children[c].children[1].classList.add('correctionActive')



    // }

      ++this.counter
    }
  }
  addProgressBar(){
    if(this.side){
    var c = this.barCounter % this.side?.nativeElement.children.length;
    for(let i=0;i <  this.side?.nativeElement.children.length;i++){
    this.side.nativeElement.children[i].children[0].setAttribute('style', "color:#4A6EE0")
    this.side.nativeElement.children[i].children[2].children[0].children[0].classList.remove('progressActive')
    }
    this.side.nativeElement.children[c].children[2].children[0].children[0].classList.add('progressActive')
    this.side.nativeElement.children[c].children[0].setAttribute('style', "color:black")

    ++this.barCounter
    }

  }

}
