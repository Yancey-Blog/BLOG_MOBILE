import { GET } from '../tools/axios';
import { AxiosResponse } from 'axios';
import { IAnnouncement } from '../types/layout';

class LayoutsService {
  public getAnnouncement(): Promise<AxiosResponse<IAnnouncement>> {
    return GET(`/latestAnnouncements`, null, '');
  }
}

const layoutsService = new LayoutsService();

export default layoutsService;
