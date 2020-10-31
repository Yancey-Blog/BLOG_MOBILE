import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './BlogDetail.module.scss';
import 'highlight.js/styles/github.css';
import PostDetailSkeleton from '@components/Common/Skeleton/PostDetailSkeleton';
import routePath from '@constants/routePath';
import { webpSuffix } from '@constants/constants';
import { formatCommonDate, formatJSONDate } from '@tools/tools';
import { IArticleProps } from '../../types/article';

@inject('articleStore')
@observer
class BlogDetail extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    const { articleStore, match } = this.props;
    articleStore!.getDetail(match.params.id);
  }

  public componentWillUnmount() {
    // todo
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';

    return (
      <>
        {articleStore!.isLoading ? (
          <div className={styles.skeleton}>
            <PostDetailSkeleton />
          </div>
        ) : (
          <article className={styles.blog_detail_wrapper}>
            <div className={styles.meta}>
              <figure className={styles.avatar} />
              <div className={styles.info}>
                <span className={styles.user}>Yancey Leo</span>
                <span className={styles.post_meta}>
                  <time>
                    {formatCommonDate(
                      formatJSONDate(
                        articleStore!.detail.curArticle.publish_date,
                      ),
                    )}
                  </time>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span>{articleStore!.detail.curArticle.pv_count} PV</span>
                </span>
              </div>
            </div>
            <figure
              className={styles.cover}
              style={{
                backgroundImage: `url(${
                  isWebp
                    ? `${
                        articleStore!.detail.curArticle.header_cover
                      }${webpSuffix}`
                    : articleStore!.detail.curArticle.header_cover
                })`,
              }}
            />
            <h1>{articleStore!.detail.curArticle.title}</h1>
            <div
              className='blog_detail_content'
              dangerouslySetInnerHTML={{
                __html: articleStore!.detail.curArticle.content,
              }}
            />
            <ul className={styles.tags}>
              {articleStore!.detail.curArticle.tags.map((tag: string) => (
                <li className={styles.tag} key={tag}>
                  <Link to={`${routePath.tag}/tag`}>{tag}</Link>
                </li>
              ))}
            </ul>
            <div className={classNames(styles.meta, styles.author)}>
              <figure className={styles.avatar} />
              <div className={styles.info}>
                <span className={styles.user}>Yancey Leo</span>
                <span className={styles.intro}>
                  Developer, Editor of JavaScript In Plain English (JSIPE)
                </span>
              </div>
            </div>
          </article>
        )}
      </>
    );
  }
}

export default BlogDetail;
