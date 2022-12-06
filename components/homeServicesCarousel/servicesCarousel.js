import React from "react";
import CarouselCard from "./carouselCard";
import styles from "../../styles/servicesCarousel.module.css";

export default function ServicesCarousel() {
  return (
    <section className={styles.carousel_container}>
      <CarouselCard
        href="/services/templefillers"
        src="/templeFillers.png"
        alt="Temple Fillers"
        title="Temple Fillers"
        desc="As we age, our natural production of collagen, elastin and hyaluronic acid decreases. Whilst not problematic for our health, this can take a toll on our appearance. The decline in these substances can lead to ‘hollows’ around our temples. This ages us and can make the face appear unbalanced. Exercising regularly and eating well is good for your overall health as well as, generally speaking, your appearance. However, these things can actually exacerbate the hollowing of your temple region… which is entirely unfair! If you are finding this area problematic, you can book in for a consultation with our friendly, qualified and experienced clinicians today! We will have you feeling confident and looking your best in no time at all!"
      />
    </section>
  );
}
