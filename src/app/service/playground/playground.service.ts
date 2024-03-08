import { Injectable } from '@angular/core';
import { BaseModel } from '../base.model';
import { BaseService } from '../base.service';

export interface PlaygroundModel extends BaseModel {
  id: string;
  director_id: string | number;
  approved: number;
  comment: string;
  attachment: string;
}

@Injectable({ providedIn: 'root' })
export class PlaygroundService extends BaseService<PlaygroundModel> {
  public override path: string = "chat";
}