* {

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box

}

a {

    color: inherit;

    text-decoration: none

}

body,

html {

    padding: 0;

    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif

}

.utterances {

    max-width: 100% !important

}

.login-page {

    background-color: #f7f7f7;

    width: 100vw;

    height: 100vh

}

.login-container,

.login-page {

    display: -moz-box;

    display: flex;

    -moz-box-pack: center;

    justify-content: center;

    -moz-box-align: center;

    align-items: center

}

.login-container {

    width: 400px;

    height: 250px;

    background-color: #fff;

    border-radius: 8px;

    -webkit-box-shadow: 0 10px 20px -10px #595959;

    box-shadow: 0 10px 20px -10px #595959

}

.login-content {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.login-title {

    font-size: 18px;

    color: #424241

}

.login-error {

    margin-top: 2px;

    font-size: 14px;

    color: #e03e3e

}

.login-button {

    padding: 6px;

    border-radius: 8px;

    width: 250px;

    font-size: 16px;

    margin-top: 12px;

    color: #424241;

    background-color: #c9c9c4;

    border: 0;

    -webkit-box-shadow: 0 2px 0 0 #838282;

    box-shadow: 0 2px 0 0 #838282;

    cursor: pointer

}

.login-button:hover {

    background-color: #7e7e7a;

    color: #c9c9c4;

    -webkit-transition: color .5s ease;

    -moz-transition: color .5s ease;

    transition: color .5s ease;

    -webkit-transition: background-color .5s ease;

    -moz-transition: background-color .5s ease;

    transition: background-color .5s ease

}

.password-input {

    border: 0;

    border-bottom: 1px solid #d1d0d0;

    -webkit-transition: border .5s ease;

    -moz-transition: border .5s ease;

    transition: border .5s ease;

    font-family: inherit;

    font-size: 16px;

    color: #424241;

    width: 250px;

    padding-bottom: 8px;

    margin-top: 22px;

    outline: none

}

.password-input::-webkit-input-placeholder {

    font-weight: 200;

    opacity: .5

}

.password-input:-ms-input-placeholder {

    font-weight: 200;

    opacity: .5

}

.password-input::placeholder {

    font-weight: 200;

    opacity: .5

}

.password-input:focus {

    border-bottom: 1px solid #424241

}

code[class*=language-],

pre[class*=language-] {

    color: #525151 !important

}

:not(pre)>code[class*=language-],

pre[class*=language-] {

    background: #f7f6f3 !important

}

.notion-h1,

.notion-h2,

.notion-h3 {

    width: 100%

}

.not-notion-full-width {

    margin: 0 12px;

    width: 720px

}

.notion-page-icon-wrapper {

    -moz-box-pack: start !important;

    justify-content: flex-start !important;

    margin-bottom: 20px

}

.notion-full-width .notion-page-icon-wrapper {

    padding-left: calc(min(96px, 8vw))

}

.notion-collection {

    align-self: auto;

    width: 100% !important

}

.notion-table {

    width: 100% !important;

    max-width: 100% !important

}

.notion-list-view {

    min-width: var(--notion-max-width)

}

.notion-board {

    max-width: 100% !important

}

.notion-board-view {

    padding-left: 0 !important

}

.notion-collection-header,

.notion-table-view {

    padding-left: 0 !important;

    padding-right: 0 !important

}

@media only screen and (max-width:750px) {

    .notion-collection {

        overflow: auto hidden;

        width: 100%

    }

    video {

        max-height: 550px;

        max-width: 150%

    }

    .notion-full-width .notion-page-icon-wrapper {

        padding-left: 2vw

    }

}

video {

    max-height: 600px;

    max-width: 100%

}

video:-webkit-full-screen {

    max-height: 100%;

    max-width: 100%

}

.notion-collection-card-property:not(:first-child) {

    white-space: pre-wrap

}

.notion-callout-text {

    overflow: hidden

}

.notion-search-button {

    background-color: var(--bg-color) !important;

    background: var(--bg-color) !important

}

.notion.fixed-header {

    position: relative;

    z-index: 500;

    top: 0;

    left: 0;

    z-index: 200;

    width: 100%;

    max-width: 100vw

}

.notion.fixed-header.shadow {

    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .2);

    box-shadow: 0 0 10px rgba(0, 0, 0, .2)

}

.notion.fixed-header.fixed {

    position: fixed;

    top: 0;

    left: 0;

    z-index: 500;

    width: 100%;

    max-width: 100vw

}

.notion.fixed-header .notion-frame {

    padding-top: 0

}

.potion-logo {

    -moz-box-flex: 1;

    flex-grow: 1;

    position: relative;

    flex-shrink: 0;

    padding: 0 15px;

    height: 100%;

    cursor: pointer;

    font-weight: 700

}

.nav-header,

.potion-logo {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center

}

.potion-header {

    position: sticky;

    display: -moz-box;

    display: flex;

    top: 0;

    left: 0;

    width: 100%;

    max-width: 100vw;

    overflow: hidden;

    height: 50px;

    min-height: 50px;

    background: var(--bg-color)

}

.fixed-header {

    position: fixed;

    width: 100%;

    z-index: 500

}

.potion-header img.icon {

    width: 18px !important;

    height: 18px !important

}

.potion-header .icon {

    font-size: 18px;

    margin-right: 6px;

    line-height: 1.1

}

.potion-header .potion-nav {

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    height: 100%;

    display: -moz-box;

    display: flex;

    -moz-box-orient: horizontal;

    -moz-box-direction: normal;

    flex-direction: row;

    -moz-box-pack: justify;

    justify-content: space-between;

    -moz-box-align: center;

    align-items: center;

    padding: 0 12px;

    -webkit-text-size-adjust: 100%;

    -moz-text-size-adjust: 100%;

    text-size-adjust: 100%;

    line-height: 1.5;

    line-height: 1.2;

    font-size: 14px

}

.potion-page-icon {

    font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;

    font-size: 1.1em;

    margin: 2px 4px 0 2px;

    fill: var(--fg-color-6);

    color: var(--fg-color-icon)

}

img.potion-page-icon,

svg.potion-page-icon {

    display: block;

    -webkit-object-fit: fill;

    object-fit: fill;

    border-radius: 3px;

    max-width: 42px;

    max-height: 42px

}

.potion-menu-links {

    width: auto;

    height: 100%;

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    -moz-box-pack: justify;

    justify-content: space-between;

    white-space: nowrap

}

.potion-headers-link {

    display: -moz-box;

    display: flex;

    color: var(--fg-color);

    font-weight: 500;

    text-decoration: none;

    width: 100%;

    background-color: transparent;

    -webkit-transition: background .12s ease-in 0s;

    -moz-transition: background .12s ease-in 0s;

    transition: background .12s ease-in 0s;

    margin: 0 10px;

    border-radius: 4px;

    border: 1px solid transparent;

    padding: 4px 10px;

    -moz-box-pack: center;

    justify-content: center

}

.potion-headers-link:hover {

    background: var(--bg-color-0)

}

.potion-headers-link:focus {

    border: 1px solid var(--fg-color-6)

}

.potion-cta {

    display: grid;

    grid-auto-flow: column;

    grid-gap: 16px;

    gap: 16px;

    padding: 0 16px;

    height: 100%;

    color: #000;

    -moz-box-align: center;

    align-items: center

}

.potion-cta a {

    display: block;

    border-radius: 2px;

    margin: 2px;

    padding: 8px 12px;

    max-height: 40px;

    line-height: 1

}

.potion-cta a:hover {

    opacity: .8

}

.potion-page-title {

    display: -moz-inline-box;

    display: inline-flex;

    -moz-box-align: center;

    align-items: center;

    line-height: 1.7;

    padding-left: 30px;

    padding-right: 30px;

    font-size: 1.15rem

}

.potion-button,

.potion-page-title {

    -webkit-transition: background .12s ease-in 0s;

    -moz-transition: background .12s ease-in 0s;

    transition: background .12s ease-in 0s

}

.potion-button {

    background-color: #822bdd;

    color: #fff;

    border-radius: 8px;

    margin-left: 20px

}

.potion-button:hover {

    background-color: #a175d1

}

.potion-menu-icon {

    display: none;

    cursor: pointer

}

.potion-mobile-menu {

    position: fixed;

    top: 0;

    bottom: 0;

    left: 0;

    right: 0;

    height: 100%;

    width: 100%;

    -moz-box-align: center;

    align-items: center;

    display: -moz-box;

    display: flex;

    -moz-box-pack: center;

    justify-content: center;

    z-index: 600;

    background-color: var(--bg-color);

    opacity: .9

}

.potion-menu-x {

    position: absolute;

    width: 40px;

    margin-right: 10px;

    right: 0;

    top: 4px;

    cursor: pointer

}

@media only screen and (max-width:900px) {

    .potion-cta-mobile,

    .potion-menu-links {

        display: none

    }

    .notion-page-scroller {

        margin-top: 0 !important

    }

    .potion-menu-icon {

        width: 40px;

        margin-right: -60px;

        display: block

    }

    .potion-page-title {

        font-size: 2em

    }

    .potion-button {

        line-height: 2;

        margin-left: 0

    }

    .potion-headers-link {

        padding: 20px

    }

}

:root {

    --fg-color: #37352f;

    --fg-color-0: rgba(55, 53, 47, 0.09);

    --fg-color-1: rgba(55, 53, 47, 0.16);

    --fg-color-2: rgba(55, 53, 47, 0.4);

    --fg-color-3: rgba(55, 53, 47, 0.6);

    --fg-color-4: #000;

    --fg-color-5: rgba(55, 53, 47, 0.024);

    --fg-color-6: rgba(55, 53, 47, 0.8);

    --fg-color-icon: var(--fg-color);

    --bg-color: #fff;

    --bg-color-0: hsla(44, 6%, 50%, 0.15);

    --bg-color-1: #f7f6f3;

    --bg-color-2: hsla(44, 6%, 50%, 0.15);

    --select-color-0: #2eaadc;

    --select-color-1: rgba(45, 170, 219, 0.3);

    --select-color-2: #d9eff8;

    --notion-red: #e03e3e;

    --notion-pink: #ad1a72;

    --notion-blue: #0b6e99;

    --notion-purple: #6940a5;

    --notion-teal: #0f7b6c;

    --notion-yellow: #dfab01;

    --notion-orange: #d9730d;

    --notion-brown: #64473a;

    --notion-gray: #9b9a97;

    --notion-red_background: #fbe4e4;

    --notion-pink_background: #f4dfeb;

    --notion-blue_background: #ddebf1;

    --notion-purple_background: #eae4f2;

    --notion-teal_background: #ddedea;

    --notion-yellow_background: #fbf3db;

    --notion-orange_background: #faebdd;

    --notion-brown_background: #e9e5e3;

    --notion-gray_background: #ebeced;

    --notion-red_background_co: hsla(0, 74%, 94%, 0.3);

    --notion-pink_background_co: rgba(244, 223, 235, 0.3);

    --notion-blue_background_co: rgba(221, 235, 241, 0.3);

    --notion-purple_background_co: rgba(234, 228, 242, 0.3);

    --notion-teal_background_co: rgba(221, 237, 234, 0.3);

    --notion-yellow_background_co: hsla(45, 80%, 92%, 0.3);

    --notion-orange_background_co: hsla(29, 74%, 92%, 0.3);

    --notion-brown_background_co: hsla(20, 12%, 90%, 0.3);

    --notion-gray_background_co: hsla(210, 5%, 93%, 0.3);

    --notion-item-blue: rgba(0, 120, 223, 0.2);

    --notion-item-orange: rgba(245, 93, 0, 0.2);

    --notion-item-green: rgba(0, 135, 107, 0.2);

    --notion-item-pink: rgba(221, 0, 129, 0.2);

    --notion-item-brown: rgba(140, 46, 0, 0.2);

    --notion-item-red: rgba(255, 0, 26, 0.2);

    --notion-item-yellow: rgba(233, 168, 0, 0.2);

    --notion-item-default: hsla(45, 4%, 80%, 0.5);

    --notion-item-purple: rgba(103, 36, 222, 0.2);

    --notion-item-gray: hsla(45, 2%, 60%, 0.4);

    --notion-max-width: 720px;

    --notion-header-height: 45px

}

.dark-mode {

    --fg-color: hsla(0, 0%, 100%, 0.9);

    --fg-color-0: var(--fg-color);

    --fg-color-1: var(--fg-color);

    --fg-color-2: var(--fg-color);

    --fg-color-3: var(--fg-color);

    --fg-color-4: var(--fg-color);

    --fg-color-5: hsla(0, 0%, 100%, 0.7);

    --fg-color-6: #fff;

    --fg-color-icon: #fff;

    --bg-color: #2f3437;

    --bg-color-0: #474c50;

    --bg-color-1: #3f4447;

    --bg-color-2: hsla(44, 6%, 50%, 0.15);

    --notion-red: #ff7369;

    --notion-pink: #e255a1;

    --notion-blue: #529cca;

    --notion-purple: #9a6dd7;

    --notion-teal: #4dab9a;

    --notion-yellow: #ffdc49;

    --notion-orange: #ffa344;

    --notion-brown: #937264;

    --notion-gray: hsla(195, 2%, 60%, 0.95);

    --notion-red_background: #594141;

    --notion-pink_background: #533b4c;

    --notion-blue_background: #364954;

    --notion-purple_background: #443f57;

    --notion-teal_background: #354c4b;

    --notion-yellow_background: #59563b;

    --notion-orange_background: #594a3a;

    --notion-brown_background: #434040;

    --notion-gray_background: #454b4e;

    --notion-red_background_co: rgba(89, 65, 65, 0.3);

    --notion-pink_background_co: rgba(83, 59, 76, 0.3);

    --notion-blue_background_co: rgba(120, 162, 187, 0.3);

    --notion-purple_background_co: rgba(68, 63, 87, 0.3);

    --notion-teal_background_co: rgba(53, 76, 75, 0.3);

    --notion-yellow_background_co: rgba(89, 86, 59, 0.3);

    --notion-orange_background_co: rgba(89, 74, 58, 0.3);

    --notion-brown_background_co: rgba(67, 64, 64, 0.3);

    --notion-gray_background_co: rgba(69, 75, 78, 0.3)

}

.notion {

    font-size: 16px;

    line-height: 1.5;

    color: var(--fg-color);

    caret-color: var(--fg-color);

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol

}

.notion>* {

    padding: 3px 0

}

