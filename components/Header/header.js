import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

function Header() {
  const router = useRouter();

  return (
    <header className="main-header">
      <div className='container'>
        <div className='topNav text-white flex flex-wrap justify-between h-full items-center'>
          <Link className='logowrap' href='/'>
            <Image src="/images/logo.svg" alt="Logo" width={170} height={14} />
          </Link>

          <Link href='/'>
            <a>Back to home</a>
          </Link>

          <ul className='main-nav inline-flex gap-2'>
            <li>Đặt hàng</li>
            <li>Tin tức</li>
            <li>Cửa hàng</li>
            <li>Khuyến mãi</li>
            <li>Tuyển dụng</li>
          </ul>

          <div className='right-actions flex items-center'>
            <Image src="/images/user-coffee.png" alt="Logo" width={40} height={40} />
            <Image src="/images/cart-coffee.png" alt="Logo" width={70} height={70} />
          </div>
        </div>
      </div>
    
    </header>
  )
}

export default Header