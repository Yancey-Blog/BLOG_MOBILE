export interface ArticleStoreType {
  posts: IArticleDetail[];
  curPage: number;
  isAutoLoad: boolean;
  isManualLoad: boolean;
  isLoading: boolean;
  postAmouts: boolean;
  total: number;
  detail: IDetail;
  getPostsByPage: (page: number) => void;
  getPostById: (id : string) => void;
  getDetail: (id : string) => void;
}

export interface IArticleProps {
  articleStore ? : ArticleStoreType;
  match?: any;
}
export interface IArticleDetail {
  _id: string;
  header_cover: string;
  title: string;
  summary: string;
  content: string;
  publish_date: string;
  last_modified_date: string;
  tags: string[];
  like_count: string[];
  pv_count: number;
}

export interface IPrevNext {
  header_cover: string;
  id: string;
  title: string;
}

export interface IDetail {
  curArticle: IArticleDetail;
  nextArticle: IPrevNext;
  previousArticle: IPrevNext;
}

export interface IArchive {
  _id: {
    year: number
  };
  data: {
    month: number;
    data: IArchiveMonth[];
  }
}

export interface IArchiveMonth {
  day: number;
  id: string;
  pv_count: number;
  title: string;
}

export interface ILike {
  like_number: number;
  liked: boolean;
}

export interface IIncreasePV {
  n: number;
  nModified: number;
  ok: number;
}

export interface IHeaderState {
  isTop: boolean;
}