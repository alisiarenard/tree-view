import { Component, Input, OnInit } from '@angular/core';
import { faFile, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { TreeData } from '../interfaces/tree-data';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() treeData: TreeData[];
  expandedNodes = [];
  faFolder = faFolder;
  faFolderOpen = faFolderOpen;
  faFile = faFile;

  constructor() { }

  ngOnInit(): void {
    this.treeData = this.getSortedData();
  }

  getFileCounter(node): number {
    let counter = 0;
    node.children?.forEach((value) => {
      if (value.type === 'file') {
        counter = counter + 1;
      }
    });
    return counter;
  }

  expand(i): void {
    if (this.isExpanded(i)) {
      this.expandedNodes = this.expandedNodes.filter(value => value !== i);
    } else {
      this.expandedNodes.push(i);
    }
  }

  isExpanded(i: number): boolean {
    return this.expandedNodes.includes(i);
  }

  sortByType(type: string): TreeData[] {
    return this.treeData.filter(value => value.type === type)
      .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
  }

  getSortedData(): TreeData[] {
    return this.sortByType('folder').concat(this.sortByType('file'));
  }
}
