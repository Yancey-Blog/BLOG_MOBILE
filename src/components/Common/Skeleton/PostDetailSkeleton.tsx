import * as React from 'react';
import ContentLoader from 'react-content-loader';

class PostDetailSkeleton extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        <ContentLoader
        height={475}
        width={375}
        speed={2}
        primaryColor='#f3f3f3'
        secondaryColor='#ecebeb'
      >
        <circle cx='30' cy='30' r='30' />
        <rect x='90' y='8' rx='4' ry='4' width='70' height='14' />
        <rect x='90' y='40' rx='4' ry='4' width='180' height='14' />
        <rect x='0' y='94' rx='5' ry='5' width='375' height='204' />
        <rect x='0' y='332' rx='4' ry='4' width='180' height='32' />
        <rect x='0' y='393' rx='4' ry='4' width='375' height='15' />
        <rect x='0' y='425' rx='4' ry='4' width='375' height='15' />
        <rect x='0' y='457' rx='4' ry='4' width='375' height='15' />
        <rect x='0' y='489' rx='4' ry='4' width='375' height='15' />
      </ContentLoader>
      </>
    );
  }
}

export default PostDetailSkeleton;
