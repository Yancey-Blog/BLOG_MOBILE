import * as React from 'react';
import styles from './Loading.module.scss';

class Loading extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className={styles.loading}>
        <svg
          viewBox='0 0 100 100'
          preserveAspectRatio='xMidYMid'
        >
          <g transform='translate(50,50)'>
            <g
              ng-attr-transform='scale({{config.scale}})'
              transform='scale(0.6)'
            >
              <circle
                cx='0'
                cy='0'
                r='50'
                ng-attr-fill='{{config.c1}}'
                fill='#FFA500'
              />
              <circle
                cx='0'
                ng-attr-cy='{{config.cy}}'
                ng-attr-r='{{config.r}}'
                ng-attr-fill='{{config.c2}}'
                cy='-28'
                r='15'
                fill='#fff8eb'
                transform='rotate(312)'
              >
                <animateTransform
                  attributeName='transform'
                  type='rotate'
                  calcMode='linear'
                  values='0 0 0;360 0 0'
                  keyTimes='0;1'
                  dur='1s'
                  begin='0s'
                  repeatCount='indefinite'
                />
              </circle>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Loading;
