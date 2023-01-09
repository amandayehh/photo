exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/album/album.js":
/*!***************************************!*\
  !*** ./src/components/album/album.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album.css */ "./src/components/album/album.css");
/* harmony import */ var _album_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_album_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_3__);




let hover = false;
class Album extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    this.timer = null;
    this.shuffle = this.shuffle.bind(this);
    this.stopShuffle = this.stopShuffle.bind(this);
  }
  shuffle(e) {
    var nodes = document.getElementById(e.currentTarget.id).childNodes;
    var imgN = 0;
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
      nodes[imgN].style.zIndex = this.state.count;
      imgN++;
      if (imgN >= nodes.length) {
        imgN = 0;
      }
    }, 200);
  }
  stopShuffle() {
    clearInterval(this.interval);
    this.setState({
      count: 1
    });
  }
  generateImgs() {
    const imgs = [];
    for (let i = 0; i < this.props.imgs.length; i++) {
      imgs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("img", {
        className: this.props.class[i],
        src: this.props.imgs[i],
        alt: this.props.alt,
        style: {
          zIndex: {
            i
          }
        },
        key: i
      }));
    }
    return imgs;
  }
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: "album",
      id: "album1",
      onMouseOver: this.shuffle,
      onMouseOut: this.stopShuffle
    }, this.generateImgs());
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Album);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


function Seo({
  description,
  title,
  children
}) {
  var _site$siteMetadata, _site$siteMetadata2;
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_album_album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/album/album */ "./src/components/album/album.js");
/* harmony import */ var _images_album_1_IMG_0559_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/album-1/IMG_0559.png */ "./src/images/album-1/IMG_0559.png");
/* harmony import */ var _images_album_1_IMG_0936_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/album-1/IMG_0936.png */ "./src/images/album-1/IMG_0936.png");
/* harmony import */ var _images_album_1_IMG_2432_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/album-1/IMG_2432.png */ "./src/images/album-1/IMG_2432.png");
/* harmony import */ var _images_album_1_IMG_0940_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/album-1/IMG_0940.png */ "./src/images/album-1/IMG_0940.png");
/* harmony import */ var _images_album_1_IMG_6873_fig_min_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/album-1/IMG_6873-fig-min.png */ "./src/images/album-1/IMG_6873-fig-min.png");








//const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`






const album1 = [_images_album_1_IMG_2432_png__WEBPACK_IMPORTED_MODULE_8__["default"], _images_album_1_IMG_0559_png__WEBPACK_IMPORTED_MODULE_6__["default"], _images_album_1_IMG_0936_png__WEBPACK_IMPORTED_MODULE_7__["default"], _images_album_1_IMG_0940_png__WEBPACK_IMPORTED_MODULE_9__["default"], album1_img4, _images_album_1_IMG_6873_fig_min_png__WEBPACK_IMPORTED_MODULE_10__["default"]];
const ratio = ["square", "landscape", "portrait", "portrait", "portrait", "portrait"];
const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "hello world"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_album_album__WEBPACK_IMPORTED_MODULE_5__["default"], {
  imgs: album1,
  image: _images_album_1_IMG_0559_png__WEBPACK_IMPORTED_MODULE_6__["default"],
  alt: "sunset",
  class: ratio
}));

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Home"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/components/album/album.css":
/*!****************************************!*\
  !*** ./src/components/album/album.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/album-1/IMG_0559.png":
/*!*****************************************!*\
  !*** ./src/images/album-1/IMG_0559.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/IMG_0559-265720488bbbfdadcccb85f351c82502.png");

/***/ }),

/***/ "./src/images/album-1/IMG_0936.png":
/*!*****************************************!*\
  !*** ./src/images/album-1/IMG_0936.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/IMG_0936-ab8bfc6bdba2d60f0402805d51d85564.png");

/***/ }),

/***/ "./src/images/album-1/IMG_0940.png":
/*!*****************************************!*\
  !*** ./src/images/album-1/IMG_0940.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/IMG_0940-9e72125ada8b107ca8eff782f7798b72.png");

/***/ }),

/***/ "./src/images/album-1/IMG_2432.png":
/*!*****************************************!*\
  !*** ./src/images/album-1/IMG_2432.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/IMG_2432-56071a6d9ff44b26593d403c09bacffc.png");

/***/ }),

/***/ "./src/images/album-1/IMG_6873-fig-min.png":
/*!*************************************************!*\
  !*** ./src/images/album-1/IMG_6873-fig-min.png ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/IMG_6873-fig-min-72464607d448d413b2701be0d6364f54.png");

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map