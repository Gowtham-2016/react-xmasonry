/**
 * This example demonstrates the approach to update layout once images load.
 * See this in action: https://zitros.github.io/react-xmasonry
 */

import React from "react";
import { XMasonry, XBlock } from "../../src/index.jsx"; // from "react-xmasonry"
import * as utils from "./utils.jsx";

export default class ContentChangesDemo extends React.Component {

    state = {
        data: utils.generateArticles()
    };

    render () {
        return <div className="demo" id="ContentChangesDemo">
            <div className="centerText">
                <button onClick={ () => this.setState({ data: utils.generateArticles() }) }>
                    Regenerate
                </button>
            </div>
            <XMasonry>{ this.state.data.map((article, i) =>
                <XBlock key={ article.id } width={ article.cardWidth }>
                    <div className="card">
                        <img src={ article.cover } alt="image"/>
                        <div className="body">
                            <h3>{ article.title }</h3>
                            <p>
                                { article.text }
                            </p>
                        </div>
                    </div>
                </XBlock>
            )}</XMasonry>
        </div>
    }

}