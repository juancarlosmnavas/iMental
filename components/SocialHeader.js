import styles from 'public/SocialHeader.module.css'

const SocialHeader = () => {
  return (
    <div className={styles.socialHeader}>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
      </div>
    </div>
  )
}

export default SocialHeader
