import { Component } from '@angular/core';
import { Edge, Node } from '@swimlane/ngx-graph';
import { nodesfromdata, linksfromdata } from './data.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //Required Attributes for the Graph
  autoCenter = false;
  layout = "d3ForceDirected";
  draggingEnabled = true;
  title = 'GraphEditor';
  update$: Subject<boolean> = new Subject();
  nodes: Node[] = nodesfromdata;
  links: Edge[] = linksfromdata;
  fromComponentNewNodeForEdge: string;
  toComponentNewNodeForEdge: string;
  buttonState = true;
  nodeIdElement = document.getElementsByClassName("nodeName");
  //Triggers when add new node button is pressed
  onClickMenode() {
    let data: Node = { id: String(this.nodes.length + 1), label: 'newnode' };
    this.nodes.push(data);
    //pusing the event
    this.update$.next(true);
  }
  //Triggers when adding a new edge between the nodes
  onClickMeaddEdge() {
    
    let link: Edge = { source: this.fromComponentNewNodeForEdge, target: this.toComponentNewNodeForEdge };
    this.links.push(link);
    //pusing the event
    this.update$.next(true);
  }
  //Triggers when hiding the node numbers 
  onClickMeHideTheNodeid() {
    
    //Conditions to switch between showing and hiding
    if (this.buttonState == true) {
      for (var i = 0; i < this.nodeIdElement.length; i++) {
        this.nodeIdElement[i].textContent = nodesfromdata[i].id;
      }
    }
    else {
      for (var i = 0; i < this.nodeIdElement.length; i++) {
        this.nodeIdElement[i].textContent = "";
      }
    }
  }
}


