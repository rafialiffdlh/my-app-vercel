import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { FC } from "react";

const About: FC = () => {
  return (
    <div>
      <div className="bg-[url('/image/bmwhistory.jpg')] bg-center bg-cover mt-auto max-w-screen-xl m-auto">
        <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left "></h1>
      </div>
      <div className=" mt-auto max-w-screen-xl m-auto">
        <div className="py-4 lg:py-14">
          <h2 className="p-4 text-3xl font-semibold text-center lg:p-20 lg:text-5xl mt-auto max-w-screen-xl m-auto">
            About BMW
          </h2>
        </div>

        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-15 px-16">
          <div className="col-span-1 space-y-8 text-gray-600">
            <p className="text-xl font-medium">
              {`BMW (Bayerische Motoren Werke AG) adalah perusahaan multinasional
              asal Jerman yang terkenal memproduksi kendaraan mewah dan sepeda
              motor. Didirikan pada tahun 1916, BMW awalnya berfokus pada mesin
              pesawat sebelum beralih ke sepeda motor dan mobil. Perusahaan ini
              dikenal dengan inovasi, teknologi canggih, dan kualitas tinggi
              dalam setiap produknya. Slogan BMW, "The Ultimate Driving
              Machine," mencerminkan fokus mereka pada pengalaman berkendara
              yang luar biasa.`}
            </p>
          </div>
          <div className="col-span-1">
            <Image
              src="/image/bmwhistory2.jpg"
              width={350}
              height={350}
              alt=""
              className="mx-auto "
            />
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <div className="grid lg:grid-cols-2 gap-12 py-8">
              <div className="col-span-1 bg-white space-y-3">
                <Image
                  src="/image/bmwhistory3.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto"
                />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">
                    Company history
                  </p>
                  <p className="text-gray-500">
                    {`                    BMW, atau Bayerische Motoren Werke AG, didirikan pada 7
                    Maret 1916. Awalnya, perusahaan ini berfokus pada produksi
                    mesin pesawat dengan nama "Bayerische Flugzeugwerke AG"
                    (BFW), sebelum berganti nama menjadi BMW pada tahun 1917.
                    Setelah Perang Dunia I, BMW mulai memproduksi sepeda motor,
                    dengan model pertama mereka, BMW R32, diluncurkan pada tahun
                    1923. Pada tahun 1928, BMW memasuki industri mobil dengan
                    mengakuisisi Fahrzeugfabrik Eisenach dan mulai memproduksi
                    mobil, salah satunya BMW 3/15. Selama Perang Dunia II, BMW
                    memproduksi mesin pesawat untuk militer Jerman. Setelah
                    perang, fasilitas perusahaan mengalami kerusakan parah, dan
                    mereka dilarang memproduksi mesin pesawat. Pada 1960-an, BMW
                    bangkit kembali dengan peluncuran "Neue Klasse," yang
                    mencakup model seperti BMW 1500 dan 2002, memperkuat
                    reputasi BMW sebagai produsen mobil sporty dan berkualitas.
                    Seiring berjalannya waktu, BMW terus berkembang secara
                    global dan memperkenalkan berbagai model terkenal seperti
                    Seri 3, Seri 5, dan Seri 7. Perusahaan ini juga berfokus
                    pada inovasi, dengan meluncurkan kendaraan listrik dan
                    hibrida seperti BMW i3 dan i8, serta mengembangkan teknologi
                    otonom. Dikenal dengan slogan "The Ultimate Driving
                    Machine," BMW berkomitmen pada kualitas, keunggulan teknik,
                    dan pengalaman berkendara yang menyenangkan. Hingga kini,
                    BMW tetap menjadi pemimpin di industri otomotif global,
                    berbasis di Munich, Jerman.`}
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-white space-y-3">
                <Image
                  src="/image/culture2.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto"
                />

                <div className="space-y-5 p-8">
                  <p className="text-xl font-medium text-amber-600">Culture</p>
                  <p className="text-gray-500">
                    {` Budaya BMW didasarkan pada nilai-nilai inti seperti inovasi,
                    kualitas, dan performa, yang tertanam dalam setiap aspek
                    operasional perusahaan. Sebagai produsen mobil premium, BMW
                    menekankan pada pengalaman berkendara yang luar biasa,
                    dengan slogan "The Ultimate Driving Machine" sebagai
                    cerminan dari komitmen mereka terhadap keunggulan dalam
                    rekayasa dan desain. Budaya BMW berfokus pada inovasi,
                    kualitas, dan performa, dengan komitmen untuk menghadirkan
                    "The Ultimate Driving Machine." Perusahaan ini menekankan
                    teknologi mutakhir, kualitas tanpa kompromi, dan pengalaman
                    berkendara yang premium. BMW juga menghargai lingkungan
                    kerja kolaboratif, keberagaman, dan keberlanjutan, serta
                    memiliki sejarah kuat dalam motorsport. Filosofi mereka
                    adalah memberikan kegembiraan dalam setiap perjalanan dan
                    menjaga tanggung jawab sosial.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <h1 className="text-4xl font-bold tracking-wider text-center">
              TEAM
            </h1>
          </div>
          <div className="grid gap-20 py-8 lg:grid-cols-3">
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/user1.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold">WD</h2>
                <p className="text-sm text-gray-400">Lorem ipsum.</p>
              </div>
            </div>
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/user2.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold">WD</h2>
                <p className="text-sm text-gray-400">Lorem ipsum</p>
              </div>
            </div>
            <div className="border-2 border-gray-500 ">
              <div className="-m-0.5 p-4 text-center transition hover:-translate-y-3 hover:-translate-x-3 aspect-square bg-zinc-100 ">
                <Image
                  src="/image/user3.jpg"
                  width={200}
                  height={200}
                  alt=""
                  className="mx-auto rounded-full "
                />
                <h2 className="py-4 text-2xl font-semibold">WD</h2>
                <p className="text-sm text-gray-400">Lorem ipsum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
