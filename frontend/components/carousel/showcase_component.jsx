import React from 'react';


class ShowcaseComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="showcase-parent">
        </div>

        <section className="showcase-text">
          <div className="showcase-hook">
            <div className="showcase-hook-shadow">
              An Airwave Original
            </div>
            <div className="showcase-hook-origin">
              An Airwave Original
            </div>
          </div>

          <div className="showcase-title">
            <div className="showcase-title-shadow">
              The Monster on 38th Street
            </div>
            <div className="showcase-title-origin">
              The Monster on 38th Street
            </div>
          </div>

          <div className="showcase-episode-title">

          </div>

          <div className="showcase-episode-description">

          </div>

        </section>
    </div>
    );
  }
}



export default ShowcaseComponent;
