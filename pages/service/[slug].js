/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import NavBar from "/components/common/navBar";
import Category from "/components/common/category";

const ServiceDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <NavBar header />
      <div className="container-fluid py-2 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-1">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="row g-5">
                <div className="mb-5">
                  <img
                    className="img-fluid w-100 rounded mb-5"
                    src="../assets/img/blog-1.jpg"
                    alt="service"
                  />
                  <h1 className="mb-4">
                    Diam dolor est labore duo ipsum clita sed et lorem tempor
                    duo
                  </h1>
                  <p>
                    Sadipscing labore amet rebum est et justo gubergren. Et
                    eirmod ipsum sit diam ut magna lorem. Nonumy vero labore
                    lorem sanctus rebum et lorem magna kasd, stet amet magna
                    accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing
                    et at at sanctus et. Ipsum sit gubergren dolores et,
                    consetetur justo invidunt at et aliquyam ut et vero clita.
                    Diam sea sea no sed dolores diam nonumy, gubergren sit stet
                    no diam kasd vero.
                  </p>
                  <p>
                    Voluptua est takimata stet invidunt sed rebum nonumy stet,
                    clita aliquyam dolores vero stet consetetur elitr takimata
                    rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                    dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                    Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                    aliquyam ipsum justo et, clita lorem sit vero amet amet est
                    dolor elitr, stet et no diam sit. Dolor erat justo dolore
                    sit invidunt.
                  </p>
                  <p>
                    Diam dolor est labore duo invidunt ipsum clita et, sed et
                    lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                    dolores sit kasd diam takimata justo diam lorem sed. Magna
                    amet sed rebum eos. Clita no magna no dolor erat diam tempor
                    rebum consetetur, sanctus labore sed nonumy diam lorem amet
                    eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                    sadipscing gubergren erat. Gubergren at lorem invidunt
                    sadipscing rebum sit amet ut ut, voluptua diam dolores at
                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea
                    eos.
                  </p>
                  <p>
                    Voluptua est takimata stet invidunt sed rebum nonumy stet,
                    clita aliquyam dolores vero stet consetetur elitr takimata
                    rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                    dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                    Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                    aliquyam ipsum justo et, clita lorem sit vero amet amet est
                    dolor elitr, stet et no diam sit. Dolor erat justo dolore
                    sit invidunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <Category name="Services" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