.notion * {

    -webkit-margin-before: 0;

    margin-block-start: 0;

    -webkit-margin-after: 0;

    margin-block-end: 0

}

.notion ::-moz-selection {

    background: var(--select-color-1)

}

.notion ::selection {

    background: var(--select-color-1)

}

.notion *,

.notion :focus {

    outline: 0

}

.notion-page-content {

    width: 100%;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

@media (min-width:1300px) and (min-height:300px) {

    .notion-page-content-has-aside {

        display: -moz-box;

        display: flex;

        -moz-box-orient: horizontal;

        -moz-box-direction: normal;

        flex-direction: row;

        width: -moz-calc((100vw + var(--notion-max-width))/2);

        width: calc((100vw + var(--notion-max-width)) / 2)

    }

    .notion-page-content-has-aside .notion-aside {

        display: -moz-box;

        display: flex

    }

    .notion-page-content-has-aside .notion-page-content-inner {

        width: var(--notion-max-width);

        max-width: var(--notion-max-width)

    }

}

.notion-page-content-inner {

    position: relative;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    -moz-box-align: start;

    align-items: flex-start

}

.notion-aside {

    position: sticky;

    top: 148px;

    align-self: flex-start;

    -moz-box-flex: 1;

    flex: 1 1;

    display: none

}

.notion-aside,

.notion-aside-table-of-contents {

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    -moz-box-align: center;

    align-items: center

}

.notion-aside-table-of-contents {

    display: -moz-box;

    display: flex;

    max-height: -moz-calc(100vh - 148px - 16px);

    max-height: calc(100vh - 148px - 16px);

    overflow: hidden auto;

    min-width: 222px;

    overflow: auto

}

.notion-aside-table-of-contents-header {

    text-transform: uppercase;

    font-weight: 400;

    font-size: 1.1em;

    word-break: break-word

}

.notion-aside-table-of-contents .notion-table-of-contents-item {

    line-height: 1

}

.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-0:first-of-type {

    margin-top: 0

}

.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-0 {

    margin-top: .25em

}

.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-1 {

    font-size: 13px

}

.notion-aside-table-of-contents .notion-table-of-contents-item-indent-level-2 {

    font-size: 12px

}

.notion-aside-table-of-contents .notion-table-of-contents-item-body {

    border: 0

}

.notion-table-of-contents-active-item {

    color: var(--select-color-0) !important

}

.notion-app {

    position: relative;

    background: var(--bg-color);

    min-height: 100vh

}

.notion-viewport {

    position: fixed;

    top: 0;

    left: 0;

    right: 0;

    bottom: 0

}

.medium-zoom-overlay {

    z-index: 300

}

.medium-zoom-image {

    border-radius: 0

}

.medium-zoom-image--opened {

    z-index: 301

}

.notion-frame {

    width: 100%;

    height: 100%

}

.notion-frame,

.notion-page-scroller {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.notion-page-scroller {

    position: relative;

    -moz-box-flex: 1;

    flex-grow: 1;

    -moz-box-align: center;

    align-items: center;

    min-height: -moz-calc(100vh - var(--notion-header-height));

    min-height: calc(100vh - var(--notion-header-height))

}

.notion-red,

.notion-red_co {

    color: var(--notion-red)

}

.notion-pink,

.notion-pink_co {

    color: var(--notion-pink)

}

.notion-blue,

.notion-blue_co {

    color: var(--notion-blue)

}

.notion-purple,

.notion-purple_co {

    color: var(--notion-purple)

}

.notion-teal,

.notion-teal_co {

    color: var(--notion-teal)

}

.notion-yellow,

.notion-yellow_co {

    color: var(--notion-yellow)

}

.notion-orange,

.notion-orange_co {

    color: var(--notion-orange)

}

.notion-brown,

.notion-brown_co {

    color: var(--notion-brown)

}

.notion-gray,

.notion-gray_co {

    color: var(--notion-gray)

}

.notion-red_background {

    background-color: var(--notion-red_background)

}

.notion-pink_background {

    background-color: var(--notion-pink_background)

}

.notion-blue_background {

    background-color: var(--notion-blue_background)

}

.notion-purple_background {

    background-color: var(--notion-purple_background)

}

.notion-teal_background {

    background-color: var(--notion-teal_background)

}

.notion-yellow_background {

    background-color: var(--notion-yellow_background)

}

.notion-orange_background {

    background-color: var(--notion-orange_background)

}

.notion-brown_background {

    background-color: var(--notion-brown_background)

}

.notion-gray_background {

    background-color: var(--notion-gray_background)

}

.notion-red_background_co {

    background-color: var(--notion-red_background_co)

}

.notion-pink_background_co {

    background-color: var(--notion-pink_background_co)

}

.notion-blue_background_co {

    background-color: var(--notion-blue_background_co)

}

.notion-purple_background_co {

    background-color: var(--notion-purple_background_co)

}

.notion-teal_background_co {

    background-color: var(--notion-teal_background_co)

}

.notion-yellow_background_co {

    background-color: var(--notion-yellow_background_co)

}

.notion-orange_background_co {

    background-color: var(--notion-orange_background_co)

}

.notion-brown_background_co {

    background-color: var(--notion-brown_background_co)

}

.notion-gray_background_co {

    background-color: var(--notion-gray_background_co)

}

.notion-item-blue {

    background-color: var(--notion-item-blue)

}

.notion-item-orange {

    background-color: var(--notion-item-orange)

}

.notion-item-green {

    background-color: var(--notion-item-green)

}

.notion-item-pink {

    background-color: var(--notion-item-pink)

}

.notion-item-brown {

    background-color: var(--notion-item-brown)

}

.notion-item-red {

    background-color: var(--notion-item-red)

}

.notion-item-yellow {

    background-color: var(--notion-item-yellow)

}

.notion-item-default {

    background-color: var(--notion-item-default)

}

.notion-item-purple {

    background-color: var(--notion-item-purple)

}

.notion-item-gray {

    background-color: var(--notion-item-gray)

}

.notion b {

    font-weight: 600

}

.notion-title {

    width: 100%;

    font-size: 2.5em;

    font-weight: 700;

    margin-bottom: 20px;

    line-height: 1.2

}

.notion-h {

    position: relative;

    display: inline-block;

    font-weight: 600;

    line-height: 1.3;

    padding: 3px 2px;

    margin-bottom: 1px;

    max-width: 100%;

    white-space: pre-wrap;

    word-break: break-word

}

.notion-h1 {

    font-size: 1.875em;

    margin-top: 1.08em

}

.notion-header-anchor {

    position: absolute;

    top: -54px;

    left: 0

}

.notion-h1:first-child,

.notion-title+.notion-h1,

.notion-title+.notion-h2,

.notion-title+.notion-h3 {

    margin-top: 0

}

.notion-h2 {

    font-size: 1.5em;

    margin-top: 1.1em

}

.notion-h3 {

    font-size: 1.25em;

    margin-top: 1em

}

.notion-h:hover .notion-hash-link {

    opacity: 1

}

.notion-hash-link {

    opacity: 0;

    text-decoration: none;

    float: left;

    margin-left: -20px;

    padding-right: 4px;

    fill: var(--fg-color-icon)

}

.notion-page-cover {

    display: block;

    -webkit-object-fit: cover;

    object-fit: cover;

    width: 100%;

    height: 30vh;

    min-height: 30vh;

    max-height: 30vh;

    padding: 0

}

.notion-page {

    position: relative;

    padding: 0;

    margin: 0 auto;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    -moz-box-flex: 1;

    flex-grow: 1;

    flex-shrink: 0;

    -moz-box-align: start;

    align-items: flex-start;

    width: 100%;

    max-width: 100%

}

.notion-full-page {

    padding-bottom: calc(max(10vh, 120px))

}

.notion-page-no-cover {

    margin-top: 48px !important;

    padding-top: 96px

}

.notion-page-no-cover.notion-page-no-icon {

    padding-top: 0

}

.notion-page-no-cover.notion-page-has-image-icon {

    padding-top: 148px

}

.notion-page-has-cover.notion-page-no-icon {

    padding-top: 48px

}

.notion-page-has-cover {

    padding-top: 112px

}

.notion-page-has-cover.notion-page-has-text-icon {

    padding-top: 64px

}

.notion-page-icon-wrapper {

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    display: -moz-box;

    display: flex;

    -moz-box-orient: horizontal;

    -moz-box-direction: normal;

    flex-direction: row;

    -moz-box-pack: center;

    justify-content: center

}

.notion-page-icon-wrapper .notion-page-icon {

    position: relative;

    display: block

}

.notion-page-has-cover .notion-page-icon-wrapper img.notion-page-icon {

    top: -62px

}

.notion-page-has-cover .notion-page-icon-wrapper span.notion-page-icon {

    top: -42px

}

.notion-page-icon-wrapper span.notion-page-icon {

    height: 78px;

    width: 78px;

    max-width: 78px;

    max-height: 78px;

    font-size: 78px;

    line-height: 1.1;

    margin-left: 0;

    color: var(--fg-color-icon)

}

.notion-page-icon-wrapper img.notion-page-icon {

    display: block;

    border-radius: 3px;

    width: 124px;

    height: 124px;

    max-width: 124px;

    max-height: 124px

}

.notion-page {

    width: var(--notion-max-width);

    padding-left: calc(min(12px, 8vw));

    padding-right: calc(min(12px, 8vw))

}

.notion-full-width {

    --notion-max-width: -moz-calc(min(1920px, 98vw));

    --notion-max-width: calc(min(1920px, 98vw));

    padding-left: calc(min(96px, 8vw));

    padding-right: calc(min(96px, 8vw))

}

.notion-small-text {

    font-size: 14px

}

.notion-quote {

    display: block;

    width: 100%;

    white-space: pre-wrap;

    word-break: break-word;

    border-left: 3px solid;

    padding: .2em .9em;

    margin: 6px 0;

    font-size: 1.2em

}

.notion-hr {

    width: 100%;

    margin: 6px 0;

    padding: 0;

    border-color: var(--fg-color-0);

    border-top: none;

    border-top-color: var(--fg-color-0)

}

.notion-link {

    color: inherit;

    word-break: break-word;

    text-decoration: inherit;

    border-left-color: var(--fg-color-2);

    border-bottom: .05em solid;

    border-bottom-color: var(--fg-color-2);

    border-right-color: var(--fg-color-2);

    border-top-color: var(--fg-color-2);

    opacity: .7;

    -webkit-transition: border-color .1s ease-in, opacity .1s ease-in;

    -moz-transition: border-color .1s ease-in, opacity .1s ease-in;

    transition: border-color .1s ease-in, opacity .1s ease-in

}

.notion-link:hover {

    border-color: var(--fg-color-6);

    opacity: 1

}

.notion-collection .notion-link {

    opacity: 1

}

.notion-blank {

    width: 100%;

    min-height: 1rem;

    padding: 3px 2px;

    margin-top: 1px;

    margin-bottom: 1px

}

.notion-page-link {

    display: -moz-box;

    display: flex;

    color: var(--fg-color);

    text-decoration: none;

    width: 100%;

    height: 30px;

    margin: 1px 0;

    -webkit-transition: background .12s ease-in 0s;

    -moz-transition: background .12s ease-in 0s;

    transition: background .12s ease-in 0s

}

.notion-page-link:hover {

    background: var(--bg-color-0)

}

.notion-collection-card .notion-page-link {

    height: unset;

    margin: 0;

    -webkit-transition: unset;

    -moz-transition: unset;

    transition: unset;

    background: unset

}

.notion-page-icon {

    font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;

    font-size: 1.1em;

    margin: 2px 4px 0 2px;

    fill: var(--fg-color-6);

    color: var(--fg-color-icon)

}

img.notion-page-icon,

svg.notion-page-icon {

    display: block;

    -webkit-object-fit: fill;

    object-fit: fill;

    border-radius: 3px;

    max-width: 22px;

    max-height: 22px

}

.notion-icon {

    display: block;

    width: 18px;

    height: 18px;

    color: var(--fg-color-icon)

}

.notion-page-text {

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    font-weight: 500;

    line-height: 1.3;

    border-bottom: 1px solid var(--fg-color-1);

    margin: 4px 0

}

.notion-inline-code {

    color: #eb5757;

    padding: .2em .4em;

    background: var(--bg-color-2);

    border-radius: 3px;

    font-size: 85%;

    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace

}

.notion-inline-underscore {

    text-decoration: underline

}

.notion-list {

    margin: 0;

    -webkit-margin-before: .6em;

    margin-block-start: .6em;

    -webkit-margin-after: .6em;

    margin-block-end: .6em

}

.notion-list-disc {

    list-style-type: disc;

    -webkit-padding-start: 1.7em;

    -moz-padding-start: 1.7em;

    padding-inline-start: 1.7em;

    margin-top: 0;

    margin-bottom: 0

}

.notion-list-numbered {

    list-style-type: decimal;

    -webkit-padding-start: 1.6em;

    -moz-padding-start: 1.6em;

    padding-inline-start: 1.6em;

    margin-top: 0;

    margin-bottom: 0

}

.notion-list-disc li {

    padding-left: .1em

}

.notion-list-numbered li {

    padding-left: .2em

}

.notion-list li {

    padding: 6px 0;

    white-space: pre-wrap

}

.notion-asset-wrapper {

    margin: .5rem 0;

    max-width: 100vw;

    min-width: 100%;

    align-self: center;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.notion-asset-wrapper-image {

    max-width: 100%

}

.notion-asset-wrapper-full {

    max-width: 100vw

}

.notion-asset-wrapper img {

    width: 100%;

    height: 100%;

    max-height: 100%

}

.notion-asset-wrapper iframe {

    border: none;

    background: #f7f6f5

}

.notion-text {

    width: 100%;

    white-space: pre-wrap;

    word-break: break-word;

    padding: 3px 2px;

    margin: 1px 0

}

.notion-text:first-child {

    margin-top: 2px

}

.notion-text-children {

    padding-left: 1.5em;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.notion-block {

    padding: 3px 2px

}

.notion .notion-code {

    font-size: 85%

}

.notion-code {

    width: 100%;

    padding: 30px 16px 30px 20px;

    margin: 4px 0;

    border-radius: 3px;

    -webkit-tab-size: 2;

    -moz-tab-size: 2;

    tab-size: 2;

    display: block;

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box;

    overflow: auto;

    background: var(--bg-color-1);

    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace

}

.notion-column {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    padding-top: 12px;

    padding-bottom: 12px

}

.notion-column>:first-child {

    margin-top: 0;

    margin-left: 0;

    margin-right: 0

}

.notion-column>:last-child {

    margin-left: 0;

    margin-right: 0;

    margin-bottom: 0

}

.notion-row {

    display: -moz-box;

    display: flex;

    overflow: hidden;

    width: 100%;

    max-width: 100%

}

@media (max-width:640px) {

    .notion-row {

        -moz-box-orient: vertical;

        -moz-box-direction: normal;

        flex-direction: column

    }

    .notion-row .notion-column {

        width: 100% !important

    }

    .notion-row .notion-spacer {

        display: none

    }

}

.notion-bookmark {

    margin: 4px 0;

    width: 100%;

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box;

    text-decoration: none;

    border: 1px solid var(--fg-color-1);

    border-radius: 3px;

    display: -moz-box;

    display: flex;

    overflow: hidden;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none

}

.dark-mode .notion-bookmark {

    border-color: var(--bg-color-0)

}

.notion-bookmark>div:first-child {

    -moz-box-flex: 4;

    flex: 4 1 180px;

    padding: 12px 14px 14px;

    overflow: hidden;

    text-align: left;

    color: var(--fg-color)

}

.notion-bookmark-title {

    font-size: 14px;

    line-height: 20px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    min-height: 24px;

    margin-bottom: 2px

}

.notion-bookmark-description {

    font-size: 12px;

    line-height: 16px;

    opacity: .8;

    height: 32px;

    overflow: hidden

}

.notion-bookmark-link {

    display: -moz-box;

    display: flex;

    margin-top: 6px

}

.notion-bookmark-link>img {

    width: 16px;

    height: 16px;

    min-width: 16px;

    margin-right: 6px

}

.notion-bookmark-link>div {

    font-size: 12px;

    line-height: 16px;

    color: var(--fg-color);

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis

}

.notion-bookmark-image {

    -moz-box-flex: 1;

    flex: 1 1 180px;

    position: relative

}

.notion-bookmark-image img {

    -webkit-object-fit: cover;

    object-fit: cover;

    width: 100%;

    height: 100%;

    position: absolute

}

.notion-column .notion-bookmark-image {

    display: none

}

.notion-spacer {

    width: -moz-calc(min(32px, 4vw));

    width: calc(min(32px, 4vw))

}

.notion-spacer:last-child {

    display: none

}

.notion-asset-object-fit {

    position: absolute;

    left: 0;

    top: 0;

    right: 0;

    bottom: 0;

    width: 100%;

    height: 100%;

    border-radius: 1px

}

.notion-image {

    display: block;

    width: 100%;

    border-radius: 1px

}

.notion-asset-caption {

    padding: 6px 0 6px 2px;

    white-space: pre-wrap;

    word-break: break-word;

    caret-color: var(--fg-color);

    font-size: 14px;

    line-height: 1.4;

    color: var(--fg-color-3)

}

.notion-callout {

    padding: 16px 16px 16px 12px;

    display: -moz-inline-box;

    display: inline-flex;

    width: 100%;

    border-radius: 3px;

    border-width: 1px;

    -moz-box-align: center;

    align-items: center;

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box;

    margin: 4px 0;

    border: var(border)

}

.notion-toggle {

    padding: 3px 2px

}

.notion-toggle>summary {

    cursor: pointer;

    outline: none

}

.notion-toggle>div {

    margin-left: 1.1em

}

.notion-collection {

    align-self: center;

    min-width: 100%

}

.notion-collection-header {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    height: 42px;

    padding: 4px 2px;

    white-space: nowrap;

    overflow: hidden

}

.notion-collection-header-title {

    display: -moz-inline-box;

    display: inline-flex;

    -moz-box-align: center;

    align-items: center;

    font-size: 1.25em;

    line-height: 1.2;

    font-weight: 600;

    white-space: pre-wrap;

    word-break: break-word;

    margin-right: .5em

}

.notion-collection-view-dropdown {

    cursor: pointer;

    padding: 4px 8px;

    border-radius: 3px;

    -webkit-transition: background .12s ease-in 0s;

    -moz-transition: background .12s ease-in 0s;

    transition: background .12s ease-in 0s

}

.notion-collection-view-dropdown:hover {

    background: var(--bg-color-0)

}

.notion-collection-view-dropdown-icon {

    position: relative;

    top: 2px;

    margin-left: 4px

}

.notion-collection-view-type-menu-item {

    cursor: pointer

}

.notion-collection-view-type-menu-item .notion-collection-view-type {

    width: 340px;

    max-width: 100%;

    min-width: 100px

}

.notion-collection-view-type {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    font-size: 14px

}

.notion-collection-view-type-icon {

    display: inline-block;

    width: 14px;

    height: 14px;

    fill: #37352f;

    margin-right: 6px

}

.notion-collection-view-type-title {

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    color: var(--fg-color)

}

.notion-table {

    width: 100vw;

    max-width: 100vw;

    align-self: center;

    overflow: auto hidden

}

.notion-table-view {

    position: relative;

    float: left;

    min-width: var(--notion-max-width);

    padding-left: 0;

    -webkit-transition: padding .2s ease-out;

    -moz-transition: padding .2s ease-out;

    transition: padding .2s ease-out

}

.notion-table-header {

    display: -moz-box;

    display: flex;

    position: absolute;

    z-index: 82;

    height: 33px;

    color: var(--fg-color-3);

    min-width: var(--notion-max-width)

}

.notion-table-header-inner {

    width: 100%;

    display: -moz-inline-box;

    display: inline-flex;

    border-top: 1px solid var(--fg-color-1);

    border-bottom: 1px solid var(--fg-color-1)

}

.notion-table-header-placeholder {

    height: 34px

}

.notion-table-th {

    display: -moz-box;

    display: flex;

    position: relative

}

.notion-table-view-header-cell {

    display: -moz-box;

    display: flex;

    flex-shrink: 0;

    overflow: hidden;

    height: 32px;

    font-size: 14px;

    padding: 0

}

.notion-table-view-header-cell-inner {

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    display: -moz-box;

    display: flex;

    width: 100%;

    height: 100%;

    padding-left: 8px;

    padding-right: 8px;

    border-right: 1px solid var(--fg-color-0)

}

.notion-table-th:last-child .notion-table-view-header-cell-inner {

    border-right: 0

}

.notion-collection-column-title {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    line-height: 120%;

    min-width: 0;

    font-size: 14px

}

.notion-collection-column-title-icon {

    display: inline-block;

    width: 14px;

    height: 14px;

    min-width: 14px;

    min-height: 14px;

    fill: var(--fg-color-2);

    margin-right: 6px

}

.notion-collection-column-title-body {

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis

}

.notion-table-body {

    position: relative;

    min-width: var(--notion-max-width)

}

.notion-table-row {

    display: -moz-box;

    display: flex;

    border-bottom: 1px solid var(--fg-color-1)

}

.notion-table-cell {

    min-height: 32px;

    padding: 5px 8px 6px;

    font-size: 14px;

    line-height: 1;

    white-space: normal;

    overflow: hidden;

    word-break: break-word;

    border-right: 1px solid var(--fg-color-1)

}

.notion-table-cell:last-child {

    border-right: 0

}

.notion-table-cell-title {

    font-weight: 500

}

.notion-table-cell-text {

    white-space: pre-wrap

}

.notion-table-cell-email,

.notion-table-cell-number,

.notion-table-cell-phone_number,

.notion-table-cell-text,

.notion-table-cell-url {

    line-height: 1.5

}

.notion-table-cell-number {

    white-space: pre-wrap

}

.notion-table-cell-multi_select,

.notion-table-cell-select {

    padding: 7px 8px 0

}

.notion-property-multi_select,

.notion-property-select {

    display: -moz-box;

    display: flex;

    flex-wrap: wrap

}

.notion-property-multi_select-item,

.notion-property-select-item {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    padding: 0 6px;

    border-radius: 3px;

    height: 18px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    line-height: 120%

}

.notion-property-multi_select-item {

    margin: 0 6px 6px 0

}

.notion-collection-card .notion-property-multi_select-item {

    margin: 0 6px 0 0

}

.notion-property-file {

    display: -moz-box;

    display: flex;

    flex-wrap: wrap;

    align-content: flex-start

}

.notion-property-file img {

    max-height: 24px;

    max-width: 100%;

    margin-right: 6px

}

.notion-collection-card-cover .notion-property-file {

    height: 100%

}

.notion-collection-card-cover .notion-property-file img {

    width: 100%;

    margin: 0;

    max-height: 100%

}

.notion-property-checkbox {

    width: 16px;

    height: 16px

}

.notion-property-checkbox-checked {

    width: 16px;

    height: 16px;

    background: var(--select-color-0)

}

.notion-property-checkbox-checked svg {

    position: relative;

    display: block;

    top: 1px;

    left: 1px;

    width: 14px;

    height: 14px;

    fill: #fff

}

.notion-property-checkbox-unchecked {

    width: 16px;

    height: 16px;

    border: 1.3px solid var(--fg-color)

}

.notion-gallery {

    align-self: center

}

.notion-gallery-view {

    position: relative;

    padding-left: 0;

    -webkit-transition: padding .2s ease-out;

    -moz-transition: padding .2s ease-out;

    transition: padding .2s ease-out

}

.notion-gallery-grid {

    display: grid;

    position: relative;

    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));

    grid-auto-rows: 1fr;

    grid-gap: 16px;

    gap: 16px;

    border-top: 1px solid var(--fg-color-1);

    padding-top: 16px;

    padding-bottom: 4px

}

.notion-gallery-grid-size-small {

    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))

}

