import React, { Component } from 'react';
import Header from '../Header/Header';
import './About.css';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
        }
    }

    toggleAbout = () => {
        const current = this.state.active;
        this.setState({ active: !current });
    }

    render() {
        return (
            <div className={this.state.active ? "aboutPage open" : "aboutPage close"}>
                <Header toggle={this.toggleAbout}
                    title={<p className="back">Back</p>} />

                <div> <p className='aboutText'>NoRef is a tool for quickly copying URL's without any extra useless referral
                data. Just set your custom macro of up to 3 key's in the config panel. For certain sites
                where referral data may be required, such as YouTube, you can also set a key to copy the
                entire URL. If you notice any bugs or have any ideas for improvement, please e-mail me
                at <a>noRefApp@gmail.com</a></p>
                </div>
            </div >
        )
    }
}

export default About;