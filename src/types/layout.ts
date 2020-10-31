interface LayoutsStoreType {
  animatable: boolean;
  visible: boolean;
  themeType: boolean;
  announcement: string;
  toggleMenu: () => void;
  handleTransitionEnd: () => void;
  handleSwitch: () => void;
  getAnnouncementData: () => void;
}

export interface ILayoutsProps {
  layoutsStore ? : LayoutsStoreType;
}

export interface IAnnouncement {
  __v: number;
  _id: string;
  content: string;
  upload_date: string;
}