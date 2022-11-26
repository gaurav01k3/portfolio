import React from 'react'
import './style/intro.css'

const Introduction = () => {
    return (
        <div className="intro_wrapper">
            <div className="intro-content">
                <div className='intro-greet'>Hi, my name is</div>
                <div className='intro-head'>Gaurav Kumar</div>
                <div className='intro-head'>I am a Full Stack Web Developer</div>
                <div className="intro-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum voluptatem vitae aliquam ut quibusdam adipisci similique nulla tempore, rem aut omnis veritatis cumque deserunt perferendis fugit quam laborum hic ab praesentium maxime ratione. Non iusto iste quo nihil. Natus.
                </div>
                <div className="intro-action-wrapper">
                    <a href='https://drive.google.com/u/0/uc?id=17pkgtoPMa1KKVW3umuuXgyFeDp3dndlj&export=download'
                        className="intro-action-button">
                        Resume
                    </a>
                    <a href="mailto:gk956842@gmail.com" className="intro-action-button">
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Introduction