import { Injectable } from '@angular/core';
import { TreeData } from '../interfaces/tree-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable()
export class TreeDataService {

  constructor(private http: HttpClient) {
  }

  getTreeData(): Observable<TreeData[]> {
    return this.http.get<{ tree: TreeData[] }>('../../assets/data.json').pipe(
      map(({tree}) => {
        return this.sortByType(tree, 'folder').concat(this.sortByType(tree, 'file'));
      })
    );
  }

  sortByType(tree: TreeData[], type: string): TreeData[] {
    return tree.filter(value => value.type === type)
      .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
  }
}
