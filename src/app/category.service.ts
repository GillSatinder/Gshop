import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

// getAllCategories() {
 //   return this.http.get('http://localhost:8000/api/categories');
// }

getAllCategories() {
    return this.http.get('http://ec2-13-236-67-227.ap-southeast-2.compute.amazonaws.com/api/categories');
}

}
