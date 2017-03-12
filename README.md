# react-xmasonry

Simple, minimalistic and featured native masonry layout for React JS.

<h4>General Features</h4>
<ul>
    <li>React JS <b>native</b> masonry layout implementation with no dependencies.</li>
    <li>Minimalistic design and simple use case.</li>
    <li>Ability to control blocks width (in columns) and column width.</li>
    <li>Responsive, mobile-friendly approach (so there is no "fixed block width" option).</li>
    <li>Fully customizable: use CSS animations and transitions you wish (use <i>.xmasonry</i> and <i>.xblock</i> selectors).</li>
</ul>

Visit [the demo page](https://zitros.github.io/react-xmasonry) for more details.

Installation
------------

```bash
npm install react-xmasonry --save
```

Example of Usage
----------------

Import XMasonry and XBlock components:

```js
import { XMasonry, XBlock } from "react-xmasonry";
```

The simplest layout using JSX and a little styling looks as following:

```jsx
<XMasonry>
    <XBlock>
        <div className="card">
            <h1>Card One</h1>
            <p>Any text</p>
        </div>
    </XBlock>
    <XBlock width="2">
        <div className="card">
            <h1>Card Two</h1>
            <p>Any text</p>
        </div>
    </XBlock>
</XMasonry>
```

There is no more JavaScript than positioning and sizing! Use any CSS to make animations and 
transitions you like (`.xmasonry` and `.xblock` selectors), for example:

```css
@keyframes comeIn {
    0% { transform: scale(0) }
    75% { transform: scale(1.03) }
    100% { transform: scale(1) }
}

.xmasonry .xblock {
    animation: comeIn ease 0.5s;
    animation-iteration-count: 1;
}

.card {
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 1px 3px darkgray;
}
```

See the [example page sources](https://github.com/ZitRos/react-xmasonry/blob/master/docs/index.jsx).

Preview
-------

![Screenshot](https://cloud.githubusercontent.com/assets/4989256/23816799/6926b8c2-05f7-11e7-8766-bc3c7d10047c.png)

Too see the preview in action, open [the demo page](https://zitros.github.io/react-xmasonry).