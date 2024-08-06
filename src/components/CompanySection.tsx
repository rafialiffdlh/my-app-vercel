import Image from "next/image";
import React from "react";

const CompanySection: React.FC = () => {
  return (
    <div className="bg-zinc-50 mt-auto max-w-screen-xl m-auto">
      <p className="py-4 text-lg font-medium text-center opacity-40">
        Partners
      </p>
      <div className="container flex flex-wrap items-center justify-between">
        <Image
          src="/image/gg.png"
          width={128}
          height={128}
          alt="google"
          className="opacity-40"
        />
        <Image
          src="/image/ms.png"
          width={128}
          height={128}
          alt="Microsoft"
          className="opacity-40"
        />
        <Image
          src="/image/meta.png"
          width={128}
          height={128}
          alt="Meta Logo"
          className="opacity-40"
        />
        <Image
          src="/image/amazon-pay.png"
          width={128}
          height={128}
          alt="Amazon Logo"
          className="opacity-40"
        />
        <Image
          src="/image/walmart.png"
          width={128}
          height={128}
          alt="Walmart Logo"
          className="opacity-40"
        />
      </div>
    </div>
  );
};

export default CompanySection;
