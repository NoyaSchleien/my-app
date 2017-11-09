import { Component, OnInit, Input } from '@angular/core';
import { IPerson } from './person';
import { WelcomeService } from './welcome.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input() id: string;
  person: IPerson;
  errorMessage: string;

  playVideo: boolean;

  constructor(private _welcomeService: WelcomeService) { }

  ngOnInit():void {
    this.playVideo = false;
    this._welcomeService.getPerson(this.id)
      .subscribe(person => {
        this.person = person;
        console.log(this.person);
      },
      error => this.errorMessage = <any>error
      );
    // this.person=this._welcomeService.getPerson(this.id);
  }

  onButtonClick() {
    this.playVideo = true;

  }

}