.notion-gallery-grid-size-large {

    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))

}

.notion-collection-card {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    overflow: hidden;

    text-decoration: none;

    -webkit-box-shadow: 0 0 0 1px hsla(0, 0%, 6%, .1), 0 2px 4px hsla(0, 0%, 6%, .1);

    box-shadow: 0 0 0 1px hsla(0, 0%, 6%, .1), 0 2px 4px hsla(0, 0%, 6%, .1);

    border-radius: 3px;

    background: var(--bg-color);

    color: var(--fg-color);

    -webkit-transition: background .1s ease-out 0s;

    -moz-transition: background .1s ease-out 0s;

    transition: background .1s ease-out 0s;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    cursor: pointer

}

.notion-collection-card:hover {

    background: var(--bg-color-0)

}

.notion-collection-card-cover {

    position: relative;

    width: 100%;

    height: 190px;

    border-bottom: 1px solid var(--fg-color-0);

    overflow: hidden

}

.notion-collection-card-cover img {

    width: 100%;

    height: 100%;

    border-radius: 1px 1px 0 0

}

.notion-collection-card-cover .notion-collection-card-cover-empty {

    width: 100%;

    height: 100%;

    pointer-events: none;

    overflow: hidden;

    background: var(--fg-color-5);

    -webkit-box-shadow: var(--fg-color-0) 0 -1px 0 0 inset;

    box-shadow: var(--fg-color-0) 0 -1px 0 0 inset;

    padding: 8px 8px 0

}

.notion-collection-card-size-small .notion-collection-card-cover {

    height: 124px

}

.notion-collection-card-body {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    padding: 4px 10px

}

.notion-collection-card-property {

    padding: 4px 0;

    white-space: nowrap;

    word-break: break-word;

    overflow: hidden;

    text-overflow: ellipsis;

    font-size: 12px

}

.notion-collection-card-property:first-child {

    font-size: 14px;

    font-weight: 500

}

.notion-collection-card-property:not(:first-child) {

    white-space: nowrap;

    text-overflow: clip

}

.notion-collection-card-property img {

    max-height: 18px

}

.notion-list-collection {

    align-self: center;

    width: 100%;

    max-width: 100%

}

.notion-list-view {

    position: relative;

    padding-left: 0;

    -webkit-transition: padding .2s ease-out;

    -moz-transition: padding .2s ease-out;

    transition: padding .2s ease-out;

    max-width: 100%

}

.notion-list-body {

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    border-top: 1px solid var(--fg-color-1);

    padding-top: 8px

}

.notion-list-body,

.notion-list-item {

    display: -moz-box;

    display: flex;

    max-width: 100%;

    overflow: hidden

}

.notion-list-item {

    -moz-box-pack: justify;

    justify-content: space-between;

    -moz-box-align: center;

    align-items: center;

    padding: 0 4px;

    margin: 1px 0

}

.notion-list-item-title {

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    font-weight: 500;

    line-height: 1.3

}

.notion-list-item-body {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    flex-wrap: nowrap;

    overflow: hidden

}

.notion-list-item-property {

    margin-left: 14px;

    font-size: 14px

}

.notion-list-item-property .notion-property-created_time,

.notion-list-item-property .notion-property-date,

.notion-list-item-property .notion-property-last_edited_time,

.notion-list-item-property .notion-property-url {

    display: inline-block;

    color: var(--fg-color-3);

    font-size: 12px;

    overflow: hidden;

    text-overflow: ellipsis

}

.notion-board {

    width: 100vw;

    max-width: 100vw;

    align-self: center;

    overflow: auto hidden

}

.notion-board-view {

    position: relative;

    float: left;

    min-width: 100%;

    padding-left: 0;

    -webkit-transition: padding .2s ease-out;

    -moz-transition: padding .2s ease-out;

    transition: padding .2s ease-out

}

.notion-board-header {

    display: -moz-box;

    display: flex;

    position: absolute;

    z-index: 82;

    height: 44px;

    min-width: 100%

}

.notion-board-header-inner {

    display: -moz-inline-box;

    display: inline-flex;

    border-top: 1px solid var(--fg-color-1);

    border-bottom: 1px solid var(--fg-color-1)

}

.notion-board-header-placeholder {

    height: var(--notion-header-height)

}

.notion-board-th {

    padding-right: 16px;

    -webkit-box-sizing: content-box;

    -moz-box-sizing: content-box;

    box-sizing: content-box;

    flex-shrink: 0

}

.notion-board-th,

.notion-board-th-body {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    font-size: 14px

}

.notion-board-th-body {

    line-height: 1.2;

    padding-left: 2px;

    padding-right: 4px;

    white-space: nowrap;

    overflow: hidden

}

.notion-board-th-count {

    color: var(--fg-color-3);

    font-weight: 500;

    padding: 0 8px

}

.notion-board-th-empty {

    margin-right: 4px;

    position: relative;

    top: 2px

}

.notion-board-body {

    display: -moz-inline-box;

    display: inline-flex

}

.notion-board-group {

    -moz-box-flex: 0;

    flex: 0 0 auto;

    padding-right: 16px;

    -webkit-box-sizing: content-box;

    -moz-box-sizing: content-box;

    box-sizing: content-box

}

