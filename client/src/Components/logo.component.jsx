import React from 'react';
import LogoImg from '../project.png'

const styles = {
    display: 'flex',
    width: '100%',
}

const Logo = () => {
    return (
        <div className="logo" style={styles}>
            <img src={LogoImg} alt="project logo" width={150} style={{margin: 'auto'}} />
        </div>
    )
}

export default Logo;