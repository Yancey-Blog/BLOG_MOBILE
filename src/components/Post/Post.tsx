import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Post.module.scss';
import svgIcons from '@assets/images/svg_sprite.svg';
import routePath from '@constants/routePath';
import { webpSuffix } from '@constants/constants';
import { formatJSONDate, formatCommonDate } from '@tools/tools';
import { svgSprite } from '@constants/constants';
import { IArticleDetail, ArticleStoreType } from '../../types/article';

interface IArticleProps {
  articleStore?: ArticleStoreType;
}
@inject('articleStore')
@observer
class Post extends React.Component<IArticleProps, {}> {
  constructor(props: IArticleProps) {
    super(props);
    this.state = {};
  }
  public render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';
    return (
      <section className={styles.post_wrapper}>
        <ul className={styles.post_list}>
          {articleStore!.posts.map((post: IArticleDetail, index: number) => (
            <li className={styles.post_item} key={post._id}>
              <figure
                className={styles.cover}
                style={{
                  backgroundImage: `url(${
                    isWebp
                      ? `${post.header_cover}${webpSuffix}`
                      : post.header_cover
                  })`,
                }}
              />
              <div className={styles.meta}>
                <Link
                  to={`${routePath.tag}${post.tags[0]}`}
                  className={styles.tag}
                >
                  {post.tags[0]}
                </Link>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.summary}>{post.summary}</p>
                <span className={styles.data}>
                  <svg className={classNames(styles.icon, styles.calendar)}>
                    <use xlinkHref={`${svgIcons}${svgSprite.calendar}`} />
                  </svg>
                  <time>
                    {formatCommonDate(formatJSONDate(post.publish_date))}
                  </time>
                </span>
                <span className={styles.data}>
                  <svg className={classNames(styles.icon, styles.comments)}>
                    <use xlinkHref={`${svgIcons}${svgSprite.comments}`} />
                  </svg>
                  <span>{post.pv_count}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Post;
