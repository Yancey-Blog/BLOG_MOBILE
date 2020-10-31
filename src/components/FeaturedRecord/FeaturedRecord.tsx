import * as React from 'react';
import styles from './FeaturedRecord.module.scss';
import { observer, inject } from 'mobx-react';
import LazyLoad from 'react-lazyload';
import { formatJSONDate } from '@tools/tools';
import { webpSuffix } from '@constants/constants';
import { IMusicProps, IFeaturedRecords } from '../../types/music';

@inject('musicStore')
@observer
class FeaturedRecord extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const isWebp = window.localStorage.isWebp === 'true';
    const { musicStore } = this.props;

    return (
      <section>
        <h2>FEATURED RECORDS</h2>
        <ul>
          {musicStore!.featuredRecordsData.map(
            (featuredRecord: IFeaturedRecords) => (
              <li
                className={styles.featured_records_item}
                key={featuredRecord._id}
              >
                <figure>
                  <LazyLoad throttle={200} height={300}>
                    <img
                      className={styles.cover}
                      src={
                        isWebp
                          ? `${featuredRecord.cover}${webpSuffix}`
                          : featuredRecord.cover
                      }
                    />
                  </LazyLoad>
                </figure>
                <div className={styles.featured_records_intro}>
                  <time className={styles.featured_records_release_time}>
                    {formatJSONDate(featuredRecord.release_date).split(' ')[0]}
                  </time>
                  <p className={styles.featured_records_title}>
                    {featuredRecord.album_name}
                    <br />
                    <span className={styles.featured_records_singer}>
                      {featuredRecord.artist}
                    </span>
                  </p>
                  <button className={styles.featured_records_buy_btn}>
                    <a
                      href={featuredRecord.buy_url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      BUY NOW
                    </a>
                  </button>
                </div>
              </li>
            ),
          )}
        </ul>
      </section>
    );
  }
}

export default FeaturedRecord;