.notion-board-group-card {

    margin-bottom: 8px

}

.notion-board-view .notion-board-group,

.notion-board-view .notion-board-th {

    width: 260px

}

.notion-board-view-size-small .notion-board-group,

.notion-board-view-size-small .notion-board-th {

    width: 180px

}

.notion-board-view-size-large .notion-board-group,

.notion-board-view-size-large .notion-board-th {

    width: 320px

}

.notion-board-view .notion-collection-card .notion-collection-card-cover {

    height: 148px

}

.notion-board-view-size-small .notion-collection-card .notion-collection-card-cover {

    height: 100px

}

.notion-board-view-size-large .notion-collection-card .notion-collection-card-cover {

    height: 180px

}

.notion-table-of-contents {

    width: 100%;

    margin: 4px 0

}

.notion-table-of-contents-item {

    color: inherit;

    text-decoration: none;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    -webkit-transition: background 20ms ease-in 0s;

    -moz-transition: background 20ms ease-in 0s;

    transition: background 20ms ease-in 0s;

    cursor: pointer;

    width: 100%;

    padding: 6px 2px;

    font-size: 14px;

    line-height: 1.3;

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis

}

.notion-table-of-contents-item:hover {

    background: var(--bg-color-0)

}

.notion-table-of-contents-item-body {

    border-bottom: 1px solid var(--fg-color-1)

}

.notion-to-do {

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.notion-to-do,

.notion-to-do-item {

    width: 100%;

    display: -moz-box;

    display: flex

}

.notion-to-do-item {

    -moz-box-align: center;

    align-items: center;

    padding-left: 2px;

    min-height: -moz-calc(1.5em + 3px + 3px);

    min-height: calc(1.5em + 3px + 3px)

}

.notion-to-do-children {

    padding-left: 1.5em

}

.notion-to-do-checked .notion-to-do-item {

    text-decoration: line-through;

    opacity: .375

}

.notion-to-do-body {

    white-space: pre-wrap;

    word-break: break-word

}

.notion-to-do-item .notion-property-checkbox {

    margin-right: 8px

}

.notion-google-drive {

    width: 100%;

    align-self: center;

    margin: 4px 0

}

.notion-google-drive-link {

    position: relative;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    color: inherit;

    text-decoration: none;

    width: 100%;

    border: 1px solid var(--fg-color-1);

    border-radius: 3px;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    -webkit-transition: background 20ms ease-in 0s;

    -moz-transition: background 20ms ease-in 0s;

    transition: background 20ms ease-in 0s;

    cursor: pointer

}

.notion-google-drive-link:hover {

    background: var(--bg-color-0)

}

.notion-google-drive-preview {

    display: block;

    position: relative;

    width: 100%;

    padding-bottom: 55%;

    overflow: hidden

}

.notion-google-drive-preview img {

    position: absolute;

    width: 100%;

    top: 0;

    left: 0;

    bottom: 0;

    right: 0;

    -webkit-object-fit: cover;

    object-fit: cover;

    -webkit-object-position: center top;

    object-position: center top

}

.notion-google-drive-body {

    width: 100%;

    min-height: 60px;

    padding: 12px 14px 14px;

    overflow: hidden;

    border-top: 1px solid var(--fg-color-1)

}

.notion-google-drive-body-title {

    font-size: 14px;

    line-height: 20px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    margin-bottom: 2px

}

.notion-google-drive-body-modified-time {

    font-size: 12px;

    line-height: 1.3;

    color: var(--fg-color-3);

    max-height: 32px;

    overflow: hidden

}

.notion-google-drive-body-source {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    margin-top: 6px

}

.notion-google-drive-body-source-icon {

    flex-shrink: 0;

    background-size: cover;

    width: 16px;

    height: 16px;

    margin-right: 6px

}

.notion-google-drive-body-source-domain {

    font-size: 12px;

    line-height: 16px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis

}

.notion-file {

    width: 100%;

    margin: 1px 0

}

.notion-file-link {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    padding: 3px 2px;

    border-radius: 3px;

    -webkit-transition: background 20ms ease-in 0s;

    -moz-transition: background 20ms ease-in 0s;

    transition: background 20ms ease-in 0s;

    color: inherit;

    text-decoration: none

}

.notion-file-link:hover {

    background: var(--bg-color-0)

}

.notion-file-icon {

    margin-right: 2px;

    width: 1.35em;

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    -moz-box-pack: center;

    justify-content: center;

    -moz-box-flex: 0;

    flex-grow: 0;

    flex-shrink: 0;

    min-height: -moz-calc(1.5em + 3px + 3px);

    min-height: calc(1.5em + 3px + 3px);

    height: 1.35em

}

.notion-file-info {

    display: -moz-box;

    display: flex;

    -moz-box-align: baseline;

    align-items: baseline

}

.notion-file-size,

.notion-file-title {

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis

}

.notion-file-size {

    color: var(--fg-color-3);

    font-size: 12px;

    line-height: 16px;

    margin-left: 6px

}

.notion-audio,

.notion-audio audio {

    width: 100%

}

.notion-equation {

    position: relative;

    display: -moz-inline-box;

    display: inline-flex;

    color: inherit;

    fill: inherit;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    border-radius: 3px;

    -webkit-transition: background 20ms ease-in 0s;

    -moz-transition: background 20ms ease-in 0s;

    transition: background 20ms ease-in 0s

}

.notion-equation-inline {

    -webkit-user-select: all;

    -moz-user-select: all;

    -ms-user-select: all;

    user-select: all

}

.notion-equation-block {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    overflow: auto;

    width: 100%;

    max-width: 100%;

    padding: 4px 8px;

    margin: 4px 0;

    cursor: pointer

}

.notion-equation:hover {

    background: var(--bg-color-0)

}

.notion-equation:active,

.notion-equation:focus {

    background: var(--select-color-2)

}

.notion-frame .katex-display .katex {

    padding-right: 32px

}

.notion-frame .katex>.katex-html {

    white-space: normal

}

.notion-page-title {

    display: -moz-inline-box;

    display: inline-flex;

    max-width: 100%;

    -moz-box-align: center;

    align-items: center;

    line-height: 1.3;

    -webkit-transition: background .12s ease-in 0s;

    -moz-transition: background .12s ease-in 0s;

    transition: background .12s ease-in 0s

}

.notion-page-title-icon {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    -moz-box-pack: center;

    justify-content: center;

    height: 22px;

    width: 22px;

    border-radius: 3px;

    flex-shrink: 0;

    margin-left: 2px;

    margin-right: 6px

}

.notion-collection-card-property .notion-link {

    border-bottom: 0

}

.notion-collection-card-property .notion-page-title {

    -webkit-transition: none;

    -moz-transition: none;

    transition: none

}

.notion-collection-card-property .notion-page-title:hover {

    background: unset

}

.notion-collection-card-property .notion-page-title-icon {

    margin-left: 0;

    height: 18px;

    width: 18px

}

.notion-collection-card-property .notion-page-title-text {

    border-bottom: 0

}

.notion-collection-card-property .notion-property-relation .notion-page-title-text {

    border-bottom: 1px solid

}

.notion-page-title-text {

    position: relative;

    top: 1px;

    border-bottom: 1px solid var(--fg-color-1);

    line-height: 1.3;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

    font-weight: 500

}

.notion-link .notion-page-title-text {

    border-bottom: 0

}

.notion-collection-row {

    width: 100%;

    padding: 4px 0 8px;

    border-bottom: 1px solid var(--fg-color-0);

    margin-bottom: 1em

}

.notion-collection-row-body {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.notion-collection-row-property {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    margin-bottom: 4px

}

.notion-collection-row-value {

    -moz-box-flex: 1;

    flex: 1 1;

    padding: 6px 8px 7px;

    font-size: 14px

}

.notion-collection-row-property .notion-collection-column-title {

    display: -moz-box;

    display: flex;

    -moz-box-align: center;

    align-items: center;

    width: 160px;

    height: 34px;

    color: var(--fg-color-3);

    padding: 0 6px

}

.notion-collection-row-property .notion-property {

    width: 100%

}

.notion-collection-row-property .notion-collection-column-title-icon {

    width: 16px;

    height: 16px;

    min-width: 16px;

    min-height: 16px

}

.notion-collection-row-property .notion-link {

    border-bottom: 0

}

.notion-collection-row-property .notion-property-relation .notion-page-title-text {

    border-bottom: 1px solid

}

.notion-user {

    display: block;

    -webkit-object-fit: cover;

    object-fit: cover;

    border-radius: 100%;

    width: 20px;

    height: 20px

}

.notion-list-item-property .notion-property-multi_select-item {

    margin-bottom: 0;

    flex-wrap: none

}

.notion-list-item-property .notion-property-multi_select-item:last-of-type {

    margin-right: 0

}

.notion-column .notion-board-view,

.notion-column .notion-collection-header,

.notion-column .notion-table-view,

.notion-toggle .notion-board-view,

.notion-toggle .notion-collection-header,

.notion-toggle .notion-table-view {

    padding-left: 0 !important;

    padding-right: 0 !important

}

.notion-column .notion-board,

.notion-column .notion-table,

.notion-toggle .notion-board,

.notion-toggle .notion-table {

    width: 100% !important;

    max-width: 100% !important

}

@media only screen and (max-width:730px) {

    .notion-page {

        padding-left: 2vw;

        padding-right: 2vw

    }

    .notion-asset-wrapper {

        max-width: 100%

    }

    .notion-asset-wrapper-full {

        max-width: 100vw

    }

}

@media (max-width:640px) {

    .notion-bookmark-image {

        display: none

    }

}

.lazy-image-wrapper {

    position: relative;

    overflow: hidden

}

.lazy-image-wrapper img {

    position: absolute;

    width: 100%;

    height: 100%;

    -webkit-object-fit: cover;

    object-fit: cover;

    max-width: 100%;

    max-height: 100%;

    min-width: 100%;

    min-height: 100%

}

.lazy-image-preview {

    filter: blur(20px);

    -webkit-transform: scale(1.1);

    -moz-transform: scale(1.1);

    transform: scale(1.1);

    opacity: 1;

    -webkit-transition: opacity .4s ease-in !important;

    -moz-transition: opacity .4s ease-in !important;

    transition: opacity .4s ease-in !important;

    -webkit-transition-delay: .1s;

    -moz-transition-delay: .1s;

    transition-delay: .1s;

    will-change: opacity

}

.lazy-image-wrapper img.lazy-image-real {

    position: relative

}

.lazy-image-real {

    opacity: 0;

    -webkit-transition: opacity .4s ease-out !important;

    -moz-transition: opacity .4s ease-out !important;

    transition: opacity .4s ease-out !important;

    will-change: opacity

}

.lazy-image-real.medium-zoom-image {

    -webkit-transition: opacity .4s ease-out, -webkit-transform .3s cubic-bezier(.2, 0, .2, 1) !important;

    transition: opacity .4s ease-out, -webkit-transform .3s cubic-bezier(.2, 0, .2, 1) !important;

    -moz-transition: transform .3s cubic-bezier(.2, 0, .2, 1), opacity .4s ease-out, -moz-transform .3s cubic-bezier(.2, 0, .2, 1) !important;

    transition: transform .3s cubic-bezier(.2, 0, .2, 1), opacity .4s ease-out !important;

    transition: transform .3s cubic-bezier(.2, 0, .2, 1), opacity .4s ease-out, -webkit-transform .3s cubic-bezier(.2, 0, .2, 1), -moz-transform .3s cubic-bezier(.2, 0, .2, 1) !important;

    will-change: opacity, transform

}

.medium-zoom-image--opened {

    -webkit-object-fit: cover;

    object-fit: cover;

    opacity: 1

}

.lazy-image-loaded .lazy-image-preview {

    opacity: 0

}

.lazy-image-loaded .lazy-image-real {

    opacity: 1

}

.notion-page-cover.lazy-image-wrapper {

    padding: 0 !important

}

.notion-collection-card-cover .lazy-image-wrapper {

    padding: 0 !important;

    height: 100%

}

.notion-page-cover .lazy-image-preview,

.notion-page-cover .lazy-image-real {

    will-change: unset !important

}

.notion-page-cover .lazy-image-loaded .lazy-image-preview {

    opacity: 1

}

.notion-lite {

    overflow-y: auto

}

.notion-lite .notion-page {

    width: 100%;

    padding: 0

}

.notion-lite .notion-board-view,

.notion-lite .notion-collection-header,

.notion-lite .notion-table-view {

    padding-left: 0 !important;

    padding-right: 0 !important

}

.notion-lite .notion-board,

.notion-lite .notion-table {

    width: 100% !important

}

.notion-header {

    position: sticky;

    top: 0;

    left: 0;

    z-index: 200;

    width: 100%;

    max-width: 100vw;

    overflow: hidden;

    height: var(--notion-header-height);

    min-height: var(--notion-header-height);

    background: var(--bg-color)

}

.notion-header .nav-header {

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    -moz-box-pack: justify;

    justify-content: space-between;

    padding: 0 12px;

    -webkit-text-size-adjust: 100%;

    -moz-text-size-adjust: 100%;

    text-size-adjust: 100%;

    line-height: 1.5;

    line-height: 1.2;

    font-size: 14px

}

.notion-header .breadcrumbs,

.notion-header .nav-header {

    height: 100%;

    display: -moz-box;

    display: flex;

    -moz-box-orient: horizontal;

    -moz-box-direction: normal;

    flex-direction: row;

    -moz-box-align: center;

    align-items: center

}

.notion-header .breadcrumbs {

    -moz-box-flex: 0;

    flex-grow: 0;

    min-width: 0;

    margin-right: 8px

}

.notion-header .breadcrumb {

    display: -moz-inline-box;

    display: inline-flex;

    -moz-box-orient: horizontal;

    -moz-box-direction: normal;

    flex-direction: row;

    -moz-box-pack: center;

    justify-content: center;

    -moz-box-align: center;

    align-items: center;

    white-space: nowrap;

    text-overflow: ellipsis;

    color: var(--fg-color);

    text-decoration: none;

    margin: 1px 0;

    padding: 4px 6px;

    border-radius: 3px;

    -webkit-transition: background .12s ease-in 0s;

    -moz-transition: background .12s ease-in 0s;

    transition: background .12s ease-in 0s;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    background: transparent;

    cursor: pointer

}

.notion-header .breadcrumb .icon {

    position: relative;

    top: -1px

}

.notion-header img.icon {

    width: 18px !important;

    height: 18px !important

}

.notion-header .icon {

    font-size: 18px;

    margin-right: 6px;

    line-height: 1.1

}

.notion-header .searchIcon {

    width: 14px;

    height: 14px;

    margin-right: 6px;

    color: var(--fg-color);

    fill: var(--fg-color)

}

.notion-header .breadcrumb:not(.active):hover {

    background: var(--bg-color-0)

}

.notion-header .breadcrumb:not(.active):active {

    background: var(--bg-color-1)

}

.notion-header .breadcrumb.active {

    cursor: default

}

.notion-header .spacer {

    margin: 0 2px;

    color: var(--fg-color-2)

}

.notion-header .button {

    height: 28px;

    padding: 0 8px

}

.notion-search-overlay {

    position: fixed;

    top: 0;

    left: 0;

    right: 0;

    bottom: 0;

    background: hsla(0, 0%, 6%, .6);

    display: -moz-box;

    display: flex;

    -moz-box-pack: center;

    justify-content: center;

    -moz-box-align: start;

    align-items: flex-start;

    z-index: 1001

}

.notion-search {

    -webkit-box-shadow: 0 0 0 1px hsla(0, 0%, 6%, .05), 0 5px 10px hsla(0, 0%, 6%, .1), 0 15px 40px hsla(0, 0%, 6%, .2);

    box-shadow: 0 0 0 1px hsla(0, 0%, 6%, .05), 0 5px 10px hsla(0, 0%, 6%, .1), 0 15px 40px hsla(0, 0%, 6%, .2);

    border-radius: 3px;

    background: #fff;

    position: relative;

    top: 90px;

    max-width: 600px;

    min-height: 50px;

    max-height: 80vh;

    width: 75%;

    overflow: hidden;

    outline: none;

    font-size: 16px;

    line-height: 1.5;

    color: #37352f;

    caret-color: #37352f;

    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Apple Color Emoji, Arial, sans-serif, Segoe UI Emoji, Segoe UI Symbol

}

.notion-search .quickFindMenu {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    min-width: 100%;

    max-width: -moz-calc(100vw - 24px);

    max-width: calc(100vw - 24px);

    height: 100%;

    max-height: 80vh;

    min-height: 50px

}

.notion-search .searchBar {

    display: -moz-box;

    display: flex;

    -moz-box-orient: horizontal;

    -moz-box-direction: normal;

    flex-direction: row;

    -moz-box-align: center;

    align-items: center;

    height: 52px;

    -webkit-box-shadow: 0 1px 0 rgba(55, 53, 47, .09);

    box-shadow: 0 1px 0 rgba(55, 53, 47, .09);

    font-size: 18px;

    line-height: 27px;

    padding: 0 16px

}

.notion-search .searchInput {

    resize: none;

    white-space: nowrap;

    border: none;

    outline: none;

    -moz-box-flex: 1;

    flex: 1 1;

    line-height: inherit;

    font-size: inherit

}

.notion-search .inlineIcon {

    margin-right: 10px;

    fill: rgba(55, 53, 47, .4)

}

.notion-search .clearButton {

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    border-radius: 20px;

    cursor: pointer;

    margin-left: 8px

}

.notion-search .clearIcon {

    width: 14px;

    height: 14px;

    fill: rgba(55, 53, 47, .3)

}

.notion-search .clearButton:hover .clearIcon {

    fill: rgba(55, 53, 47, .4)

}

.notion-search .clearButton:active .clearIcon {

    fill: rgba(55, 53, 47, .8)

}

@-webkit-keyframes spinner {

    to {

        -webkit-transform: rotate(1turn);

        transform: rotate(1turn)

    }

}

@-moz-keyframes spinner {

    to {

        -moz-transform: rotate(1turn);

        transform: rotate(1turn)

    }

}

@keyframes spinner {

    to {

        -webkit-transform: rotate(1turn);

        -moz-transform: rotate(1turn);

        transform: rotate(1turn)

    }

}

.notion-search .loadingIcon {

    -webkit-animation: spinner .6s linear infinite;

    -moz-animation: spinner .6s linear infinite;

    animation: spinner .6s linear infinite

}

.notion-search .noResultsPane {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    -moz-box-pack: center;

    justify-content: center;

    -moz-box-align: center;

    align-items: center;

    padding: 32px 16px

}

.notion-search .noResults {

    font-size: 14px;

    font-weight: 500;

    line-height: 20px;

    color: rgba(55, 53, 47, .6)

}

.notion-search .noResultsDetail {

    font-size: 14px;

    margin-top: 2px;

    color: rgba(55, 53, 47, .4)

}

.notion-search .resultsFooter {

    -webkit-box-shadow: 0 -1px 0 rgba(55, 53, 47, .09);

    box-shadow: 0 -1px 0 rgba(55, 53, 47, .09);

    margin-top: 1px;

    font-size: 12px;

    min-height: 28px;

    color: rgba(55, 53, 47, .4);

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    padding: 0 16px;

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    -moz-box-pack: center;

    justify-content: center

}

.notion-search .resultsCount {

    font-weight: 500;

    color: rgba(55, 53, 47, .6)

}

.notion-search .resultsPane {

    -moz-box-orient: vertical;

    flex-direction: column;

    height: 100%;

    -moz-box-flex: 1;

    flex: 1 1;

    overflow: auto

}

.notion-search .result,

.notion-search .resultsPane {

    display: -moz-box;

    display: flex;

    -moz-box-direction: normal

}

.notion-search .result {

    padding: 8px 14px;

    border-bottom: 1px solid rgba(55, 53, 47, .06);

    min-height: 36px;

    font-size: 14px;

    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;

    -moz-box-orient: horizontal;

    flex-direction: row;

    -moz-box-align: center;

    align-items: center;

    -moz-box-pack: start;

    justify-content: flex-start;

    color: #37352f;

    text-decoration: none

}

.notion-search .resultsPane .result:hover {

    background: rgba(55, 53, 47, .08) !important

}

.notion-search .resultsPane .result:active {

    background: rgba(55, 53, 47, .16) !important

}

.notion-sync-block {

    width: 100%

}

.notion-collection-group {

    margin-bottom: 1em

}

.notion-collection-group>summary>div {

    -webkit-transform: scale(.85);

    -moz-transform: scale(.85);

    transform: scale(.85);

    -webkit-transform-origin: 0 50%;

    -moz-transform-origin: 0 50%;

    transform-origin: 0 50%;

    display: -moz-inline-box;

    display: inline-flex;

    -moz-box-align: center;

    align-items: center

}

code[class*=language-],

pre[class*=language-] {

    color: #ccc;

    background: none;

    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;

    font-size: 1em;

    text-align: left;

    white-space: pre;

    word-spacing: normal;

    word-break: normal;

    word-wrap: normal;

    line-height: 1.5;

    -moz-tab-size: 4;

    -webkit-tab-size: 4;

    tab-size: 4;

    -webkit-hyphens: none;

    -ms-hyphens: none;

    hyphens: none

}

pre[class*=language-] {

    padding: 1em;

    margin: .5em 0;

    overflow: auto

}

:not(pre)>code[class*=language-],

pre[class*=language-] {

    background: #2d2d2d

}

:not(pre)>code[class*=language-] {

    padding: .1em;

    border-radius: .3em;

    white-space: normal

}

.token.block-comment,

.token.cdata,

.token.comment,

.token.doctype,

.token.prolog {

    color: #999

}

.token.punctuation {

    color: #ccc

}

.token.attr-name,

.token.deleted,

.token.namespace,

.token.tag {

    color: #e2777a

}

.token.function-name {

    color: #6196cc

}

.token.boolean,

.token.function,

.token.number {

    color: #f08d49

}

.token.class-name,

.token.constant,

.token.property,

.token.symbol {

    color: #f8c555

}

.token.atrule,

.token.builtin,

.token.important,

.token.keyword,

.token.selector {

    color: #cc99cd

}

.token.attr-value,

.token.char,

.token.regex,

.token.string,

.token.variable {

    color: #7ec699

}

.token.entity,

.token.operator,

.token.url {

    color: #67cdcc

}

.token.bold,

.token.important {

    font-weight: 700

}

.token.italic {

    font-style: italic

}

.token.entity {

    cursor: help

}

.token.inserted {

    color: green

}

.static-tweet {

    --colors-blue: #0c00ff;

    --colors-purple: #be00ff;

    --accents-1: #fafafa;

    --accents-2: #eaeaea;

    --accents-3: #999;

    --accents-4: #888;

    --accents-5: #666;

    --bg-color: #fff;

    --link-color: var(--colors-blue);

    --poll-bar-color: var(--colors-blue);

    --inline-code-color: var(--colors-purple);

    --code-color: #9efeff;

    --code-bg-color: #1e1e3f;

    --text-margin: 1.25rem 0;

    --container-margin: 0.5rem 0;

    --poll-margin: 1.5rem 1rem;

    --heading-margin-top: 3.5rem;

    --heading-margin-bottom: 2rem;

    --li-margin: 0 0 0.5rem 0;

    --tweet-font: normal normal 16px/1.4 Helvetica, Roboto, "Segoe UI", Calibri, sans-serif;

    --tweet-font-color: #1c2022;

    --tweet-bg-color: #fff;

    --tweet-border: 1px solid #e1e8ed;

    --tweet-border-hover: 1px solid #ccd6dd;

    --tweet-link-color: #2b7bb9;

    --tweet-link-color-hover: #3b94d9;

    --tweet-color-gray: #697882;

    --tweet-color-red: #e02460;

    width: 100%;

    max-width: 550px;

    min-width: 220px

}

.static-tweet-caption {

    font-size: 14px;

    color: #999;

    text-align: center;

    margin: 10px 0 0;

    padding: 0

}

.static-tweet-anchor {

    color: var(--tweet-link-color);

    text-decoration: none

}

@media (any-hover:hover) {

    .static-tweet-anchor:hover {

        text-decoration: underline

    }

}

.static-tweet code {

    font-size: 14px;

    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif

}

.static-tweet code.inline {

    color: var(--inline-code-color);

    font-size: 1rem;

    white-space: pre-wrap

}

.static-tweet pre {

    color: var(--code-color);

    background: var(--code-bg-color);

    padding: 1.25rem;

    margin: var(--container-margin);

    white-space: pre;

    overflow: auto;

    -webkit-overflow-scrolling: touch

}

.static-tweet .image-container {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));

    margin: var(--container-margin)

}

