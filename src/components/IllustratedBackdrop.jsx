import lineArt from '../assets/maharashtrian-line-art.svg'
import leavesArt from '../assets/leaves-spices-line-art.svg'
import utensilsArt from '../assets/utensils-line-art.svg'
import thaliArt from '../assets/thali-pot-line-art.svg'

const backdropAssets = { default: lineArt, people: lineArt, leaves: leavesArt, utensils: utensilsArt, thali: thaliArt }

function IllustratedBackdrop({ variant = 'default', asset = 'default' }) {
  return <div className={`illustrated-backdrop illustrated-backdrop-${variant}`} aria-hidden="true" style={{ backgroundImage: `url(${backdropAssets[asset] || lineArt})` }} />
}

export default IllustratedBackdrop
