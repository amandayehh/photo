import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import "../css/reset.css"
import "../css/index.css"

import Album from "../components/album/album"


//const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

import album1_img1 from "../images/album-1/IMG_0559.png"
import album1_img2 from "../images/album-1/IMG_0936.png"
import album1_img3 from "../images/album-1/IMG_2432.png"
import album1_img5 from "../images/album-1/IMG_0940.png"
import album1_img7 from "../images/album-1/IMG_6873-fig-min.png"
import album1_img8 from "../images/album-1/IMG_0573 1-min.png"
import album1_img9 from "../images/album-1/IMG_0906-min.png"

import album2_img1 from "../images/album-2/IMG_7936 1-min.png"
import album2_img2 from "../images/album-2/IMG_3416-min.png"
import album2_img3 from "../images/album-2/IMG_2941-min.png"
import album2_img4 from "../images/album-2/IMG_3409-min.png"


const set1 = [[album1_img8, "square"], [album1_img2, "portrait"], [album1_img9, "landscape"], [album1_img5, "portrait"], [album1_img3, "square"], [album1_img1, "landscape"], [album1_img7, "portrait"]]


const set2 = [[album2_img1, "square"], [album2_img2, "landscape"], [album2_img3, "portrait"], [album2_img4, "portrait"]]

const IndexPage = () => (

  <div>
    <h1>hello world</h1>
    <div className="index__albums">
      <Album set={set1} identity={"album1"} alt="sunset" />
      <Album set={set2} identity={"album2"} alt="building" />
    </div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
