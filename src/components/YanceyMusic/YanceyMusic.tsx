import * as React from 'react';
import styles from './YanceyMusic.module.scss';
import { observer, inject } from 'mobx-react';
import LazyLoad from 'react-lazyload';
import { formatJSONDate } from '@tools/tools';
import { webpSuffix } from '@constants/constants';
import { IMusicProps, IYanceyMusic } from '../../types/music';

@inject('musicStore')
@observer
class YanceyMusic extends React.Component<IMusicProps, {}> {
  constructor(props: IMusicProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { musicStore } = this.props;
    const isWebp = window.localStorage.isWebp === 'true';

    return (
      <section>
        <h2>YANCEY MUSIC</h2>
        <ul>
          {musicStore!.yanceyMusicData.map((yanceymusic: IYanceyMusic) => (
            <li className={styles.yancey_music_item} key={yanceymusic._id}>
              <figure>
                <LazyLoad throttle={200}  height={236}>
                  <img
                    className={styles.cover}
                    src={
                      isWebp
                        ? `${yanceymusic.cover}${webpSuffix}`
                        : yanceymusic.cover
                    }
                  />
                </LazyLoad>
              </figure>

              <div className={styles.music_info}>
                <time>
                  {formatJSONDate(yanceymusic.release_date).split(' ')[0]}
                </time>
                <p className={styles.title}>{yanceymusic.title}</p>
                <button className={styles.listen_link}>
                  <a
                    href={yanceymusic.soundCloud_url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    LISTEN
                  </a>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default YanceyMusic;
