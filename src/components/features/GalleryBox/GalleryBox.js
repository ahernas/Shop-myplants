import React from 'react';

import styles from './GalleryBox.module.scss';

class GalleryBox extends React.Component {

  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className={'col-6 p-0 ' + styles.box1}/>
          <div className={'col-3 p-0 d-flex ' + styles.box2}>
            <div className={'d-flex justify-content-center align-items-center ' + styles.text1}>
              <span>Beautiful</span>
            </div>
            <div className={styles.image2}/>
          </div>
          <div className={'col-3 p-0 d-flex ' + styles.box3}>
            <div className={styles.image3}/>
            <div className={styles.image4}/>
            <div className={'d-flex justify-content-center align-items-center ' + styles.text2}>
              <span>Green</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryBox;
