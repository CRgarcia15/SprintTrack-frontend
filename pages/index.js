import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome to SprintTrack</h1>
        <h3>Where you can keep track of any project you can come up with.</h3>

        <p>If you have an account with us please login. If you don't have an account with us, please make one to start tracking your projects.</p>
        <a href="/login" className="loginRedirect">login</a>
        <a href="/signup" className="signUpRedirect">Sing up</a>
      </div>
      
    </div>
  )
}
