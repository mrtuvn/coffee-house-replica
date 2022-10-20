import type { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

const Header:NextComponentType = () => {
  const router = useRouter();

  return (
    <>
    <header className="main-header">
      <div className='container'>
        <div className='topNav text-white flex flex-wrap justify-between h-full items-center'>
          <Link className='logowrap' href='/'>
            <Image src="/images/logo.svg" alt="Logo" width={170} height={14} />
          </Link>

          <div className='address-delivery-wrap | rounded-full p-2 flex gap-2 shrink-0' href='/'>
            <Image className='w-8 h-8 rounded-full flex-1' src="/images/Delivery2.png" alt="Delivery Logo" width={40} height={40} />
            <div className='action-link-toggle'>
              <h5>Giao hàng</h5>
              <p>Tại: Nhập địa chỉ giao hàng</p>
            </div>
          </div>

          <ul className='main-nav inline-flex gap-2'>
            <li><Link href='/order'>Đặt hàng</Link></li>
            <li>Tin tức</li>
            <li>Cửa hàng</li>
            <li>Khuyến mãi</li>
            <li>Tuyển dụng</li>
          </ul>

          <div className='right-actions flex items-center'>
            <Image src="/images/user-coffee.png" alt="Logo" width={40} height={40} />
            <Image className='translate-y-1' src="/images/cart-coffee.png" alt="Logo" width={70} height={70} />
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header