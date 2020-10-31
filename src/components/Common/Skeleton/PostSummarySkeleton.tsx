import * as React from 'react';
import ContentLoader from 'react-content-loader';

class PostSummarySkeleton extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        <ContentLoader
          height={327}
          width={327}
          speed={2}
          primaryColor='#f3f3f3'
          secondaryColor='#ecebeb'
        >
          <circle cx='305' cy='300' r='22' />
          <rect x='0' y='240' rx='4' ry='4' width='204' height='18' />
          <rect x='0' y='280' rx='4' ry='4' width='120' height='14' />
          <rect x='0' y='0' rx='5' ry='5' width='327' height='216' />
          <rect x='0' y='304' rx='4' ry='4' width='140' height='12' />
        </ContentLoader>
        <ContentLoader
          height={327}
          width={327}
          speed={2}
          primaryColor='#f3f3f3'
          secondaryColor='#ecebeb'
        >
          <circle cx='305' cy='300' r='22' />
          <rect x='0' y='240' rx='4' ry='4' width='204' height='18' />
          <rect x='0' y='280' rx='4' ry='4' width='120' height='14' />
          <rect x='0' y='0' rx='5' ry='5' width='327' height='216' />
          <rect x='0' y='304' rx='4' ry='4' width='140' height='12' />
        </ContentLoader>
      </>
    );
  }
}

export default PostSummarySkeleton;
