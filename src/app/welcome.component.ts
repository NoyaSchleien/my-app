import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IPerson } from './person';
import { WelcomeService } from './welcome.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() id: number;
  @ViewChild("myVideo") myVideo: HTMLVideoElement;
  @ViewChild("myCanvas") myCanvas: HTMLCanvasElement;
  // @ViewChild("options") radioOptions: HTMLElement;
  person: IPerson;
  errorMessage: string;
  playVideo: boolean;
  buttonText: string;
  context: CanvasRenderingContext2D;
  w: number;
  h: number;

  constructor(private _welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.playVideo = false;
    this.buttonText = "Play";
    //I need to fix this make the button disabled when needed
    // if (this.person!=undefined){
    //   this.button=true;
    // }
    this._welcomeService.getPerson(this.id)
      .subscribe(person => {
        this.person = person;
        console.log(this.person);
      },
      error => this.errorMessage = <any>error
      );
    // this.person = this._welcomeService.getPerson(this.id);
    // this.myVideo['nativeElement'].onpause = (ev: Event) => {
    // console.log(ev);
    // }
    // this.myVideo['nativeElement'].onplay = (ev: Event) => {
    //   console.log(ev);
    //     }
    this.myVideo['nativeElement'].onloadmetadad = (ev: Event) => {
      let ratio = this.myVideo['nativeElement'].videoWidth / this.myVideo['nativeElement'].videoHeight;
      this.w = this.myVideo['nativeElement'].videoWidth - 100;
      this.h = this.w / ratio;
      this.myCanvas['nativeElement'].width = this.w;
      this.myCanvas['nativeElement'].height = this.h;
      
    }
    console.log("myVideo = " + this.myVideo);
    console.log("myCanvas = " + this.myCanvas);
  }
  
  onButtonClick() {
    console.log("myVideo = " + this.myVideo);
    if (this.myVideo['nativeElement'].paused) {
      this.myVideo['nativeElement'].play();
      this.playVideo = true;
      this.buttonText = "Pause";
    } else {
      this.myVideo['nativeElement'].pause();
      this.playVideo = false;
      this.buttonText = "Play";
    }
  }
  
  snap() {
    this.context=this.myCanvas['nativeElement'].CanvasRenderingContext2D;
    console.log(this.context);
    this.context.fillRect(0, 0, this.w, this.h);
    this.context.drawImage(this.myVideo['nativeElement'], 0, 0, this.w, this.h)
  }
  
//   onRadioChange(options){
//     console.log("radioOptions = "+this.radioOptions['nativeElement']);
//     console.log("radioOptions value= "+this.radioOptions['nativeElement'].value);
//     console.log(options.value);
//   this.myVideo['nativeElement'].playbackRate = options.value;
//   //why is it alwys 4???
// }
}