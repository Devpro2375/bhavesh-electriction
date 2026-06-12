import Image from "next/image";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "h-10 w-10" }: LogoMarkProps) {
  return (
    <Image
      src="/bhavesh-electrician-logo.png"
      alt="Bhavesh Electrician logo"
      width={96}
      height={96}
      sizes="48px"
      loading="eager"
      className={className}
    />
  );
}
