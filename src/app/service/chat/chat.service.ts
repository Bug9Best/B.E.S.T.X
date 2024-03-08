import { Injectable } from '@angular/core';
import { BaseModel } from '../base.model';
import { BaseService } from '../base.service';

export interface ChatModel extends BaseModel {
  id: string;
  director_id: string | number;
  approved: number;
  comment: string;
  attachment: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService extends BaseService<ChatModel> {
  public override path: string = "chat";
}
