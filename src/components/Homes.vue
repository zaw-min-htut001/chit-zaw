<template>
  <div>
     <!-- nav -->
    <!-- -------------------------------------------------NAVİGATİON-----------------------------------------------------      -->

    <a @click="openNav" class="nav-icon"><span></span>
        <span></span>
        <span></span></a>
    <!-- -------------------------------------------------FULL NAVİGATİON----------------------------------------------------- -->
    <div :class="['full-nav', { open: isNavOpen }]">
        <div class="logo"><a href="">
                <h1 class="logo-title">Happy Anniversary</h1>
            </a></div>

            <nav class="nav2">
        <ul class="closed">
          <li><a href="location.reload()" @click.prevent="navigateTo('#home')"><span></span>Home</a></li>
          <li><a href="#date" @click.prevent="navigateTo('#date')"><span></span>OurDay</a></li>
          <li><a href="#story" @click.prevent="navigateTo('#story')"><span></span>OurStory</a></li>
          <li><a href="#myGirl" @click.prevent="navigateTo('#myGirl')"><span></span>OurGallery</a></li>
        </ul>
      </nav>
        <ul class="social-icons list-inline">
            <p>Developed by Zaw Min Htut<br />(Web developer)</p>
        </ul>

        <div class="corner-circle">
        <a href="javascript:void(0);" class="nav-close" @click="closeNav"><span></span><span></span></a>
      </div>
    </div>
    <!-- -------------------------------------------------END FULL NAVİGATİON----------------------------------------------------- -->
    <div class="bg_heart">
        <section :class="['#home' === activeSection ? 'active' : 'hidden']" class="home-container align-item-center z-indexs active">
            <div class="container">
                <div class="head-container row">
                    <div class="head-section">
                        <p>Zaw Min Htut</p>
                        <span class="">And</span>
                        <p>Chit Kabyar Thant Zaw</p>
                    </div>
                </div>

                <!-- photo section -->
                <div class="image-slider-container row">
                    <div class="swiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="slide-con">
                                  <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-con">
                                  <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-con">
                                  <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-con">
                                  <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-con">
                                  <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-con">
                                  <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="slide-con">
                                    <img src="/src/assets/image/img1.jpeg" alt="">
                                    <div class="slide-details">
                                        <div class="movie-info">
                                            <h2 class="movie-name" title="">
                                                Happy Anniversary
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- photo section End ?!!-->

                <!-- Special Anni Day -->
                <div class="anni-container ">
                    <div class="anni-section z-indexs row">
                        <p>
                            <span>&#x2665</span> Candlelight, laughter, and whispered promises painted our one-year
                            anniversary a masterpiece of love. <span>&#x2665</span>
                        </p>
                    </div>
                    <div class="anni-date-section z-indexs row">
                        <p><span>&#9825</span> Save The Date <span>&#9825</span> </p><br />
                        <p class="anni-date calligraffitti">7 August , 2023</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div class="bg_heart">
        <section :class="['#date' === activeSection ? 'active' : 'hidden']" class="anniDay-container align-item-center z-indexs ">
            <div class="container">
                <div class="typing">
                    <p>Chit Kabyar & Zaw Min</p>
                </div>
                <div class="layout">
                    <div class="col col-complementary" role="complementary">
                        <span>Together Since</span><br />
                        <span class="anniDate calligraffitti">7<sup>th</sup> Aug , 2023</span>
                        <div class="type-day">
                            <span class="iloveu calligraffitti">Happy Anniversary!</span><br />
                            <span id="multipleStrings"></span><br>
                            <span>We have been together</span><br />
                            <span id="demo"></span>
                            <div class="countdown">
                                <div class="time">
                                    <span class="years"></span>
                                    <div class="smalltext">Years</div>
                                </div>
                                <div class="time">
                                    <span class="days"></span>
                                    <div class="smalltext">Days</div>
                                </div>
                                <div class="time">
                                    <span class="hours"></span>
                                    <div class="smalltext">Hours</div>
                                </div>
                                <div class="time">
                                    <span class="minutes"></span>
                                    <div class="smalltext">Minutes</div>
                                </div>
                                <div class="time">
                                    <span class="seconds"></span>
                                    <div class="smalltext">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-main">
                        <img src="/src/assets/image/img3.jpeg" style="--c: #668284;--b:1px;--s: 18px" alt="an old car">
                    </div>
                </div>
            </div>
        </section>
    </div>

    <div class="bg_heart">
        <section   :class="['#story' === activeSection ? 'active' : 'hidden']"  class="z-indexs story-container align-item-center">
            <div class="container">
                <div class="story-header">
                    <div class="text">
                        <span style="--i:1">O</span>
                        <span style="--i:2">u</span>
                        <span style="--i:3">r</span>
                        <span style="--i:4">&#9825</span>
                        <span style="--i:5">S</span>
                        <span style="--i:6">t</span>
                        <span style="--i:7">o</span>
                        <span style="--i:8">r</span>
                        <span style="--i:9">y</span>
                    </div>
                </div>
                <div class="content">
                    <div class="gallery">
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption>
                                <strong>အချစ်</strong><cite>ဌက်လေးနှစ်ကောင်ဟာဖူးစာရေးနတ်လေးရဲ့အစီအမံအရချစ်ကြိုးသွယ်ခဲ့ကြတယ်ဘယ်လောက်ချစ်ဖို့ကောင်းတဲ့စုံတွဲလေးဆိုတာလူတိုင်းကချစ်ခင်ပြီးလိုက်ဖက်လိုက်တာပြောရတဲ့အထိဘဲ🩵
                                </cite>
                            </figcaption>
                        </figure>
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption><strong>အချစ်</strong><cite>ပင်လေးတွေစပျိုးခဲ့တာ 2023
                                    သြဂုတ်လ၇ရက်နေ့ဖြစ်တယ်ထိုနေ့ကအချစ်ပင်လေးစတင်မွေးဖွားတဲ့နေ့လေးပေါ့🩵
                                </cite></figcaption>
                        </figure>
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption><strong>ချစ်သူ</strong><cite>နဲ့ ရှိနေတဲ့အချိန်တိုင်းက အပျော်ဆုံး
                                    နဲ့အလှပဆုံးနေ့ရက်တွေပေါ့ Dating တိုင်းမှာ ကိုကိုက Good kisser ခ်ခ် ငယ်က Kiss enjoyer
                                    🤭🩵

                                </cite></figcaption>
                        </figure>
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption><strong>အဂ်ါသား</strong><cite>လေးရဲ့ love Language
                                    ကစိတ်ကောက်ပြီးအချော့ခံချင်တာဘဲ😝
                                    တနလာ်သမီးရဲ့ love language ကတော့ရစ်တာ😝 ကောက်စိန်နဲ့ ရစ်စိန် 👩‍❤️‍💋‍👨
                                </cite></figcaption>
                        </figure>
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption>
                                <strong>Capricorn</strong><cite>ကိုကိုကလက်တွေ့ဆန်ပြီးတခုခုဆိုအမြဲစဉ်းစားဆုံးဖြတ်နိုင်ပြီးအလုပ်တစ်ခုခုကိုပလန်တွေနဲ့အစီစဉ်တကျလုပ်တတ်တယ်စကားနည်းပြီးလက်တွေ့အကောင်ထည်ဖော်တတ်တဲ့လူမျိုး
                                    (ဒီအချက်တွေကို လေးစားနေရတာ)💙

                                </cite>
                            </figcaption>
                        </figure>
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption><strong>Cancer</strong><cite>ဂဏာန်းမလေးကစိတ်ကူးယာဉ်ဆန်ပြီး တခုခုဆို emotion
                                    များတတ်တယ် စိတ်လိုလက်ရမဆုံးဖြတ်ဘဲလုပ်တတ်တယ် (ဒီအချက်တွေကို Capricorn ကိုကိုက
                                    နားလည်မှုပေးပြီး အမြဲထိန်းကျောင်းပေးတယ်)💙
                                </cite></figcaption>
                        </figure>
                        <figure class="imageRoll">
                            <i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i><i>
                                                                                                                                                                                                                                                                        </i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i></i>
                            <figcaption>
                                <strong>ချစ်သူ</strong><cite>ဘဝကနေလက်ထပ်ပြီးဘဝတခုထူထောင်ကြဖို့နှစ်ယောက်လုံးရဲ့အိမ်မက်တွေ🍀🩵
                                    အကောင်ထည်စဖော်နေကြပြီတစ်ယောက်အတွက်တစ်ယောက်ကအားဆေးတစ်ခွက်💊🩵🩵🤗
                                </cite>
                            </figcaption>
                        </figure>
                    </div>

                </div>
            </div>
        </section>
    </div>

    <div class="bg_heart">
        <section  :class="['#myGirl' === activeSection ? 'active' : 'hidden']"  class="z-indexs myGirl-container align-item-center">
            <div class="container">
                <div class="girl">
                    <h3>Happy Anniversary</h3>
                    <h2>Baby ,Honey</h2>
                    <p>I Love You, More than I can say</p>
                </div>
                <div class="slide">
                    <div class="marquee">
                        <div class="marquee__group">
                            <img src='/src/assets/image/img1.jpeg' alt=''>
                            <img src='/src/assets/image/img1.jpeg' alt=''>
                            <img src='/src/assets/image/img1.jpeg' alt=''>
                            <img src='./image/img4.jpeg' alt=''>
                            <img src='./image/img_11.jpeg' alt=''>
                        </div>

                        <div aria-hidden="true" class="marquee__group">
                            <img src='./image/img1.jpeg' alt=''>
                            <img src='./image/img3.jpeg' alt=''>
                            <img src='./image/img5.jpeg' alt=''>
                            <img src='/src/assets/image/img1.jpeg' alt=''>
                            <img src='./image/img_5.jpeg' alt=''>
                        </div>
                    </div>

                    <div class="marquee marquee--reverse">
                        <div class="marquee__group">
                            <img src='./image/img5.jpeg' alt=''>
                            <img src='./image/img1.jpeg' alt=''>
                            <img src='./image/img2.jpg' alt=''>
                            <img src='./image/img3.jpeg' alt=''>
                            <img src='./image/img4.jpeg' alt=''>
                        </div>

                        <div aria-hidden="true" class="marquee__group">
                            <img src='./image/img_11.jpeg' alt=''>
                            <img src='/src/assets/image/img1.jpeg' alt=''>
                            <img src='./image/img_13.jpg' alt=''>
                            <img src='/src/assets/image/img1.jpeg' alt=''>
                            <img src='./image/img_5.jpeg' alt=''>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
import TypeIt from 'typeit';

export default {
  data() {
    return {
      isNavOpen: false,
      activeSection: '#home',
    };
  },
  methods : {
    openNav() {
      this.isNavOpen = true;
    },
    closeNav() {
      this.isNavOpen = false;
    },
    navigateTo(sectionId) {
      this.activeSection = sectionId;
      this.closeNav();
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    new Swiper(".swiper", {
      loop: true,
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          centeredSlides: false,
          coverflowEffect: {
            depth: 0,
            rotate: 0,
            stretch: -10,
          },
        },
      },
      autoplay: {
        delay: 3000,
      },
      coverflowEffect: {
        depth: 80,
        rotate: 50,
        stretch: 20,
      },
    });
    new TypeIt('#multipleStrings', {
    strings: ['You are my everything', "I can't imagine my life", 'without you!'],
    speed: 80,
    deleteSpeed: 30,
    breakLines: false,
    waitUntilVisible: true,
    loop: true,
    nextStringDelay: 2000,
    lifeLike: true,
    startDelay: null
    }).go();
  },
};
</script>
