import { Component, Input } from '@angular/core';
import { faFile, faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { TreeData } from '../interfaces/tree-data';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  @Input() treeData: TreeData[];
  expandedNodes = [];
  faFolder = faFolder;
  faFolderOpen = faFolderOpen;
  faFile = faFile;

  getFileCounter(node): number {
    return node.children.filter(({type}) => type === 'file' ).length;
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
}
