import { Component, OnInit, Input } from '@angular/core';
import { StreamService } from './stream.service';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  @Input() checked: boolean;
  stream: string;
  errorMessage: string;

  constructor(private _streamService: StreamService) { }

  ngOnInit() {
    if (this.checked) {
      this._streamService.getStream()
        .subscribe(stream => {
          this.stream = stream;
          console.log(this.stream);
        },
        error => this.errorMessage = <any>error
        );
    }
  }
}
