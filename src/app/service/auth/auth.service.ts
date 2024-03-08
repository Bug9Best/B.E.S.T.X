import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { BaseModel } from '../base.model';

export interface AuthModel extends BaseModel {
  id: string;
  director_id: string | number;
  approved: number;
  comment: string;
  attachment: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService extends BaseService<AuthModel> {
  public override path: string = "auth";
}