.static-tweet .image-count-3>:global(:first-child) {

    grid-row-end: span 2

}

.static-tweet .gif-container,

.static-tweet .video-container {

    margin: var(--container-margin)

}

.static-tweet .gif-container>:global(video),

.static-tweet .video-container>:global(video) {

    width: 100%;

    max-height: 500px

}

.static-tweet-permalink span[id] {

    display: block;

    position: absolute;

    visibility: hidden;

    margin-top: calc(-1 * var(--heading-margin-top));

    padding-top: var(--heading-margin-top)

}

.static-tweet-permalink a {

    color: inherit;

    text-decoration: none

}

@media (any-hover:hover) {

    .static-tweet-permalink a:hover {

        color: inherit;

        border-bottom: 1px solid

    }

    .static-tweet-permalink a:hover~.permalink {

        visibility: visible

    }

}

.static-tweet-permalink .permalink {

    visibility: hidden;

    display: none;

    font-weight: 500

}

@media screen and (min-width:992px) {

    .static-tweet-permalink a {

        margin-right: .5rem

    }

    .static-tweet-permalink .permalink {

        display: inline-block

    }

}

.static-tweet-h1,

.static-tweet-h2,

.static-tweet-h3,

.static-tweet-h4,

.static-tweet-h5,

.static-tweet-h6 {

    font-weight: 600;

    margin: var(--heading-margin-top) 0 var(--heading-margin-bottom) 0

}

.static-tweet-h1 {

    font-size: 2rem

}

.static-tweet-h2 {

    font-size: 1.75rem

}

.static-tweet-h3 {

    font-size: 1.5rem

}

.static-tweet-h4 {

    font-size: 1.25rem

}

.static-tweet-h5 {

    font-size: 1rem

}

.static-tweet-h6 {

    font-size: .875rem

}

.static-tweet ul {

    margin: var(--text-margin);

    list-style-type: none;

    padding-left: 1rem

}

.static-tweet ul li:before {

    content: "-";

    color: var(--accents-3);

    position: absolute;

    margin-left: -1rem

}

.static-tweet ol {

    margin: var(--text-margin);

    padding-left: 1rem

}

.static-tweet li {

    padding-left: 0;

    margin: var(--li-margin)

}

.static-tweet-summary {

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box

}

.static-tweet-details {

    height: 100%;

    overflow: hidden

}

.static-tweet-summary {

    position: relative;

    height: 100%;

    list-style: none

}

.static-tweet-summary::marker {

    display: none

}

.static-tweet-table-container {

    display: -moz-box;

    display: flex;

    -moz-box-pack: center;

    justify-content: center;

    width: 100%;

    margin: var(--container-margin)

}

.static-tweet-table-container table {

    display: block;

    overflow: auto;

    border-collapse: collapse

}

.static-tweet-table-container th {

    font-weight: 600

}

.static-tweet-table-container td,

.static-tweet-table-container th {

    padding: .5rem .875rem;

    border: 1px solid var(--accents-2)

}

.static-tweet-p {

    margin: var(--text-margin);

    white-space: pre-wrap;

    word-wrap: break-word

}

.static-tweet blockquote {

    margin: 0;

    -webkit-margin-before: 0;

    margin-block-start: 0;

    -webkit-margin-after: 0;

    margin-block-end: 0;

    -webkit-margin-start: 0;

    -moz-margin-start: 0;

    margin-inline-start: 0;

    -webkit-margin-end: 0;

    -moz-margin-end: 0;

    margin-inline-end: 0

}

.static-tweet-blockquote {

    background: var(--accents-1);

    color: var(--accents-5);

    border: 1px solid var(--accents-2);

    margin: var(--container-margin);

    padding: 0 1.25rem

}

.static-tweet-hr {

    border: 0;

    border-top: 1px solid var(--accents-2);

    margin: var(--text-margin)

}

.static-tweet-twitter-link,

.static-tweet-twitter-link s {

    text-decoration: none

}

@media (any-hover:hover) {

    .static-tweet-twitter-link:hover {

        text-decoration: underline

    }

}

.static-tweet-emoji {

    height: 1.2em !important;

    width: 1.2em !important;

    margin: 0 2px;

    vertical-align: -3px

}

