import {
  observable,
  runInAction,
} from 'mobx';
import {
  cvService,
} from '../apis/index.service';
import {
  IUser,
  IWorkExperience,
  IProgramExperience,
} from '../types/cv';

class CVStore {
  @observable public user: IUser = {
    avatar: '',
    city: '',
    position: '',
    self_introduction: '',
    user_name: '',
  };
  @observable public workExperience: IWorkExperience[] = [];
  @observable public programExperience: IProgramExperience[] = [];

  constructor() {
    this.user = {
      avatar: '',
      city: '',
      position: '',
      self_introduction: '',
      user_name: '',
    };
    this.workExperience = [];
    this.programExperience = [];
  }

  public getUser = async () => {
    try {
      const res = await cvService.getUser();
      runInAction(() => {
        this.user = res.data;
      });
    } catch (e) {
      // todo
    }
  };

  public getWorkExperience = async () => {
    try {
      const res = await cvService.getWorkExperience();
      runInAction(() => {
        this.workExperience = res.data;
      });
    } catch (e) {
      // todo
    }
  };

  public getProgramExperience = async () => {
    try {
      const res = await cvService.getProgramExperience();
      runInAction(() => {
        this.programExperience = res.data;
      });
    } catch (e) {
      // todo
    }
  };
}

const cvStore = new CVStore();

export default cvStore;