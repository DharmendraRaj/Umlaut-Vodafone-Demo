import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private BaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

getEmployeeList():Observable<any>{
    return this.http.get(`${this.BaseUrl}/getAllEmployees`);
}
getEmployee(id: number): Observable<any> {
  return this.http.get(`${this.BaseUrl}/getEmpByemployeeId/${id}`);
}

createEmployee(employee: Object): Observable<Object> {
  return this.http.post(`${this.BaseUrl}/saveEmployee`, employee);
}

updateEmployee(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.BaseUrl}/updateEmployee/${id}`, value);
}

deleteEmployee(id: number): Observable<any> {
  return this.http.delete(`${this.BaseUrl}/deleteEmployee/${id}`, { responseType: 'text' });
}

}