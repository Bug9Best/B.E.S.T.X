import { Injectable } from '@angular/core';
import { BaseModel } from '../base.model';
import { BaseService } from '../base.service';

export interface StreamingModel extends BaseModel {
  id: string;
  director_id: string | number;
  approved: number;
  comment: string;
  attachment: string;
}

@Injectable({ providedIn: 'root' })
export class StreamingService extends BaseService<StreamingModel> {
  public override path: string = "chat";
}