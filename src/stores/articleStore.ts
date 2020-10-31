import {
  observable,
  runInAction,
} from 'mobx';
import hljs from 'highlight.js';
import {
  articleService
} from '../apis/index.service';
import {
  IArticleDetail,
  IDetail,
} from '../types/article';

import routePath from '@constants/routePath';

import history from '../history';

class ArticleStore {
  @observable public posts: IArticleDetail[] = [];
  @observable public curPage: number = 1;
  @observable public isAutoLoad: boolean = true;
  @observable public isManualLoad: boolean = false;
  @observable public isLoading: boolean = false;
  @observable public total: number = 0;
  @observable public detail: IDetail = {
    curArticle: {
      _id: '',
      header_cover: '',
      title: '',
      summary: '',
      content: '',
      publish_date: '',
      last_modified_date: '',
      tags: [],
      like_count: [],
      pv_count: 0,
    },
    nextArticle: {
      id: '',
      header_cover: '',
      title: '',
    },
    previousArticle: {
      id: '',
      header_cover: '',
      title: '',
    },
  };

  constructor() {
    this.posts = [];
    this.curPage = 1;
    this.isAutoLoad = true;
    this.isManualLoad = false;
    this.isLoading = false;
    this.total = 0;
    this.detail = {
      curArticle: {
        _id: '',
        header_cover: '',
        title: '',
        summary: '',
        content: '',
        publish_date: '',
        last_modified_date: '',
        tags: [],
        like_count: [],
        pv_count: 0,
      },
      nextArticle: {
        id: '',
        header_cover: '',
        title: '',
      },
      previousArticle: {
        id: '',
        header_cover: '',
        title: '',
      },
    };
  }

  public showImageAlt() {
    const imgTag = document.querySelectorAll('.blog_detail_content img');
    imgTag.forEach(value => {
      (value.parentNode as HTMLParagraphElement).insertAdjacentHTML(
        'beforeend',
        `<span class='img_alt'>${(value as HTMLImageElement).alt}</span>`,
      );
    });
  }

  public initHLJS() {
    const codeBlock = document.querySelectorAll('pre code');
    codeBlock.forEach(value => hljs.highlightBlock(value));
  }

  public async getDetail(id: string) {
    await this.getPostById(id);
    this.initHLJS();
    this.showImageAlt();
    this.increasePV(id);
  }

  public getPostsByPage = async (page: number) => {
    this.curPage = page;
    this.isLoading = true;
    try {
      const res = await articleService.getPostsByPage(page);
      runInAction(() => {
        this.posts = [...this.posts, ...res.data];
        if (this.curPage === 2) {
          this.isManualLoad = true;
          this.isAutoLoad = false;
        }
      });
    } catch (e) {
      this.isManualLoad = false;
      this.isAutoLoad = false;
    } finally {
      this.isLoading = false;
    }
  };

  public getPostById = async (id: string) => {
    this.isLoading = true;
    try {
      const res = await articleService.getPostById(id);
      runInAction(() => {
        this.detail = res.data;
        this.posts = [];
      });
    } catch (e) {
      history.push(routePath.notFound);
    } finally {
      this.isLoading = false;
    }
  };

  public increasePV = async (id: string) => {
    try {
      await articleService.increasePV(id);
    } catch (e) {
      // todo
    } finally {
      // todo
    }
  };
}

const articleStore = new ArticleStore();

export default articleStore;