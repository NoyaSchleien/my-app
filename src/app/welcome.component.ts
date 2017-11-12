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
 @ViewChild ("myVideo") myVideo: HTMLVideoElement;
  person: IPerson;
  errorMessage: string;
  playVideo: boolean;

  constructor(private _welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.playVideo = false;
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
}

onButtonClick() {
  // this.myVideo=<HTMLVideoElement>document.getElementById("myVideo");
  console.log("myVideo = " + this.myVideo);
        if(this.myVideo['nativeElement'].paused){
        this.myVideo['nativeElement'].play();
      } else this.myVideo['nativeElement'].pause();
    
    //   if (this.playVideo==false){
    //   this.playVideo = true;
    //   }else this.playVideo=false;
    // }
    this.playVideo = true;
  }
  }
