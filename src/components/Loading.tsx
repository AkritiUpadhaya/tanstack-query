import loadingImage from '../assets/loading.png'

export default function Loading() {
  return (
    <div style={{ height:50, display:'flex', justifyContent:'center', alignContent:'center'}}><img src={loadingImage} alt="photo" /></div>
  )
}
