import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>色々やってみる</h1>
      </div>
    </>
  )
}
