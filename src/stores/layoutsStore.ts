import {
  observable,
  action,
  runInAction
} from 'mobx';

import {
  layoutsService
} from '../apis/index.service';

class LayoutsStore {
  @observable public animatable: boolean = false;
  @observable public visible: boolean = false;
  @observable public themeType: boolean = false;
  @observable public announcement: string = '';

  constructor() {
    this.animatable = false;
    this.visible = false;
    this.themeType = false;
    this.announcement = '';
  }

  @action
  public toggleMenu() {
    this.animatable = true;
    this.visible = !this.visible;
  }

  @action
  public handleTransitionEnd() {
    this.animatable = false;
  }

  @action
  public handleSwitch() {
    this.themeType = !this.themeType;
  }

  public getAnnouncementData = async () => {
    try {
      const res = await layoutsService.getAnnouncement();
      runInAction(() => {
        this.announcement = res.data.content;
      });
    } catch (error) {
      // todo
    } finally {
      // todo
    }
  }

}

const layoutsStore = new LayoutsStore();

export default layoutsStore;