.static-tweet-poll {

    margin: var(--poll-margin)

}

.static-tweet-options {

    display: grid;

    grid-template-columns: max-content 14rem max-content;

    -moz-box-align: center;

    align-items: center;

    grid-gap: 1rem;

    overflow: auto

}

.static-tweet-label {

    overflow: auto;

    text-align: right;

    white-space: pre-wrap;

    word-wrap: break-word

}

.static-tweet-chart {

    height: 100%;

    background: var(--poll-bar-color)

}

.static-tweet-poll hr {

    border: 0;

    border-top: 1px solid var(--accents-2);

    margin: 1rem 0 .5rem

}

.static-tweet-footer {

    display: -moz-box;

    display: flex;

    font-size: .875rem;

    color: var(--accents-4)

}

.static-tweet-votes-count {

    -moz-box-flex: 1;

    flex-grow: 1

}

@media screen and (max-width:450px) {

    .static-tweet-options {

        grid-template-columns: max-content 7rem max-content

    }

}

.static-tweet-info a {

    text-decoration: none

}

.static-tweet-info {

    font-size: .875rem;

    display: -moz-box;

    display: flex

}

.static-tweet-like {

    display: -moz-box;

    display: flex;

    color: var(--tweet-color-gray);

    margin-right: .75rem

}

.static-tweet-like:visited {

    color: var(--tweet-link-color)

}

@media (any-hover:hover) {

    .static-tweet-like:hover {

        color: var(--tweet-color-red)

    }

    .static-tweet-like:hover .static-tweet-icon-heart {

        background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23E0245E%22%20d%3D%22M12%2021.638h-.014C9.403%2021.59%201.95%2014.856%201.95%208.478c0-3.064%202.525-5.754%205.403-5.754%202.29%200%203.83%201.58%204.646%202.73.813-1.148%202.353-2.73%204.644-2.73%202.88%200%205.404%202.69%205.404%205.755%200%206.375-7.454%2013.11-10.037%2013.156H12zM7.354%204.225c-2.08%200-3.903%201.988-3.903%204.255%200%205.74%207.035%2011.596%208.55%2011.658%201.52-.062%208.55-5.917%208.55-11.658%200-2.267-1.822-4.255-3.902-4.255-2.528%200-3.94%202.936-3.952%202.965-.23.562-1.156.562-1.387%200-.015-.03-1.426-2.965-3.955-2.965z%22%2F%3E%3C%2Fsvg%3E)

    }

}

.static-tweet-icon-heart {

    width: 1.25em;

    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%23697882%22%20d%3D%22M12%2021.638h-.014C9.403%2021.59%201.95%2014.856%201.95%208.478c0-3.064%202.525-5.754%205.403-5.754%202.29%200%203.83%201.58%204.646%202.73.813-1.148%202.353-2.73%204.644-2.73%202.88%200%205.404%202.69%205.404%205.755%200%206.375-7.454%2013.11-10.037%2013.156H12zM7.354%204.225c-2.08%200-3.903%201.988-3.903%204.255%200%205.74%207.035%2011.596%208.55%2011.658%201.52-.062%208.55-5.917%208.55-11.658%200-2.267-1.822-4.255-3.902-4.255-2.528%200-3.94%202.936-3.952%202.965-.23.562-1.156.562-1.387%200-.015-.03-1.426-2.965-3.955-2.965z%22%2F%3E%3C%2Fsvg%3E)

}

.static-tweet-likes {

    margin-left: .25rem

}

.static-tweet-time {

    display: block;

    -moz-box-flex: 1;

    flex: 1 1;

    color: var(--tweet-color-gray)

}

@media (any-hover:hover) {

    .static-tweet-time:focus,

    .static-tweet-time:hover {

        color: var(--tweet-link-color-hover)

    }

    .static-tweet-time:focus {

        text-decoration: underline

    }

}

.static-tweet-body {

    color: var(--tweet-font-color);

    font: var(--tweet-font);

    overflow: hidden;

    background: var(--tweet-bg-color);

    border: var(--tweet-border);

    border-radius: 5px

}

@media (any-hover:hover) {

    .static-tweet-body:hover {

        border: var(--tweet-border-hover)

    }

}

.static-tweet-body-blockquote {

    position: relative;

    padding: 1.25rem 1.25rem .625rem

}

.static-tweet-icon {

    display: inline-block;

    height: 1.25em;

    vertical-align: text-bottom;

    background-size: contain;

    background-repeat: no-repeat

}

.static-tweet-header {

    display: -moz-box;

    display: flex

}

.static-tweet-header-avatar {

    height: 2.25rem;

    width: 2.25rem;

    margin-right: .625rem

}

.static-tweet-header-author {

    display: -moz-box;

    display: flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column;

    text-decoration: none;

    color: inherit

}

@media (any-hover:hover) {

    .static-tweet-header-author:hover {

        color: var(--tweet-link-color-hover)

    }

}

.static-tweet-header-name,

.static-tweet-header-username {

    line-height: 1.2;

    text-overflow: ellipsis;

    white-space: nowrap;

    overflow: hidden;

    color: #000

}

.static-tweet-header-name {

    font-weight: 700

}

.static-tweet-header-username {

    color: var(--tweet-color-gray);

    font-size: .875rem

}

.static-tweet-header-brand {

    margin-left: auto

}

.static-tweet-header-icon-twitter {

    display: inline-block;

    height: 1.25em;

    vertical-align: text-bottom;

    background-size: contain;

    background-repeat: no-repeat;

    width: 1.25em;

    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2072%2072%22%3E%3Cpath%20fill%3D%22none%22%20d%3D%22M0%200h72v72H0z%22%2F%3E%3Cpath%20class%3D%22icon%22%20fill%3D%22%231da1f2%22%20d%3D%22M68.812%2015.14c-2.348%201.04-4.87%201.744-7.52%202.06%202.704-1.62%204.78-4.186%205.757-7.243-2.53%201.5-5.33%202.592-8.314%203.176C56.35%2010.59%2052.948%209%2049.182%209c-7.23%200-13.092%205.86-13.092%2013.093%200%201.026.118%202.02.338%202.98C25.543%2024.527%2015.9%2019.318%209.44%2011.396c-1.125%201.936-1.77%204.184-1.77%206.58%200%204.543%202.312%208.552%205.824%2010.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163%200%206.345%204.513%2011.638%2010.504%2012.84-1.1.298-2.256.457-3.45.457-.845%200-1.666-.078-2.464-.23%201.667%205.2%206.5%208.985%2012.23%209.09-4.482%203.51-10.13%205.605-16.26%205.605-1.055%200-2.096-.06-3.122-.184%205.794%203.717%2012.676%205.882%2020.067%205.882%2024.083%200%2037.25-19.95%2037.25-37.25%200-.565-.013-1.133-.038-1.693%202.558-1.847%204.778-4.15%206.532-6.774z%22%2F%3E%3C%2Fsvg%3E)

}

.static-tweet-header-rounded {

    border-radius: 50%

}

.static-tweet-skeleton {

    display: block;

    width: 100%;

    border-radius: 5px;

    background-image: -webkit-gradient(linear, right top, left top, from(var(--accents-1)), color-stop(var(--accents-2)), color-stop(var(--accents-2)), to(var(--accents-1)));

    background-image: -webkit-linear-gradient(right, var(--accents-1), var(--accents-2), var(--accents-2), var(--accents-1));

    background-image: -moz-linear-gradient(right, var(--accents-1), var(--accents-2), var(--accents-2), var(--accents-1));

    background-image: linear-gradient(270deg, var(--accents-1), var(--accents-2), var(--accents-2), var(--accents-1));

    background-size: 400% 100%;

    -webkit-animation: static-tweet-skeleton-loading 8s ease-in-out infinite;

    -moz-animation: static-tweet-skeleton-loading 8s ease-in-out infinite;

    animation: static-tweet-skeleton-loading 8s ease-in-out infinite

}

@-webkit-keyframes static-tweet-skeleton-loading {

    0% {

        background-position: 200% 0

    }

    to {

        background-position: -200% 0

    }

}

@-moz-keyframes static-tweet-skeleton-loading {

    0% {

        background-position: 200% 0

    }

    to {

        background-position: -200% 0

    }

}

@keyframes static-tweet-skeleton-loading {

    0% {

        background-position: 200% 0

    }

    to {

        background-position: -200% 0

    }

}

.static-tweet-skeleton-container {

    background: var(--tweet-bg-color);

    border: var(--tweet-border);

    border-radius: 5px

}

.static-tweet-skeleton-content {

    padding: 1.25rem 1.25rem .625rem

}

.static-tweet-skeleton-footer {

    height: 2.5rem;

    padding: .625rem 1.25rem;

    border-top: var(--tweet-border)

}

