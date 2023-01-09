import { Link } from "gatsby"
import React, { Component } from "react"



import "./album.css"
import "../../css/reset.css"

let hover = false;
class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        this.timer = null;
        this.shuffle = this.shuffle.bind(this);
        this.stopShuffle = this.stopShuffle.bind(this);
    }

    shuffle(e) {
        var nodes = document.getElementById(e.currentTarget.id).childNodes;
        var imgN = 0;
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 });

            nodes[imgN].style.zIndex = this.state.count;
            imgN++;
            if (imgN >= nodes.length) {
                imgN = 0;
            }
            console.log("shuffle: " + this.state.count)

        }, 200);
    }

    stopShuffle() {
        clearInterval(this.interval);

        this.setState({ count: 1 });
        console.log("stop: " + this.state.count)

    }

    generateImgs() {
        const imgs = []

        for (let i = 0; i < this.props.set.length; i++) {
            imgs.push(<img className={this.props.set[i][1]}
                src={this.props.set[i][0]}
                alt={this.props.alt}
                style={{ zIndex: { i } }}
                key={i}
            />)
        }
        return (imgs)
    }


    render() {
        return (
            <div className="album" id={this.props.identity} onMouseOver={this.shuffle} onMouseOut={this.stopShuffle}>
                {this.generateImgs()}
            </div >
        )
    }
}


export default Album