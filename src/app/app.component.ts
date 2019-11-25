import { Component } from '@angular/core';
import { PrimengService } from './service/primeng.service';
import { MessageService } from 'primeng/api';
import { IDropdown } from './dropdown';
import { ITabs } from './tabs';
import { ITable } from './table';
import { IDataview } from './dataview';
// import { ICarousel } from './carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularprimeng';
  btnToggle: boolean = false;
  accordion: boolean = false;
  dropdown: boolean = false;
  lightBox: boolean = false;
  tabs: boolean = false;
  rating: boolean = false;
  slider: boolean = false;
  carousel: boolean = false;
  table: boolean = false;
  dataview: boolean = false;
  chart: boolean = false;
  display: boolean = false;
  toast: boolean = false;
  datepicker: boolean = false;
  ratingMessag: string;
  accordionData;
  primeDropdown: IDropdown[];
  primeTabs: ITabs[];
  primeTable: ITable[];
  candidate: ITable;
  primeDataView: IDataview[];
  cols: any[];
  departments: any[];
  chartdata;
  // primeCarousel: ICarousel[];
  public selectedDropdown: string;
  images = [];
  inputRating: number = 3;
  inputSlider: number = 50;
  date1: Date;
  constructor(private primengService: PrimengService, private toastService: MessageService) {

  }

  openAccordion() {
    this.primengService.showAccordion().subscribe((res) => {
      this.dropdown = false;
      this.lightBox = false;
      this.tabs = false;
      this.rating = false;
      this.slider = false;
      this.table = false;
      this.dataview = false;
      this.chart = false;
      this.toast = false;
      this.datepicker = false;
      //  this.carousel = false;
      this.accordion = true;
      this.accordionData = res;
    })
  }
  openDropdown() {
    this.primengService.showDropdown().subscribe((res) => {
      this.accordion = false;
      this.lightBox = false;
      this.tabs = false;
      this.rating = false;
      this.slider = false;
      this.table = false;
      this.dataview = false;
      this.chart = false;
      this.toast = false;
      this.datepicker = false;
      //  this.carousel = false;
      this.dropdown = true;
      this.primeDropdown = res;
    })
  }
  openLightBox() {
    this.accordion = false;
    this.dropdown = false;
    this.tabs = false;
    this.rating = false;
    this.slider = false;
    this.table = false;
    this.dataview = false;
    this.chart = false;
    this.toast = false;
    this.datepicker = false;
    // this.carousel = false;
    this.lightBox = true;
    this.images.push({ source: 'https://www.primefaces.org/primeng/assets/showcase/images/demo/sopranos/sopranos1.jpg', thumbnail: 'https://www.primefaces.org/primeng/assets/showcase/images/demo/sopranos/sopranos1_small.jpg', title: 'Slide 1' });
    this.images.push({ source: 'https://www.primefaces.org/primeng/assets/showcase/images/demo/sopranos/sopranos2.jpg', thumbnail: 'https://www.primefaces.org/primeng/assets/showcase/images/demo/sopranos/sopranos2_small.jpg', title: 'Slide 2' });
  }
  openTabs() {
    this.primengService.showTabs().subscribe((res) => {
      this.accordion = false;
      this.lightBox = false;
      this.dropdown = false;
      this.rating = false;
      this.slider = false;
      this.table = false;
      this.dataview = false;
      this.chart = false;
      this.toast = false;
      this.datepicker = false;
      // this.carousel = false;
      this.tabs = true;
      this.primeTabs = res;
    })
  }
  openRating() {
    this.accordion = false;
    this.lightBox = false;
    this.dropdown = false;
    this.tabs = false;
    this.slider = false;
    this.table = false;
    this.dataview = false;
    this.chart = false;
    this.toast = false;
    this.datepicker = false;
    // this.carousel = false;
    this.rating = true;
  }
  openSlider() {
    this.accordion = false;
    this.lightBox = false;
    this.dropdown = false;
    this.tabs = false;
    this.rating = false;
    this.table = false;
    this.dataview = false;
    this.chart = false;
    this.toast = false;
    this.datepicker = false;
    //  this.carousel = false;
    this.slider = true;
  }
  // openCarousel() {
  //   this.primengService.showCarousel().subscribe((res) => {
  //     this.accordion = false;
  //     this.lightBox = false;
  //     this.dropdown = false;
  //     this.tabs = false;
  //     this.rating = false;
  //     this.carousel = true;
  //     this.primeCarousel = res
  //   })

  // }
  openTable() {
    this.primengService.showTable().subscribe((res) => {
      this.accordion = false;
      this.lightBox = false;
      this.dropdown = false;
      this.tabs = false;
      this.rating = false;
      this.slider = false;
      this.dataview = false;
      this.chart = false;
      this.toast = false;
      this.datepicker = false;
      this.table = true;
      this.departments = [
        { label: 'All Departments', value: null },
        { label: 'Mechanical', value: 'Mechanical' },
        { label: 'CSC', value: 'CSC' },
        { label: 'Civil', value: 'Civil' },
        { label: 'IT', value: 'IT' }
      ];
      this.cols = [
        { field: 'name', header: 'Name' },
        { field: 'college', header: 'College' },
        { field: 'department', header: 'Department' }
      ];
      this.primeTable = res;

    });
  }
  openDataView() {
    this.primengService.showDataview().subscribe((res) => {
      this.accordion = false;
      this.lightBox = false;
      this.dropdown = false;
      this.tabs = false;
      this.rating = false;
      this.slider = false;
      this.table = false;
      this.chart = false;
      this.toast = false;
      this.datepicker = false;
      this.dataview = true;
      this.primeDataView = res;
    })
    this.dataview = true;
  }
  openChart() {
    this.accordion = false;
    this.lightBox = false;
    this.dropdown = false;
    this.tabs = false;
    this.rating = false;
    this.slider = false;
    this.table = false;
    this.dataview = false;
    this.toast = false;
    this.datepicker = false;
    this.chartdata = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
    this.chart = true;
  }
  openToast() {
    this.accordion = false;
    this.lightBox = false;
    this.dropdown = false;
    this.tabs = false;
    this.rating = false;
    this.slider = false;
    this.table = false;
    this.dataview = false;
    this.chart = false;
    this.datepicker = false;
    this.toast = true;
  }
  showSuccess() {
    this.toastService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }
  showConfirm() {
    this.toastService.clear();
    this.toastService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure?', detail: 'Confirm to proceed' });
  }
  onConfirm() {
    this.toastService.clear('c');
  }

  onReject() {
    this.toastService.clear('c');
  }

  clear() {
    this.toastService.clear();
  }
  showDatepicker() {
    this.accordion = false;
    this.lightBox = false;
    this.dropdown = false;
    this.tabs = false;
    this.rating = false;
    this.slider = false;
    this.table = false;
    this.dataview = false;
    this.chart = false;
    this.toast = false;
    this.datepicker = true;
  }
  handleRate(event: any) {
    this.ratingMessag = "You have rated " + event.value;
  }
  toggleMenu() {
    this.btnToggle = !this.btnToggle;
  }
  editStudent(data: ITable): void {
    this.candidate = data;
    // console.log(data);
    this.display = true;
  }
  updateStudent() {
    this.primengService.updateStudentRecord(this.candidate).subscribe((res) => {
      this.display = false;
      this.showUpdateSuccess();
      this.studentList();
    });
  }
  studentList() {
    return this.primengService.showTable().subscribe(res => this.primeTable = res);
  }
  showUpdateSuccess() {
    this.toastService.add({ severity: 'success', summary: 'Success Message', detail: 'Student Details Updated Successfully' });
  }
  showDeleteSuccess() {
    this.toastService.add({ severity: 'error', summary: 'Success Message', detail: 'Student Details Deleted Successfully' });
  }
  studentDeleteConfirm() {
    this.toastService.clear();
    this.toastService.add({ key: 'c', sticky: true, severity: 'warn', summary: 'Are you sure wana delete?', detail: 'Confirm to proceed' });
  }
  deleteStudent() {
    this.studentDeleteConfirm();
  }
  deleteConfirm() {
    this.primengService.deleteStudentRecord(this.candidate).subscribe((res) => {
      this.toastService.clear('c');
      this.showDeleteSuccess();
      this.studentList();
    });
  }


}
