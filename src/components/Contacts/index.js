import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {BsEnvelopeFill} from 'react-icons/bs'
import './index.css'

const Contacts = () => (
  <>
    <div className="container">
      <div className="contact-container">
        <AiFillInstagram className="icon" />
        <FaLinkedin className="icon" />
        <BsEnvelopeFill className="icon" />
      </div>
      <span>Copyright © 2024. All rights reserved</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1436"
        height="112"
        viewBox="0 0 1436 112"
        fill="none"
      >
        <path
          d="M0 83.9182L59.8333 74.594C119.667 65.2697 239.333 46.6212 359 48.9523C478.667 51.2833 598.333 74.594 718 74.594C837.667 74.594 957.333 51.2833 1077 34.9659C1196.67 18.6485 1316.33 9.32425 1376.17 4.66212L1436 0V111.891H1376.17C1316.33 111.891 1196.67 111.891 1077 111.891C957.333 111.891 837.667 111.891 718 111.891C598.333 111.891 478.667 111.891 359 111.891C239.333 111.891 119.667 111.891 59.8333 111.891H0V83.9182Z"
          fill="#FDC435"
        />
      </svg>
    </div>
  </>
)

export default Contacts
