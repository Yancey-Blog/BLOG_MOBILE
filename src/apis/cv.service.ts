import { GET } from '../tools/axios';
import { AxiosResponse } from 'axios';
import { IUser, IWorkExperience, IProgramExperience } from '../types/cv';

class HomeService {
  public getUser(): Promise<AxiosResponse<IUser>> {
    return GET('/userInfo', null, '');
  }

  public getWorkExperience(): Promise<AxiosResponse<IWorkExperience[]>> {
    return GET('/workExperience', null, '');
  }

  public getProgramExperience(): Promise<AxiosResponse<IProgramExperience[]>> {
    return GET('/programExperience', null, '');
  }
}

const homeService = new HomeService();

export default homeService;
