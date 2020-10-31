import * as React from 'react';
import { observer, inject } from 'mobx-react';
// import cs from 'classnames';
import styles from './CV.module.scss';
import { ICVProps, IWorkExperience, IProgramExperience } from '../../types/cv';

@inject('cvStore')
@observer
class CV extends React.Component<ICVProps, {}> {
  constructor(props: ICVProps) {
    super(props);
    this.state = {};
  }

  public componentDidMount() {
    const { cvStore } = this.props;
    cvStore!.getUser();
    cvStore!.getWorkExperience();
    cvStore!.getProgramExperience();
  }

  public render() {
    const { cvStore } = this.props;
    return (
      <section className={styles.cv_wrapper}>
        <div className={styles.intro}>
          <h1 className={styles.intro_name}>
            {/* <span>Hello</span>, I'm Yancey Leo */}
            <span>こんにちは</span>、Yanceyです！
          </h1>
        </div>
        <div className={styles.cv_container}>
          <h2 className={styles.cv_header}>Work Experience</h2>
          <div className={styles.cv_content}>
            {cvStore!.workExperience.map((item: IWorkExperience) => (
              <div className={styles.inner} key={item._id}>
                <h3 className={styles.company}>{item.enterprise_name}</h3>
                <p className={styles.position}>{item.position}</p>
                <time className={styles.period}>{item.in_service}</time>
                <p className={styles.detail}>{item.work_content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cv_container}>
          <h2 className={styles.cv_header}>Program Experience</h2>
          <div className={styles.cv_content}>
            {cvStore!.programExperience.map((item: IProgramExperience) => (
              <div className={styles.inner} key={item._id}>
                <h3 className={styles.company}>
                  <a href={item.program_url}>{item.program_name}</a>
                </h3>
                <p className={styles.detail}>{item.program_content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CV;
