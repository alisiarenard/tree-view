import { Component } from '@angular/core';
import { TreeData } from './tree/interfaces/tree-data';
import { Observable } from 'rxjs';
import { TreeDataService } from './tree/services/tree-data.sevice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-tree';
  tree$: Observable<TreeData[]>;

  constructor(private treeDataService: TreeDataService) {
    this.tree$ = this.treeDataService.getTreeData();
  }
}
