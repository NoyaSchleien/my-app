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
  // w: number;
  // h: number;
  selectedSpeed:number;

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
    // this.myVideo['nativeElement'].onloadmetadad = (ev: Event) => {
    //   let ratio = this.myVideo['nativeElement'].videoWidth / this.myVideo['nativeElement'].videoHeight;
    //   this.w = this.myVideo['nativeElement'].videoWidth - 100;
    //   this.h = this.w / ratio;
    //   this.myCanvas['nativeElement'].width = this.w;
    //   this.myCanvas['nativeElement'].height = this.h;
    //   this.selectedSpeed=1;
    // }
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
    var context=this.myCanvas['nativeElement'].getContext('2d');
    context.fillRect(0, 0, this.myCanvas['nativeElement'].width, this.myCanvas['nativeElement'].height);
    context.drawImage(this.myVideo['nativeElement'], 0, 0, this.myCanvas['nativeElement'].width, this.myCanvas['nativeElement'].height);
  }
  
  onSpeedChange(value){
    console.log(value);
  }
  onRadioChange(value:number){
    this.selectedSpeed=value;
  this.myVideo['nativeElement'].playbackRate = this.selectedSpeed;
}
onChange(value:number){
  this.selectedSpeed=value;
  this.myVideo['nativeElement'].playbackRate = this.selectedSpeed;
}
onClick(value:number){
  this.selectedSpeed=value;
  this.myVideo['nativeElement'].playbackRate = this.selectedSpeed;
}
onStartTimeChange(sec:number){
  let startTime=sec;
  this.myVideo['nativeElement'].currentTime = startTime;
}
onForward(sec:number){
  var startTime= this.myVideo['nativeElement'].currentTime;
  this.myVideo['nativeElement'].currentTime = startTime + (+sec);
}
onBackwards(sec:number){
  var startTime= this.myVideo['nativeElement'].currentTime;
  this.myVideo['nativeElement'].currentTime = startTime - sec;
}
onMarkButton(){
  this.myVideo['nativeElement'].currentTime = 24;
//   var me=this;
//  let ticks = 50; // number of frames during fast-forward
//     let  frms = 10; // number of milliseconds between frames in fast-forward/rewind
//       let endtime = 24.0; // time to fast-forward/remind to (in seconds)
//   // fast-forward/rewind video to end time 
//   var tdelta = (endtime - this.myVideo['nativeElement'].currentTime)/ticks; 
//   var startTime = this.myVideo['nativeElement'].currentTime;
//   for ( var i = 0; i < ticks; ++i )
//   {
//      (function(j){
//          setTimeout(function() {
//           me.myVideo['nativeElement'].currentTime = startTime+tdelta * j;
//          }, j * frms);
//      })(i);
//   }
// } 
}
}