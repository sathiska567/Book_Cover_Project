import React from 'react'
import authorStyles from "./Author.module.css";
const Author = () => {
    return (
      <div className={authorStyles.authorContainer}>
        <div className={authorStyles.authorDescription}>
          <p>
            Welcome to the whimsical world of Roxane Jett, where the magic of
            storytelling meets the boundless imagination of young minds. As a
            children's story writer, I am on a joyous mission to create tales
            that not only entertain but also inspire and uplift
          </p>
          <h4>Biography </h4>
          <p>
            I am Roxane Jett, a storyteller guided by faith and fueled by the
            warmth of family. My journey into the enchanting realm of children's
            literature was sparked by a profound belief in the power of positive
            change. Inspired by the Change Agent and the Rising Leader program,
            I set out to make a positive impact on the world, one person at a
            time.
          </p>
          <h4>My Achievements </h4>
          <p>
            While I am a newcomer to the literary scene, my dedication to
            instilling hope and joy in the hearts of children has not gone
            unnoticed. Participating in the Change Agent and the Rising Leader
            program has been instrumental in shaping my narrative approach. My
            aspiration is to contribute to a brighter, happier world, one person
            at a time.
          </p>
          <h4>Passion for Writing </h4>
          <p>
            Dive into the magical tales of Roxane Jett, where stories sparkle
            with joy, curiosity, and the belief that goodness fills every page.
            Join me on an adventure, where fun meets inspiration, and let's
            embark on a journey of smiles, laughter, and dreams that twinkle
            like stars in the night sky!
          </p>
        </div>
        <div className={authorStyles.authorImage}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectPosition: "center",
              background: "white",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            }}
            src="/public/d.jpg"
            alt="request"
          />
        </div>
      </div>
    );
}
export default Author
