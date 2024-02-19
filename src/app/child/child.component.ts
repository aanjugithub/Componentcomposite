import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() context:string=""
  @Output() emitter=new EventEmitter()

  constructor(){
    
    
  }

sendMessage(){
  let message="this is amessage from child"
  this.emitter.emit(message)
}

}
