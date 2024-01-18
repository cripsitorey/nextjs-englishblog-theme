import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <link rel="icon" type="image/x-icon" href="https://instagram.fuio35-1.fna.fbcdn.net/v/t51.2885-15/340841519_920198065894393_2789343639113720802_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fuio35-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=iW8LhK9uR4kAX_8a5Cq&edm=AGW0Xe4BAAAA&ccb=7-5&oh=00_AfA6bUmgts4bf5AX8RHeGG0e3UXON_y_Ej5b2voJp8kvgw&oe=65AF509D&_nc_sid=94fea1"></link>
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
