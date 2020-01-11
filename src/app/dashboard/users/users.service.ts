import { Injectable } from '@angular/core';
import { IUser, IScienceProfile } from '@ngx/models';
import { DefaultDataService } from 'src/app/root-service/default-data.service';


@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(
    private defaulDataService: DefaultDataService,
  ) { }

  getAllUser(): IUser[] {
    return this.defaulDataService.getUsers();
  }

  getScienceProfile(id: string): IScienceProfile {
    return this.defaulDataService.getScienceProfile();
  }

  updateScienceProfile(data: IScienceProfile) {
    console.log(data);
  }

}
