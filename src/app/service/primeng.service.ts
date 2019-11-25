import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDropdown } from '../dropdown';
import { ITabs } from '../tabs';
import { ITable } from '../table';
import { IDataview } from '../dataview';
//import { ICarousel } from '../carousel';
@Injectable({
  providedIn: 'root'
})
export class PrimengService {
  private accordionUrl: string = "http://localhost:3000/accordion";
  private dropDownUrl: string = "http://localhost:3000/dropdown";
  private tabsUrl: string = "http://localhost:3000/tabs";
  private tableUrl: string = "http://localhost:3000/table";
  private dataviewUrl: string = "http://localhost:3000/dataview";
  //private carouselUrl: string = 'http://localhost:3000/carousel';
  constructor(private http: HttpClient) { }

  showAccordion() {
    return this.http.get(this.accordionUrl);
  }
  showDropdown(): Observable<IDropdown[]> {
    return this.http.get<IDropdown[]>(this.dropDownUrl);
  }
  showTabs(): Observable<ITabs[]> {
    return this.http.get<ITabs[]>(this.tabsUrl);
  }
  showTable(): Observable<ITable[]> {
    return this.http.get<ITable[]>(this.tableUrl);
  }
  showDataview(): Observable<IDataview[]> {
    return this.http.get<IDataview[]>(this.dataviewUrl);
  }
  updateStudentRecord(value): Observable<ITable> {
    return this.http.put<ITable>(this.tableUrl + "/" + value.id, value);
  }
  deleteStudentRecord(value): Observable<ITable> {
    return this.http.delete<ITable>(this.tableUrl + "/" + value.id);
  }
  // showCarousel(): Observable<ICarousel[]> {
  //   return this.http.get<ICarousel[]>(this.carouselUrl);
  // }
}
