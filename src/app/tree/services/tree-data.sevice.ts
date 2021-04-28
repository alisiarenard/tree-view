import { Injectable } from '@angular/core';
import { TreeData } from '../interfaces/tree-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class TreeDataService {

  constructor(private http: HttpClient) {
  }

  getTreeData(): Observable<{ tree: TreeData[] }> {
    return this.http.get<{ tree: TreeData[] }>('../../assets/data.json');
  }
}
