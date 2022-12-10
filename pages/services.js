import React from 'react'
import Head from 'next/head'
import NavBar from '../components/navBar/NavBar'
import PageHeader from '../components/pageHeader/pageHeader'
import styles from '../styles/allServicesPage.module.css'
import CarouselCard from '../components/homeServicesCarousel/carouselCard'

export default function ServicesPage() {
  return (
      <section>
    <Head>
        <title>Services - RI Aesthetics</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/logo1.png" />
      </Head>
     

      <NavBar />

      <PageHeader 
      title="Services" 
      src="/welcome_4.png" />
    <section className={styles.all_services_con}>
    
    <CarouselCard
        className={styles.card}
        href="/services/temple-fillers"
        src="/templeFillers.png"
        alt="Temple Fillers"
        title="Temple Fillers"
        desc="As we age, our natural production of collagen, elastin and hyaluronic acid decreases. Whilst not problematic for our health, this can take a toll on our appearance. The decline in these substances can lead to ‘hollows’ around our temples. This ages us and can make the face appear unbalanced. Exercising regularly and eating well is good for your overall health as well as, generally speaking, your appearance. However, these things can actually exacerbate the hollowing of your temple region… which is entirely unfair! If you are finding this area problematic, you can book in for a consultation with our friendly, qualified and experienced clinicians today! We will have you feeling confident and looking your best in no time at all!"
      />
     

      <CarouselCard
        className={styles.card}
        href="/services/sclerotherapy"
        src="/spiderVeins.png"
        alt="Sclerotherapy"
        title="Sclerotherapy"
        desc="Spider veins are red, blue or purple veins that have become visible under the skin. Varicose veins differ in that they are usually blue, are thicker than spider veins and sometimes appear to ‘bulge’.

        Whilst not physically harmful, these imperfections can leave us feeling self-conscious. If the appearance of spider veins and/or varicose veins is preventing you from showing off your legs, this is the perfect treatment for you!

        Sclerotherapy is a great way to get rid of spider veins quickly and safely. Read on to explore our most frequently asked questions about the procedure."
      />

      <CarouselCard
        className={styles.card}
        href="/services/profhilo"
        src="/profhilo.png"
        alt="Profhilo®"
        title="Profhilo®"
        desc="Profhilo® is a revolutionary treatment that utilises hyaluronic acid to improve skin tone, texture, hydration and overall radiance.

        Hyaluronic acid is a naturally produced substance famous for its ability to hold over 1000 times its weight in water. This means plump, moisturised and glowing skin!

        Profhilo® also helps to stimulate the production of collagen and elastin. These two substances are integral to the skin maintaining its elasticity, which stops you from getting fine lines and wrinkles.

        Book in for your first treatment today and correct the imperfections created by smoking, poor diet and the ageing process.  "
      />

      <CarouselCard
        className={styles.card}
        href="/services/loub-job"
        src="/loub.png"
        alt="Loub Job"
        title="Loub Job"
        desc="Have you ever heard of a ‘Loub Job’ before? If you are a fan of wearing high heels, then you definitely need to learn about this helpful, safe and innovative treatment.

        Wearing heels puts extra pressure on the balls of your feet. These shoes may look fabulous, but can leave you in pain. Metatarsalgia is the technical term for the condition that frequently wearing heels can result in. Its symptoms are aching, burning feet, as well as sore and tired legs. Does this sound familiar?

        In order to treat this problem, Doctor Suzanne Levine, a top New York podiatrist, developed the ‘Loub Job’. This procedure utilises both Botox® and Dermal Fillers to keep you comfortable and able to dance all night long! Its name is a reference to Christian Louboutins, some of the most sought-after shoes on the market.

        Botox® is injected into four areas of the foot, which prevents the feet from sweating and expanding, things that often make shoes feel uncomfortable. Following this, filler is injected into the balls of the feet. This creates a cushioning effect, stopping you from experiencing pain in this sensitive area."
      />

      <CarouselCard
        className={styles.card}
        href="/services/lip-filler"
        src="/lipFiller.png"
        alt="Lip Filler"
        title="Lip Filler"
        desc="Despite having been around for many years, Lip Fillers have recently enjoyed quite a surge in popularity. That perfect pout is something that we all want, and Kylie Jenner’s beautiful work has helped to bring this safe, quick and effective treatment to mainstream attention.

            Yet, for some of our clients it’s not just about plumping, this procedure is also the ideal way to correct asymmetry.

            The filler that we use contains hyaluronic acid (HA) – a substance that is naturally produced by the body. Many of us have had thinner lips throughout our whole lives, whilst others find their lips becoming thinner over time. This is because our supplies of HA decrease as we age. All of the above makes hyaluronic acid fillers fantastic options for plump, natural-looking lips.

            This treatment is semi-permanent, and the length of time that results are maintained varies from person to person. You can expect your enhanced lips to last for at least six months, but this can extend as far as a year. You can always pop back in for a top-up when you’re ready!"
      />

      <CarouselCard
        className={styles.card}
        href="/services/facial-contouring"
        src="/kimK.png"
        alt="Facial Contouring"
        title="Facial Contouring (Kim K Package)"
        desc="One of the most popular treatments here at KB Aesthetics and Face Contour is our Kim K (Or Kimmy K) package.This treatment focuses on three areas of the face: the jawline, chin and cheeks.

        With filler, we can create a more chiselled appearance as well as highlight and emphasise your cheekbones and jawline.

        We use between 3 and 6ml of dermal filler. The amount used will depend on your bone structure, age, skin type and personal preference. All our treatments are tailored to suit our clients perfectly, ensuring beautiful, effective results, whilst helping to maintain a natural appearance.

        If you’ve always wanted the Kim K look (who wouldn’t!?) but you are not a makeup magician, this is the perfect option for you. Even if you are a makeup queen and would just like to dramatically reduce the time that you have to spend contouring in the mirror, the Kim K package has your name all over it."
      />

      <CarouselCard
        className={styles.card}
        href="/services/hyaluronidase-filler-dissolver"
        src="/hyalFiller.png"
        alt="Hyaluronidase Filler Dissolver"
        title="Hyaluronidase Filler Dissolver"
        desc="Hyaluronidase is a substance that is used to dissolve hyaluronic acid fillers. There are a number of reasons why an individual may choose to undergo this procedure:

        Overfilling – Here at KB Face Contour Aesthetics, we are incredibly proud of the subtle, natural results that we produce. Unfortunately, not all clinics are the same! Occasionally, overfilling can be a problem, and this occurs when too much filler is injected into certain parts of the face. This results in an unnatural, unflattering look.

        Lumps and Bumps – It is important to get a properly qualified and experienced practitioner to administer your fillers. Without this, you may experience lumps and bumps. These feel unusual and may be extremely visible to the eye.

        Product Migration – This describes what happens when the filler moves from the location in which it was intended to settle. Again, this can generally be avoided by ensuring that you opt for a well-accredited practitioner.

        General Aesthetic – Sometimes, everything goes right, yet you’re still just not happy with your final look.

        Whatever the reason for choosing to dissolve your filler, hyaluronidase is a simple and effective solution."
      />

      <CarouselCard
        className={styles.card}
        href="/services/anti-wrinkle-facial"
        src="/antiWrinkle.png"
        alt="Facial Anti-Wrinkle Treatments"
        title="Facial Anti-Wrinkle Treatments"
        desc="Botulinum toxin, often referred to as Botox®, is the perfect way to treat fine lines and wrinkles. This protein works by relaxing the facial muscles, resulting in smooth, youthful-looking skin!

        The procedure involves a number of small injections into multiple areas of the face, Where these injections are placed will depend on your skin, and the areas that you feel most self-conscious about.

        Before the treatment, you will have a consultation with one of our qualified practitioners, who will examine your skin and discuss your goals. This allows them to tailor the treatment to suit you. We do not believe in a one-size-fits-all approach – we get to know all of our clients so that we can create bespoke solutions specifically for them."
      />

<CarouselCard
        className={styles.card}
        href="/services/chin-filler"
        src="/chinFiller.png"
        alt="Chin Filler"
        title="Chin FIller"
        desc="Chin Fillers are used to improve the definition of the chin and make this area appear more proportionate to the rest of the face. They simultaneously improve the appearance of jowls, and reduce fine lines and wrinkles.

        We can use Chin Fillers to define a weak chin, improve facial symmetry and create a more angular, sculpted jaw – all in one easy, minimally invasive treatment!

        This procedure requires no downtime, meaning that you can carry on with your day-to-day life as usual immediately after treatment. However, there may be some mild bruising and/or swelling.

        Book in for a consultation with us today to achieve your perfect profile!"
      />

<CarouselCard
        className={styles.card}
        href="/services/bum-filler"
        src="/bumFiller.png"
        alt="Bum Filler"
        title="Bum Filler"
        desc="There’s no debating it, bums are big right now – and we don’t just mean in terms of Insta popularity, we mean literally!

        Instagram is full of gorgeous girls showing off their perfect peachy butts alongside #squats… BUT, for a lot of these Insta models, the story doesn’t end with just spending hours in the gym… they have also had a little helping hand from fillers.

        Fillers are a safe, effective way to alter the shape and size of your bum, leaving you feeling your best self, and filling out your jeans like a Kardashian."
      />

<CarouselCard
        className={styles.card}
        href="/services/b12-injections"
        src="/b12.png"
        alt="B12 Injections"
        title="B12 Injections"
        desc="Do you frequently find yourself lethargic, even after a good night’s sleep? Do you often feel as though you do not have the energy to do anything strenuous, or as though you need a nap? If so, B12 injections may be able to help!

        B12 is a vitamin that is needed to create red blood cells. These cells carry oxygen all around your body. Without properly performing red blood cells, your muscles and organs will not be getting enough oxygen. This means that you will not be functioning properly.

        There are a number of reasons why an individual may be deficient in vitamin B12. These include specific dietary restrictions, certain medications, gastrointestinal disorders and even just being over the age of 50.

        A B12 injection is the perfect way to correct this deficiency. They are quick, easy and effective!"
      />

<CarouselCard
        className={styles.card}
        href="/services/aqualyx"
        src="/aqualyx.png"
        alt="Aqualyx®"
        title="Aqualyx®"
        desc="Aqualyx® is a revolutionary injectable treatment that involves the insertion of a solution into localised areas of hard-to-lose fat often found on the stomach, thighs, chin or hips.

        This liquifies the fat cells, which the body then naturally eliminates through the lymphatic system.

        It is the ideal alternative to undergoing liposuction, giving stunning results with very little downtime.

        The treatment is delivered by highly qualified and experienced professionals only, meaning you can relax in the knowledge that you are in safe hands."
      />

<CarouselCard
        className={styles.card}
        href="/services/non-surgical-rhinoplasty"
        src="/rhino.png"
        alt="Non-Surgical Rhinoplasty"
        title="Non-Surgical Rhinoplasty"
        desc="Non-Surgical Rhinoplasty sounds a lot more complicated than it is. It’s actually the easiest and most non-invasive way to alter the shape of your nose. People tend to assume that surgical rhinoplasty (or a nose job) is the only option available to them but this simply isn’t true.

        Having a bumpy nose, or one with a flat bridge, can leave you feeling deflated. After all, your nose is a prominent feature of your face and when you’re unhappy with it, you can end up feeling displeased with your entire appearance. With a Non-Surgical Rhinoplasty, you can alter your nose without going under the knife, leaving you happier and more confident.

        This procedure is performed with hyaluronic acid-based dermal fillers. As hyaluronic acid is a naturally occuring substance in the body, this means that it is broken down over time, making the results of this procedure temporary and only lasting for up to 12 months.

        Non-Surgical Rhinoplasty can be used to correct any issues you have in the short term, which can be useful if you’re deciding on whether or not you would like to undergo surgical rhinoplasty in the future."
      />

<CarouselCard
        className={styles.card}
        href="/services/cheek-fillers"
        src="/cheekFiller.png"
        alt="Cheek Fillers"
        title="Cheek Fillers"
        desc="The cheeks aren’t typically seen as a youthful part of your appearance, unless yours have been affected by the natural process of ageing. Then it’s a very different story!

        As many people age, they find that, over time, their cheeks lose the volume they once had, and begin to look sunken and hollow. This seemingly small change can have a detrimental impact on a person’s self-esteem.

        As soon as we hit our mid-twenties, our body starts to produce 1% less collagen per year, meaning the skin slowly loses its elasticity before the cheeks begin to droop and wrinkles start to appear. Even the highest cheekbones and fullest faces will be affected by these changes too.

        However, there’s no need to mourn your former face just yet. Cheek Fillers can be used to restore lost volume and smooth the fine lines and wrinkles that develop on this part of the face. Through the use of hyaluronic acid, Cheek Fillers make the skin look plumper and more full of volume, hydrating them from within to provide long-lasting results."
      />

    </section>
    
    </section>
  )
}
