import React, { Component } from 'react'
import styles from './gallery.module.css'

class Gallery extends Component {    
    state = {
        images: this.props.images,
        imgSelection: { 
            indice: 0,
            img: this.props.thumbImage
        },
    }

    nextImage = () => {
        const initialIndice = 0;
        const nextIndice = this.state.imgSelection.indice + 1;
        const maxIndice = this.state.images.length;

        if (nextIndice >= maxIndice) 
            return this.setImageState(initialIndice);

        this.setImageState(nextIndice);
    };

    prevImage = () => {
        const initialIndice = 0;
        const prevIndice = this.state.imgSelection.indice - 1;        

        if (prevIndice < initialIndice) 
            return this.setImageState(initialIndice);        

        this.setImageState(prevIndice);
    };

    goToImage = (indice) => (e) => {
        e.preventDefault();
        this.setImageState( indice );
    }

    setImageState = indice => {
        this.setState({
            imgSelection: { 
                indice: indice,
                img: this.state.images[indice]
            },
        });
    }
    
    render() {
        const { images, imgSelection } = this.state;

        return (
            <div className={ styles.gallery }>
                { images.length > 1 && 
                    (<div className={ styles.thumbs }>
                        {
                            images.map((img, index) => (
                                <button key={index} onClick={this.goToImage(index)} className={ styles.thumbsItem } >
                                    <img  src={ img } alt='' />
                                </button>
                            ))
                        }
                    </div>)
                }

                <figure className={ styles.photo }>
                    <img src={ imgSelection.img } alt='' />
                    { images.length > 1 && <button className={ `${styles.icon} ${styles.prev}` } onClick={this.prevImage}></button> }
                    { images.length > 1 && <button className={ `${styles.icon} ${styles.next}` } onClick={this.nextImage}></button> }
                </figure>
            </div>
        );
    }
}

export default Gallery