@font-face {

    font-family: KaTeX_AMS;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_AMS-Regular.1de15e70fec550ef4554de45895cd073.woff2) format("woff2"), url(/_next/static/media/KaTeX_AMS-Regular.96a57080955dae1ca302c76abb8af909.woff) format("woff"), url(/_next/static/media/KaTeX_AMS-Regular.f453c078392f0c23335ea604c6765a12.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Caligraphic;

    font-style: normal;

    font-weight: 700;

    src: url(/_next/static/media/KaTeX_Caligraphic-Bold.5839401331dd0fbe22436cb27c8fcb73.woff2) format("woff2"), url(/_next/static/media/KaTeX_Caligraphic-Bold.c6297f9142925c50bd7828b90c103526.woff) format("woff"), url(/_next/static/media/KaTeX_Caligraphic-Bold.ec522b9ccc3e18028de1440991b38119.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Caligraphic;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Caligraphic-Regular.f96fac9755151d0fabd8ed9abdca9521.woff2) format("woff2"), url(/_next/static/media/KaTeX_Caligraphic-Regular.5079e051e18b6b617208b8cb5beb1082.woff) format("woff"), url(/_next/static/media/KaTeX_Caligraphic-Regular.703345f865eeee24c474248079a0ba93.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Fraktur;

    font-style: normal;

    font-weight: 700;

    src: url(/_next/static/media/KaTeX_Fraktur-Bold.49cc6a3cab050d7c2ec2336cb804e1fc.woff2) format("woff2"), url(/_next/static/media/KaTeX_Fraktur-Bold.0e5b99ca96d68358cdbbf0eb132e0bf3.woff) format("woff"), url(/_next/static/media/KaTeX_Fraktur-Bold.459e524c11f9d9848bd73bfffdc62077.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Fraktur;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Fraktur-Regular.77291f2c01508dbfa5a0e8fc8de4acb6.woff2) format("woff2"), url(/_next/static/media/KaTeX_Fraktur-Regular.a33d4c9142212ef3479287135a87faac.woff) format("woff"), url(/_next/static/media/KaTeX_Fraktur-Regular.1b0be9b9502d481bf047c11fd3afce41.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Main;

    font-style: normal;

    font-weight: 700;

    src: url(/_next/static/media/KaTeX_Main-Bold.fc4e48b59849688ac61c0d6daa6c3894.woff2) format("woff2"), url(/_next/static/media/KaTeX_Main-Bold.e8c40ca220bf98110e3d2a9bccc040b4.woff) format("woff"), url(/_next/static/media/KaTeX_Main-Bold.c0ad9a0fcd3872a71585a52543d02054.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Main;

    font-style: italic;

    font-weight: 700;

    src: url(/_next/static/media/KaTeX_Main-BoldItalic.7e6803e0645cc02029a2b4b9b5c12dd0.woff2) format("woff2"), url(/_next/static/media/KaTeX_Main-BoldItalic.4e9fb7097be319b4a3a323dca0626460.woff) format("woff"), url(/_next/static/media/KaTeX_Main-BoldItalic.8b9b3524a9cd80e00610682ca9d48b7a.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Main;

    font-style: italic;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Main-Italic.83915f6ea43188e031f15a41a2a13d0e.woff2) format("woff2"), url(/_next/static/media/KaTeX_Main-Italic.993cef711838adabce3a8b5b1c4a1901.woff) format("woff"), url(/_next/static/media/KaTeX_Main-Italic.7712cfa8ed8093a0c556b7ff8abf14f9.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Main;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Main-Regular.6f4b7338e13e491465211e73cc3d9ab2.woff2) format("woff2"), url(/_next/static/media/KaTeX_Main-Regular.3402ceebbaf069244380e282045d5615.woff) format("woff"), url(/_next/static/media/KaTeX_Main-Regular.9f78515e97ad0ff068507c103e83409d.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Math;

    font-style: italic;

    font-weight: 700;

    src: url(/_next/static/media/KaTeX_Math-BoldItalic.2ffefb11f0c8412c11682bd0e1413b69.woff2) format("woff2"), url(/_next/static/media/KaTeX_Math-BoldItalic.1d2e94d7e1264031867f942653f8139a.woff) format("woff"), url(/_next/static/media/KaTeX_Math-BoldItalic.4ad93799ba7ea7199a6f27826a40b061.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Math;

    font-style: italic;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Math-Italic.f9f7662953c4ef2ee65e1f3a935f9017.woff2) format("woff2"), url(/_next/static/media/KaTeX_Math-Italic.23820bbae1b543ae8cb70fe44d40809f.woff) format("woff"), url(/_next/static/media/KaTeX_Math-Italic.ac5aad6c4efef1a3d20b75397b7e6218.ttf) format("truetype")

}

@font-face {

    font-family: "KaTeX_SansSerif";

    font-style: normal;

    font-weight: 700;

    src: url(/_next/static/media/KaTeX_SansSerif-Bold.2bd0c2b5932c7e74bc69ff108c7746e3.woff2) format("woff2"), url(/_next/static/media/KaTeX_SansSerif-Bold.31faa94a6e7e3e4dc3a777c1244a3d0b.woff) format("woff"), url(/_next/static/media/KaTeX_SansSerif-Bold.04adc05e48582c893f35f05dfdc35cbc.ttf) format("truetype")

}

@font-face {

    font-family: "KaTeX_SansSerif";

    font-style: italic;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_SansSerif-Italic.fd4eccab43b2f46bac37538fc682154d.woff2) format("woff2"), url(/_next/static/media/KaTeX_SansSerif-Italic.374a109b61e7c419be444a6ad27c8f8c.woff) format("woff"), url(/_next/static/media/KaTeX_SansSerif-Italic.775f93f04f3a0bdcfecbc62e733847f1.ttf) format("truetype")

}

@font-face {

    font-family: "KaTeX_SansSerif";

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_SansSerif-Regular.7c3661bed01acdb90f0d0d6e8c2af175.woff2) format("woff2"), url(/_next/static/media/KaTeX_SansSerif-Regular.8f5c4dcd24a0f3aa86380f0b3562eccd.woff) format("woff"), url(/_next/static/media/KaTeX_SansSerif-Regular.1e909f1c2ba50ad8581dc75d86559eda.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Script;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Script-Regular.3c431f15b18a392c1711d7de01edf4f3.woff2) format("woff2"), url(/_next/static/media/KaTeX_Script-Regular.8cb4c7b5986d922a2dcdb6599a6106a9.woff) format("woff"), url(/_next/static/media/KaTeX_Script-Regular.36d2c2a98402f4c0cb1029a69f2b9806.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Size1;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Size1-Regular.b3e926468f875c4b6a966d901c879696.woff2) format("woff2"), url(/_next/static/media/KaTeX_Size1-Regular.b609c3dc1fbbb105ce2856c03d8db6e1.woff) format("woff"), url(/_next/static/media/KaTeX_Size1-Regular.70d540a088e8e125414815b6afda0e3d.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Size2;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Size2-Regular.a4aae3d505525c8eb88b9158c4649a7b.woff2) format("woff2"), url(/_next/static/media/KaTeX_Size2-Regular.ca8ea1e72772a43ae46c4f7fb986b1fa.woff) format("woff"), url(/_next/static/media/KaTeX_Size2-Regular.7534552259d59c1cba3e86a3c774b8e8.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Size3;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Size3-Regular.08fca0137fd475f7852ab73e275e2208.woff2) format("woff2"), url(/_next/static/media/KaTeX_Size3-Regular.cddcf234909da33bbfc0c37ecd11f60f.woff) format("woff"), url(/_next/static/media/KaTeX_Size3-Regular.c7977d0148e0d53d73a8adda49f2fd8e.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Size4;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Size4-Regular.1b0cff973201019de91c24530ab219c3.woff2) format("woff2"), url(/_next/static/media/KaTeX_Size4-Regular.e84eaeda24afadafd7b6e246209d7a05.woff) format("woff"), url(/_next/static/media/KaTeX_Size4-Regular.f93eac2f0543333d30a6abf9262ec864.ttf) format("truetype")

}

@font-face {

    font-family: KaTeX_Typewriter;

    font-style: normal;

    font-weight: 400;

    src: url(/_next/static/media/KaTeX_Typewriter-Regular.209b10f4e35040ca859c96177c458cc6.woff2) format("woff2"), url(/_next/static/media/KaTeX_Typewriter-Regular.b6a56b14d09ea3eb5f01e0bbd2b20101.woff) format("woff"), url(/_next/static/media/KaTeX_Typewriter-Regular.834915271cbece10d426ea41e479cfff.ttf) format("truetype")

}

.katex {

    text-rendering: auto;

    font: normal 1.21em KaTeX_Main, Times New Roman, serif;

    line-height: 1.2;

    text-indent: 0

}

.katex * {

    -ms-high-contrast-adjust: none !important;

    border-color: currentColor

}

.katex .katex-version:after {

    content: "0.13.13"

}

.katex .katex-mathml {

    clip: rect(1px, 1px, 1px, 1px);

    border: 0;

    height: 1px;

    overflow: hidden;

    padding: 0;

    position: absolute;

    width: 1px

}

.katex .katex-html>.newline {

    display: block

}

.katex .base {

    position: relative;

    white-space: nowrap;

    width: -moz-min-content;

    width: min-content

}

.katex .base,

.katex .strut {

    display: inline-block

}

.katex .textbf {

    font-weight: 700

}

.katex .textit {

    font-style: italic

}

.katex .textrm {

    font-family: KaTeX_Main

}

.katex .textsf {

    font-family: KaTeX_SansSerif

}

.katex .texttt {

    font-family: KaTeX_Typewriter

}

.katex .mathnormal {

    font-family: KaTeX_Math;

    font-style: italic

}

.katex .mathit {

    font-family: KaTeX_Main;

    font-style: italic

}

.katex .mathrm {

    font-style: normal

}

.katex .mathbf {

    font-family: KaTeX_Main;

    font-weight: 700

}

.katex .boldsymbol {

    font-family: KaTeX_Math;

    font-style: italic;

    font-weight: 700

}

.katex .amsrm,

.katex .mathbb,

.katex .textbb {

    font-family: KaTeX_AMS

}

.katex .mathcal {

    font-family: KaTeX_Caligraphic

}

.katex .mathfrak,

.katex .textfrak {

    font-family: KaTeX_Fraktur

}

.katex .mathtt {

    font-family: KaTeX_Typewriter

}

.katex .mathscr,

.katex .textscr {

    font-family: KaTeX_Script

}

.katex .mathsf,

.katex .textsf {

    font-family: KaTeX_SansSerif

}

.katex .mathboldsf,

.katex .textboldsf {

    font-family: KaTeX_SansSerif;

    font-weight: 700

}

.katex .mathitsf,

.katex .textitsf {

    font-family: KaTeX_SansSerif;

    font-style: italic

}

.katex .mainrm {

    font-family: KaTeX_Main;

    font-style: normal

}

.katex .vlist-t {

    border-collapse: collapse;

    display: inline-table;

    table-layout: fixed

}

.katex .vlist-r {

    display: table-row

}

.katex .vlist {

    display: table-cell;

    position: relative;

    vertical-align: bottom

}

.katex .vlist>span {

    display: block;

    height: 0;

    position: relative

}

.katex .vlist>span>span {

    display: inline-block

}

.katex .vlist>span>.pstrut {

    overflow: hidden;

    width: 0

}

.katex .vlist-t2 {

    margin-right: -2px

}

.katex .vlist-s {

    display: table-cell;

    font-size: 1px;

    min-width: 2px;

    vertical-align: bottom;

    width: 2px

}

.katex .vbox {

    -moz-box-align: baseline;

    align-items: baseline;

    display: -moz-inline-box;

    display: inline-flex;

    -moz-box-orient: vertical;

    -moz-box-direction: normal;

    flex-direction: column

}

.katex .hbox {

    width: 100%

}

.katex .hbox,

.katex .thinbox {

    display: -moz-inline-box;

    display: inline-flex;

    -moz-box-orient: horizontal;

    -moz-box-direction: normal;

    flex-direction: row

}

.katex .thinbox {

    max-width: 0;

    width: 0

}

.katex .msupsub {

    text-align: left

}

.katex .mfrac>span>span {

    text-align: center

}

.katex .mfrac .frac-line {

    border-bottom-style: solid;

    display: inline-block;

    width: 100%

}

.katex .hdashline,

.katex .hline,

.katex .mfrac .frac-line,

.katex .overline .overline-line,

.katex .rule,

.katex .underline .underline-line {

    min-height: 1px

}

.katex .mspace {

    display: inline-block

}

.katex .clap,

.katex .llap,

.katex .rlap {

    position: relative;

    width: 0

}

.katex .clap>.inner,

.katex .llap>.inner,

.katex .rlap>.inner {

    position: absolute

}

.katex .clap>.fix,

.katex .llap>.fix,

.katex .rlap>.fix {

    display: inline-block

}

.katex .llap>.inner {

    right: 0

}

.katex .clap>.inner,

.katex .rlap>.inner {

    left: 0

}

.katex .clap>.inner>span {

    margin-left: -50%;

    margin-right: 50%

}

.katex .rule {

    border: 0 solid;

    display: inline-block;

    position: relative

}

.katex .hline,

.katex .overline .overline-line,

.katex .underline .underline-line {

    border-bottom-style: solid;

    display: inline-block;

    width: 100%

}

.katex .hdashline {

    border-bottom-style: dashed;

    display: inline-block;

    width: 100%

}

.katex .sqrt>.root {

    margin-left: .27777778em;

    margin-right: -.55555556em

}

.katex .fontsize-ensurer.reset-size1.size1,

.katex .sizing.reset-size1.size1 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size1.size2,

.katex .sizing.reset-size1.size2 {

    font-size: 1.2em

}

.katex .fontsize-ensurer.reset-size1.size3,

.katex .sizing.reset-size1.size3 {

    font-size: 1.4em

}

.katex .fontsize-ensurer.reset-size1.size4,

.katex .sizing.reset-size1.size4 {

    font-size: 1.6em

}

.katex .fontsize-ensurer.reset-size1.size5,

.katex .sizing.reset-size1.size5 {

    font-size: 1.8em

}

.katex .fontsize-ensurer.reset-size1.size6,

.katex .sizing.reset-size1.size6 {

    font-size: 2em

}

.katex .fontsize-ensurer.reset-size1.size7,

.katex .sizing.reset-size1.size7 {

    font-size: 2.4em

}

.katex .fontsize-ensurer.reset-size1.size8,

.katex .sizing.reset-size1.size8 {

    font-size: 2.88em

}

.katex .fontsize-ensurer.reset-size1.size9,

.katex .sizing.reset-size1.size9 {

    font-size: 3.456em

}

.katex .fontsize-ensurer.reset-size1.size10,

.katex .sizing.reset-size1.size10 {

    font-size: 4.148em

}

.katex .fontsize-ensurer.reset-size1.size11,

.katex .sizing.reset-size1.size11 {

    font-size: 4.976em

}

.katex .fontsize-ensurer.reset-size2.size1,

.katex .sizing.reset-size2.size1 {

    font-size: .83333333em

}

.katex .fontsize-ensurer.reset-size2.size2,

.katex .sizing.reset-size2.size2 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size2.size3,

.katex .sizing.reset-size2.size3 {

    font-size: 1.16666667em

}

.katex .fontsize-ensurer.reset-size2.size4,

.katex .sizing.reset-size2.size4 {

    font-size: 1.33333333em

}

.katex .fontsize-ensurer.reset-size2.size5,

.katex .sizing.reset-size2.size5 {

    font-size: 1.5em

}

.katex .fontsize-ensurer.reset-size2.size6,

.katex .sizing.reset-size2.size6 {

    font-size: 1.66666667em

}

.katex .fontsize-ensurer.reset-size2.size7,

.katex .sizing.reset-size2.size7 {

    font-size: 2em

}

.katex .fontsize-ensurer.reset-size2.size8,

.katex .sizing.reset-size2.size8 {

    font-size: 2.4em

}

.katex .fontsize-ensurer.reset-size2.size9,

.katex .sizing.reset-size2.size9 {

    font-size: 2.88em

}

.katex .fontsize-ensurer.reset-size2.size10,

.katex .sizing.reset-size2.size10 {

    font-size: 3.45666667em

}

.katex .fontsize-ensurer.reset-size2.size11,

.katex .sizing.reset-size2.size11 {

    font-size: 4.14666667em

}

.katex .fontsize-ensurer.reset-size3.size1,

.katex .sizing.reset-size3.size1 {

    font-size: .71428571em

}

.katex .fontsize-ensurer.reset-size3.size2,

.katex .sizing.reset-size3.size2 {

    font-size: .85714286em

}

.katex .fontsize-ensurer.reset-size3.size3,

.katex .sizing.reset-size3.size3 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size3.size4,

.katex .sizing.reset-size3.size4 {

    font-size: 1.14285714em

}

.katex .fontsize-ensurer.reset-size3.size5,

.katex .sizing.reset-size3.size5 {

    font-size: 1.28571429em

}

.katex .fontsize-ensurer.reset-size3.size6,

.katex .sizing.reset-size3.size6 {

    font-size: 1.42857143em

}

.katex .fontsize-ensurer.reset-size3.size7,

.katex .sizing.reset-size3.size7 {

    font-size: 1.71428571em

}

.katex .fontsize-ensurer.reset-size3.size8,

.katex .sizing.reset-size3.size8 {

    font-size: 2.05714286em

}

.katex .fontsize-ensurer.reset-size3.size9,

.katex .sizing.reset-size3.size9 {

    font-size: 2.46857143em

}

.katex .fontsize-ensurer.reset-size3.size10,

.katex .sizing.reset-size3.size10 {

    font-size: 2.96285714em

}

.katex .fontsize-ensurer.reset-size3.size11,

.katex .sizing.reset-size3.size11 {

    font-size: 3.55428571em

}

.katex .fontsize-ensurer.reset-size4.size1,

.katex .sizing.reset-size4.size1 {

    font-size: .625em

}

.katex .fontsize-ensurer.reset-size4.size2,

.katex .sizing.reset-size4.size2 {

    font-size: .75em

}

.katex .fontsize-ensurer.reset-size4.size3,

.katex .sizing.reset-size4.size3 {

    font-size: .875em

}

.katex .fontsize-ensurer.reset-size4.size4,

.katex .sizing.reset-size4.size4 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size4.size5,

.katex .sizing.reset-size4.size5 {

    font-size: 1.125em

}

.katex .fontsize-ensurer.reset-size4.size6,

.katex .sizing.reset-size4.size6 {

    font-size: 1.25em

}

.katex .fontsize-ensurer.reset-size4.size7,

.katex .sizing.reset-size4.size7 {

    font-size: 1.5em

}

.katex .fontsize-ensurer.reset-size4.size8,

.katex .sizing.reset-size4.size8 {

    font-size: 1.8em

}

.katex .fontsize-ensurer.reset-size4.size9,

.katex .sizing.reset-size4.size9 {

    font-size: 2.16em

}

.katex .fontsize-ensurer.reset-size4.size10,

.katex .sizing.reset-size4.size10 {

    font-size: 2.5925em

}

.katex .fontsize-ensurer.reset-size4.size11,

.katex .sizing.reset-size4.size11 {

    font-size: 3.11em

}

.katex .fontsize-ensurer.reset-size5.size1,

.katex .sizing.reset-size5.size1 {

    font-size: .55555556em

}

.katex .fontsize-ensurer.reset-size5.size2,

.katex .sizing.reset-size5.size2 {

    font-size: .66666667em

}

.katex .fontsize-ensurer.reset-size5.size3,

.katex .sizing.reset-size5.size3 {

    font-size: .77777778em

}

.katex .fontsize-ensurer.reset-size5.size4,

.katex .sizing.reset-size5.size4 {

    font-size: .88888889em

}

.katex .fontsize-ensurer.reset-size5.size5,

.katex .sizing.reset-size5.size5 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size5.size6,

.katex .sizing.reset-size5.size6 {

    font-size: 1.11111111em

}

.katex .fontsize-ensurer.reset-size5.size7,

.katex .sizing.reset-size5.size7 {

    font-size: 1.33333333em

}

.katex .fontsize-ensurer.reset-size5.size8,

.katex .sizing.reset-size5.size8 {

    font-size: 1.6em

}

.katex .fontsize-ensurer.reset-size5.size9,

.katex .sizing.reset-size5.size9 {

    font-size: 1.92em

}

.katex .fontsize-ensurer.reset-size5.size10,

.katex .sizing.reset-size5.size10 {

    font-size: 2.30444444em

}

.katex .fontsize-ensurer.reset-size5.size11,

.katex .sizing.reset-size5.size11 {

    font-size: 2.76444444em

}

.katex .fontsize-ensurer.reset-size6.size1,

.katex .sizing.reset-size6.size1 {

    font-size: .5em

}

.katex .fontsize-ensurer.reset-size6.size2,

.katex .sizing.reset-size6.size2 {

    font-size: .6em

}

.katex .fontsize-ensurer.reset-size6.size3,

.katex .sizing.reset-size6.size3 {

    font-size: .7em

}

.katex .fontsize-ensurer.reset-size6.size4,

.katex .sizing.reset-size6.size4 {

    font-size: .8em

}

.katex .fontsize-ensurer.reset-size6.size5,

.katex .sizing.reset-size6.size5 {

    font-size: .9em

}

.katex .fontsize-ensurer.reset-size6.size6,

.katex .sizing.reset-size6.size6 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size6.size7,

.katex .sizing.reset-size6.size7 {

    font-size: 1.2em

}

.katex .fontsize-ensurer.reset-size6.size8,

.katex .sizing.reset-size6.size8 {

    font-size: 1.44em

}

.katex .fontsize-ensurer.reset-size6.size9,

.katex .sizing.reset-size6.size9 {

    font-size: 1.728em

}

.katex .fontsize-ensurer.reset-size6.size10,

.katex .sizing.reset-size6.size10 {

    font-size: 2.074em

}

.katex .fontsize-ensurer.reset-size6.size11,

.katex .sizing.reset-size6.size11 {

    font-size: 2.488em

}

.katex .fontsize-ensurer.reset-size7.size1,

.katex .sizing.reset-size7.size1 {

    font-size: .41666667em

}

.katex .fontsize-ensurer.reset-size7.size2,

.katex .sizing.reset-size7.size2 {

    font-size: .5em

}

.katex .fontsize-ensurer.reset-size7.size3,

.katex .sizing.reset-size7.size3 {

    font-size: .58333333em

}

.katex .fontsize-ensurer.reset-size7.size4,

.katex .sizing.reset-size7.size4 {

    font-size: .66666667em

}

.katex .fontsize-ensurer.reset-size7.size5,

.katex .sizing.reset-size7.size5 {

    font-size: .75em

}

.katex .fontsize-ensurer.reset-size7.size6,

.katex .sizing.reset-size7.size6 {

    font-size: .83333333em

}

.katex .fontsize-ensurer.reset-size7.size7,

.katex .sizing.reset-size7.size7 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size7.size8,

.katex .sizing.reset-size7.size8 {

    font-size: 1.2em

}

.katex .fontsize-ensurer.reset-size7.size9,

.katex .sizing.reset-size7.size9 {

    font-size: 1.44em

}

.katex .fontsize-ensurer.reset-size7.size10,

.katex .sizing.reset-size7.size10 {

    font-size: 1.72833333em

}

.katex .fontsize-ensurer.reset-size7.size11,

.katex .sizing.reset-size7.size11 {

    font-size: 2.07333333em

}

.katex .fontsize-ensurer.reset-size8.size1,

.katex .sizing.reset-size8.size1 {

    font-size: .34722222em

}

.katex .fontsize-ensurer.reset-size8.size2,

.katex .sizing.reset-size8.size2 {

    font-size: .41666667em

}

.katex .fontsize-ensurer.reset-size8.size3,

.katex .sizing.reset-size8.size3 {

    font-size: .48611111em

}

.katex .fontsize-ensurer.reset-size8.size4,

.katex .sizing.reset-size8.size4 {

    font-size: .55555556em

}

.katex .fontsize-ensurer.reset-size8.size5,

.katex .sizing.reset-size8.size5 {

    font-size: .625em

}

.katex .fontsize-ensurer.reset-size8.size6,

.katex .sizing.reset-size8.size6 {

    font-size: .69444444em

}

.katex .fontsize-ensurer.reset-size8.size7,

.katex .sizing.reset-size8.size7 {

    font-size: .83333333em

}

.katex .fontsize-ensurer.reset-size8.size8,

.katex .sizing.reset-size8.size8 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size8.size9,

.katex .sizing.reset-size8.size9 {

    font-size: 1.2em

}

.katex .fontsize-ensurer.reset-size8.size10,

.katex .sizing.reset-size8.size10 {

    font-size: 1.44027778em

}

.katex .fontsize-ensurer.reset-size8.size11,

.katex .sizing.reset-size8.size11 {

    font-size: 1.72777778em

}

.katex .fontsize-ensurer.reset-size9.size1,

.katex .sizing.reset-size9.size1 {

    font-size: .28935185em

}

.katex .fontsize-ensurer.reset-size9.size2,

.katex .sizing.reset-size9.size2 {

    font-size: .34722222em

}

.katex .fontsize-ensurer.reset-size9.size3,

.katex .sizing.reset-size9.size3 {

    font-size: .40509259em

}

.katex .fontsize-ensurer.reset-size9.size4,

.katex .sizing.reset-size9.size4 {

    font-size: .46296296em

}

.katex .fontsize-ensurer.reset-size9.size5,

.katex .sizing.reset-size9.size5 {

    font-size: .52083333em

}

.katex .fontsize-ensurer.reset-size9.size6,

.katex .sizing.reset-size9.size6 {

    font-size: .5787037em

}

.katex .fontsize-ensurer.reset-size9.size7,

.katex .sizing.reset-size9.size7 {

    font-size: .69444444em

}

.katex .fontsize-ensurer.reset-size9.size8,

.katex .sizing.reset-size9.size8 {

    font-size: .83333333em

}

.katex .fontsize-ensurer.reset-size9.size9,

.katex .sizing.reset-size9.size9 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size9.size10,

.katex .sizing.reset-size9.size10 {

    font-size: 1.20023148em

}

.katex .fontsize-ensurer.reset-size9.size11,

.katex .sizing.reset-size9.size11 {

    font-size: 1.43981481em

}

.katex .fontsize-ensurer.reset-size10.size1,

.katex .sizing.reset-size10.size1 {

    font-size: .24108004em

}

.katex .fontsize-ensurer.reset-size10.size2,

.katex .sizing.reset-size10.size2 {

    font-size: .28929605em

}

.katex .fontsize-ensurer.reset-size10.size3,

.katex .sizing.reset-size10.size3 {

    font-size: .33751205em

}

.katex .fontsize-ensurer.reset-size10.size4,

.katex .sizing.reset-size10.size4 {

    font-size: .38572806em

}

.katex .fontsize-ensurer.reset-size10.size5,

.katex .sizing.reset-size10.size5 {

    font-size: .43394407em

}

.katex .fontsize-ensurer.reset-size10.size6,

.katex .sizing.reset-size10.size6 {

    font-size: .48216008em

}

.katex .fontsize-ensurer.reset-size10.size7,

.katex .sizing.reset-size10.size7 {

    font-size: .57859209em

}

.katex .fontsize-ensurer.reset-size10.size8,

.katex .sizing.reset-size10.size8 {

    font-size: .69431051em

}

.katex .fontsize-ensurer.reset-size10.size9,

.katex .sizing.reset-size10.size9 {

    font-size: .83317261em

}

.katex .fontsize-ensurer.reset-size10.size10,

.katex .sizing.reset-size10.size10 {

    font-size: 1em

}

.katex .fontsize-ensurer.reset-size10.size11,

.katex .sizing.reset-size10.size11 {

    font-size: 1.19961427em

}

.katex .fontsize-ensurer.reset-size11.size1,

.katex .sizing.reset-size11.size1 {

    font-size: .20096463em

}

.katex .fontsize-ensurer.reset-size11.size2,

.katex .sizing.reset-size11.size2 {

    font-size: .24115756em

}

.katex .fontsize-ensurer.reset-size11.size3,

.katex .sizing.reset-size11.size3 {

    font-size: .28135048em

}

.katex .fontsize-ensurer.reset-size11.size4,

.katex .sizing.reset-size11.size4 {

    font-size: .32154341em

}

.katex .fontsize-ensurer.reset-size11.size5,

.katex .sizing.reset-size11.size5 {

    font-size: .36173633em

}

.katex .fontsize-ensurer.reset-size11.size6,

.katex .sizing.reset-size11.size6 {

    font-size: .40192926em

}

.katex .fontsize-ensurer.reset-size11.size7,

.katex .sizing.reset-size11.size7 {

    font-size: .48231511em

}

.katex .fontsize-ensurer.reset-size11.size8,

.katex .sizing.reset-size11.size8 {

    font-size: .57877814em

}

.katex .fontsize-ensurer.reset-size11.size9,

.katex .sizing.reset-size11.size9 {

    font-size: .69453376em

}

.katex .fontsize-ensurer.reset-size11.size10,

.katex .sizing.reset-size11.size10 {

    font-size: .83360129em

}

.katex .fontsize-ensurer.reset-size11.size11,

.katex .sizing.reset-size11.size11 {

    font-size: 1em

}

.katex .delimsizing.size1 {

    font-family: KaTeX_Size1

}

.katex .delimsizing.size2 {

    font-family: KaTeX_Size2

}

.katex .delimsizing.size3 {

    font-family: KaTeX_Size3

}

.katex .delimsizing.size4 {

    font-family: KaTeX_Size4

}

.katex .delimsizing.mult .delim-size1>span {

    font-family: KaTeX_Size1

}

.katex .delimsizing.mult .delim-size4>span {

    font-family: KaTeX_Size4

}

.katex .nulldelimiter {

    display: inline-block;

    width: .12em

}

.katex .delimcenter,

.katex .op-symbol {

    position: relative

}

.katex .op-symbol.small-op {

    font-family: KaTeX_Size1

}

.katex .op-symbol.large-op {

    font-family: KaTeX_Size2

}

.katex .accent>.vlist-t,

.katex .op-limits>.vlist-t {

    text-align: center

}

.katex .accent .accent-body {

    position: relative

}

.katex .accent .accent-body:not(.accent-full) {

    width: 0

}

.katex .overlay {

    display: block

}

.katex .mtable .vertical-separator {

    display: inline-block;

    min-width: 1px

}

.katex .mtable .arraycolsep {

    display: inline-block

}

.katex .mtable .col-align-c>.vlist-t {

    text-align: center

}

.katex .mtable .col-align-l>.vlist-t {

    text-align: left

}

.katex .mtable .col-align-r>.vlist-t {

    text-align: right

}

.katex .svg-align {

    text-align: left

}

.katex svg {

    fill: currentColor;

    stroke: currentColor;

    fill-rule: nonzero;

    fill-opacity: 1;

    stroke-width: 1;

    stroke-linecap: butt;

    stroke-linejoin: miter;

    stroke-miterlimit: 4;

    stroke-dasharray: none;

    stroke-dashoffset: 0;

    stroke-opacity: 1;

    display: block;

    height: inherit;

    position: absolute;

    width: 100%

}

.katex svg path {

    stroke: none

}

.katex img {

    border-style: none;

    max-height: none;

    max-width: none;

    min-height: 0;

    min-width: 0

}

.katex .stretchy {

    display: block;

    overflow: hidden;

    position: relative;

    width: 100%

}

.katex .stretchy:after,

.katex .stretchy:before {

    content: ""

}

.katex .hide-tail {

    overflow: hidden;

    position: relative;

    width: 100%

}

.katex .halfarrow-left {

    left: 0;

    overflow: hidden;

    position: absolute;

    width: 50.2%

}

.katex .halfarrow-right {

    overflow: hidden;

    position: absolute;

    right: 0;

    width: 50.2%

}

.katex .brace-left {

    left: 0;

    overflow: hidden;

    position: absolute;

    width: 25.1%

}

.katex .brace-center {

    left: 25%;

    overflow: hidden;

    position: absolute;

    width: 50%

}

.katex .brace-right {

    overflow: hidden;

    position: absolute;

    right: 0;

    width: 25.1%

}

.katex .x-arrow-pad {

    padding: 0 .5em

}

.katex .cd-arrow-pad {

    padding: 0 .55556em 0 .27778em

}

.katex .mover,

.katex .munder,

.katex .x-arrow {

    text-align: center

}

.katex .boxpad {

    padding: 0 .3em

}

.katex .fbox,

.katex .fcolorbox {

    border: .04em solid;

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box

}

.katex .cancel-pad {

    padding: 0 .2em

}

.katex .cancel-lap {

    margin-left: -.2em;

    margin-right: -.2em

}

.katex .sout {

    border-bottom-style: solid;

    border-bottom-width: .08em

}

.katex .angl {

    border-right: .049em solid;

    border-top: .049em solid;

    -webkit-box-sizing: border-box;

    -moz-box-sizing: border-box;

    box-sizing: border-box;

    margin-right: .03889em

}

.katex .anglpad {

    padding: 0 .03889em

}

.katex .eqn-num:before {

    content: "("counter(katexEqnNo) ")";

    counter-increment: katexEqnNo

}

.katex .mml-eqn-num:before {

    content: "("counter(mmlEqnNo) ")";

    counter-increment: mmlEqnNo

}

.katex .mtr-glue {

    width: 50%

}

.katex .cd-vert-arrow {

    display: inline-block;

    position: relative

}

.katex .cd-label-left {

    display: inline-block;

    position: absolute;

    right: -moz-calc(50% + .3em);

    right: calc(50% + .3em);

    text-align: left

}

.katex .cd-label-right {

    display: inline-block;

    left: -moz-calc(50% + .3em);

    left: calc(50% + .3em);

    position: absolute;

    text-align: right

}

.katex-display {

    display: block;

    margin: 1em 0;

    text-align: center

}

.katex-display>.katex {

    display: block;

    text-align: center;

    white-space: nowrap

}

.katex-display>.katex>.katex-html {

    display: block;

    position: relative

}

.katex-display>.katex>.katex-html>.tag {

    position: absolute;

    right: 0

}

.katex-display.leqno>.katex>.katex-html>.tag {

    left: 0;

    right: auto

}

.katex-display.fleqn>.katex {

    padding-left: 2em;

    text-align: left

}

body {

    counter-reset: katexEqnNo mmlEqnNo

}