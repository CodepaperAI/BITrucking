import Link from 'next/link';
import Image from 'next/image';
import { company } from '@/app/lib/company';

interface LogoProps {
  linked?: boolean;
}

function Logo({ linked = true }: LogoProps) {
  const content = (
    <div className="flex items-center gap-3">
      <Image
        aria-hidden="true"
        src="/bi-assets/images/bi-logo.png"
        alt=""
        width={48}
        height={48}
        className="h-11 w-11 sm:h-12 sm:w-12"
      />
      <div className="space-y-1">
        <p className="text-xl uppercase tracking-[0.08em] text-white sm:text-2xl">BI Truck & Body</p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite-400 sm:text-xs">
          Custom Work Trucks
        </p>
      </div>
    </div>
  );

  if (!linked) {
    return content;
  }

  return (
    <Link aria-label={company.name} className="block" href="/">
      {content}
    </Link>
  );
}

export default Logo;