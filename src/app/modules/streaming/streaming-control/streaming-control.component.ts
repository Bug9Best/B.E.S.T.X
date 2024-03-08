import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'streaming-control',
  templateUrl: './streaming-control.component.html',
  styleUrl: './streaming-control.component.scss'
})
export class StreamingControlComponent {

  selectedType: any = 0;
  visible: boolean = false;
  @Input() labelButton: string = "สร้างหรือเข้าร่วมสตรีมมิ่งด้วยรหัส";

  listPrivacy: any[] = [
    { id: 1, label: "สตรีมมิ่งสาธารณะ", value: "public" },
    { id: 2, label: "สตรีมมิ่งส่วนตัว", value: "private" },
  ];

  formData: FormGroup = new FormGroup({
    streaming_name: new FormControl('', Validators.required),
    streaming_description: new FormControl(''),
    streaming_privacy: new FormControl('public', Validators.required),
    streaming_password: new FormControl(),
  });

  constructor() { 
    this.formData.get('streaming_privacy')?.valueChanges.subscribe((value) => {
      if (value === 'private') {
        this.formData.get('streaming_password')?.setValidators([Validators.required]);
      } else {
        this.formData.get('streaming_password')?.clearValidators();
      }
      this.formData.get('streaming_password')?.updateValueAndValidity();
    });
  }


  get privacy(): any {
    return this.formData.get('streaming_privacy')?.value;
  }

  onOpenStreaming() {
    this.visible = true;
  }

  onCreateStreaming() {
    let value = this.formData.value;
    console.log(value);
  }
}
