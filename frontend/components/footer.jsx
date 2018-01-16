import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    return (
      <div className="footer">
        <span className="created-by">
          Created by Michael J. Cohen
        </span>
        <a href="https://github.com/michaelcohen716" className="fa fa-github git-footer"/>
        <a href="https://www.linkedin.com/in/michaeljcohen716/" className="fa fa-linkedin git-linkedin"/>
      </div>
    );
  }
}

export default Footer;
