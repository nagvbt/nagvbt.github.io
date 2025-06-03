import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

// Publication Slideshow Component
export default function BookCard({ publications: data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.slideshowContainer}>
      <div className={styles.slideshowHeader}>
        <h2 className={styles.slideshowTitle}>
          <span className={styles.slideshowIcon}>📚</span> PUBLICATIONS
        </h2>
      </div>

      <div className={styles.slideshowWrapper}>
        <button
          className={`${styles.slideshowButton} ${styles.prevButton}`}
          onClick={goToPrevious}
          aria-label="Previous publication"
        >
          ❮
        </button>

        <div className={styles.slideshow}>
          {data.map((publication, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentIndex ? styles.activeSlide : ''}`}
              style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
            >
              <div className={styles.publicationCard}>
                <div className={styles.publicationNumber}>
                  Publication {index + 1} of {data.length}
                </div>
                <div className={styles.publicationText}>{publication}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`${styles.slideshowButton} ${styles.nextButton}`}
          onClick={goToNext}
          aria-label="Next publication"
        >
          ❯
        </button>
      </div>

      <div className={styles.slideshowIndicators}>
        {data.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to publication ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
