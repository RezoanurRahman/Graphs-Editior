import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export var nodesfromdata: Node[]= [
  {
    id: '1',
    label: 'Node A'
  }, {
    id: '2',
    label: 'Node B'
  }, {
    id: '3',
    label: 'Node C'
  }, {
    id: '4',
    label: 'Node D'
  }, {
    id: '5',
    label: 'Node E'
  }, {
    id: '6',
    label: 'Node F'
  }
];
   
export var clusters: ClusterNode[] = [
    {
      id: 'third',
      label: 'C',
      childNodeIds: ['c1', 'c2']
    }
  ];
  
export var linksfromdata: Edge[] = [
  {
    id: 'a',
    source: '1',
    target: '2'
  }, {
    id: 'b',
    source: '1',
    target: '3'
  }, {
    id: 'c',
    source: '3',
    target: '4'
  }, {
    id: 'd',
    source: '3',
    target: '5'
  }, {
    id: 'e',
    source: '4',
    target: '5'
  }, {
    id: 'f',
    source: '2',
    target: '6'
  }
];
  
