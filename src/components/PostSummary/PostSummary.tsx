import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import LazyLoad from 'react-lazyload';
import InfiniteScroll from 'react-infinite-scroller';
import PostSummarySkeleton from '@components/Common/Skeleton/PostSummarySkeleton';
import routePath from '@constants/routePath';
import styles from './PostSummary.module.scss';
import { formatJSONDate, formatCommonDate } from '@tools/tools';
import { webpSuffix } from '@constants/constants';
import { IArticleDetail, IArticleProps } from '../../types/article';

@inject('articleStore')
@observer
class PostSummary extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }

  public componentWillMount() {
    window.scrollTo(0, 0);
  }

  public componentDidMount() {
    // todo
  }

  public componentWillUnmount() {
    // todo
  }

  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    const items = (
      <section className={styles.post_summary_wrapper}>
        {articleStore!.posts.map((post: IArticleDetail, index: number) => (
          <div
            className={classNames(
              styles.post_summary_item,
              index === 0 ? styles.expand_summary_item : '',
            )}
            key={index}
          >
            <Link to={`${routePath.blogDetail}${post._id}`}>
              <figure className={styles.item_poster}>
                <LazyLoad throttle={200} height={300}>
                  <img
                    src={
                      isWebp
                        ? `${post.header_cover}${webpSuffix}`
                        : post.header_cover
                    }
                    alt={post.title}
                  />
                </LazyLoad>
              </figure>
            </Link>
            <div className={styles.item_content}>
              <h3 className={styles.item_content_title}>
                <Link to={`${routePath.blogDetail}${post._id}`}>
                  {post.title}
                </Link>
              </h3>
              <div className={styles.attached_info}>
                <div>
                  <p>
                    Added to{' '}
                    <Link to={`${routePath.tag}${post.tags[0]}`}>
                      <span className={styles.tag_name}>{post.tags[0]}</span>
                    </Link>
                  </p>
                  <time className={styles.release_date}>
                    {formatCommonDate(formatJSONDate(post.publish_date))}
                  </time>
                </div>
                <div className={styles.pv_count}>{post.pv_count}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );

    return (
      <>
        <InfiniteScroll
          pageStart={0}
          loadMore={articleStore!.getPostsByPage.bind(this)}
          hasMore={articleStore!.isAutoLoad}
          loader={
            <div className={styles.skeleton_wrapper} key={0}>
              <PostSummarySkeleton />
            </div>
          }
        >
          {items}
        </InfiniteScroll>
        {!articleStore!.isAutoLoad && !articleStore!.isManualLoad ? (
          <p className={styles.post_warning}>no more articles</p>
        ) : null}
        {articleStore!.isManualLoad && !articleStore!.isLoading ? (
          <span className={styles.load_more}>
            <button
              className={styles.load_more_btn}
              onClick={() =>
                articleStore!.getPostsByPage(articleStore!.curPage + 1)
              }
            >
              Load More
            </button>
          </span>
        ) : null}
        {articleStore!.isManualLoad && articleStore!.isLoading ? (
          <div className={styles.skeleton_wrapper}>
            <PostSummarySkeleton />
          </div>
        ) : null}
      </>
    );
  }
}

export default PostSummary;
