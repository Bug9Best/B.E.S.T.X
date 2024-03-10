import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { CourseService } from '../../../service/course/course.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../service/storage.service';

@Component({
  selector: 'course-create',
  templateUrl: './course-create.component.html',
  styleUrl: './course-create.component.scss'
})
export class CourseCreateComponent {
  fileUpload: any;
  public items: MenuItem[] = this.initMenu();


  formData: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    term: new FormControl(null, Validators.required),
    credit: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    instructor_1: new FormControl(null, Validators.required),
    instructor_2: new FormControl(null),
    tag: new FormControl(null, Validators.required),
    image: new FormControl(null),
  });

  listForm: any = [
    { label: 'ชื่อวิชา', name: 'name', type: 'text', required: true },
    { label: 'รหัสวิชา', name: 'code', type: 'text', required: true },
    { label: 'ปีการศึกษา', name: 'term', type: 'year', required: true },
    { label: 'หน่วยกิต', name: 'credit', type: 'number', required: true },
    { label: 'รายละเอียด', name: 'description', type: 'textarea', required: true },
    { label: 'อาจารย์ผู้สอนคนที่หนึ่ง', name: 'instructor_1', type: 'text', required: true },
    { label: 'อาจารย์ผู้สอนคนที่สอง (ถ้ามี)', name: 'instructor_2', type: 'text', required: false },
    { label: 'แท็ก', name: 'tag', type: 'tag', required: false },
    { type: "divider" },
    { label: 'รูปภาพ', name: 'image', type: 'file', required: false }
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private courseService: CourseService,
    private storageService: StorageService
  ) { }

  private initMenu() {
    return [
      { label: 'หน้าแรก', routerLink: '/course' },
      { label: 'เพิ่มรายวิชา' },
    ];
  }

  onUploadFile(file: any) {
    this.fileUpload = file.files[0];
    // this.formData.patchValue({ image: this.fileUpload });
    this.storageService.uploadImage(this.fileUpload).then((res) => {
      console.log(res);
    });
  }

  clearFileUpload() {
    this.fileUpload = null;
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: 'app',
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

  createCourse() {
    let values = this.formData;
    console.log(values.value);
    if (values.invalid) {
      this.showMessage('warn', 'โปรดทราบ', 'กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }
    this.courseService
      .create(values.value)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/course', res.id]);
          this.showMessage('success', 'สำเร็จ', 'เพิ่มรายวิชาสำเร็จ');
        },
        error: (err) => {
          this.showMessage('error', 'ล้มเหลว', err.message);
        }
      });
  }
}
