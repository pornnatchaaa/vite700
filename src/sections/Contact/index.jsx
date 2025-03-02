import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
const Contact = () => {
    return(
<div className='flex items-end gap-4 text-2xl'>
        <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all' icon={faGithub}/>
        <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all'  icon={faMedium}/>
        <FontAwesomeIcon className='hover:scale-125 hover:text-primaryTitle transition-all'  icon={faLinkedin}/>     
    </div>
    )
}

export default Contact;