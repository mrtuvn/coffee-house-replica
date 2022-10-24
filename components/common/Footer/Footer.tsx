import type { NextComponentType } from 'next'
import Image from 'next/image';
import Link from 'next/link';

const Footer:NextComponentType = () => {
  return (
    <>
    <footer className='text-white flex flex-wrap flex-column'>
      <div className='footer-inner w-full'>
        <div className='footer-top bg-no-repeat' style={{backgroundImage: `url("images/footer-desktop.png")`, backgroundSize: `cover`}}>
          <div className="container grid items-center grid-cols-2 md:grid-cols-6 xl:grid-cols-12 py-8">
            <div className="col | col-span-4 ">
              <img src="/images/logo-invert.png" alt="Logo" className="aspect-[4/3]" width={150} height={56} />
            </div>
            <div className="col col-span-2">
              +Thông tin website
              <ul className="hidden">
                <li className='items-baseline'><Link href="/"><a>Trang chủ</a></Link></li>
                <li className='items-baseline'><Link href="/product-listing"><a>Đặt hàng</a></Link></li>
                <li className='items-baseline'><Link href="/blogs"><a>Tin tức</a></Link></li>
                <li className='items-baseline'><Link href=""><a>Tuyển dụng</a></Link></li>
                <li className='items-baseline'><Link href="/"><a>Khuyến mãi</a></Link></li>
              </ul>
            </div>
            <div className="col col-span-2">
              +Điều khoản sử dụng
              <ul className="hidden">
                <li><Link href="/terms"><a>Quy chế website</a></Link></li>
                <li><Link href="/policy"><a>Bảo mật thông tin</a></Link></li>
              </ul>
            </div>
            <div className="col col-span-2">
              +Hotline
              <ul className="hidden">
                <li>Đặt hàng 1800 6936 (07:00-20:30)</li>
                <li>Hỗ trợ 028.71.087.088 (07:00-21:00)</li>
              </ul>
            </div>
            <div className="col col-span-2">
              <p>+Liên hệ</p>
              <ul className="hidden">
                <li>Head Office 1: 86 - 88 Cao Thang, Ward 4, District 3, Ho Chi Minh, Vietnam. Head Office 2: Floor 3 & 4 The Hub Building - 195/10E Dien Bien Phu, Ward 15, Binh Thanh District, Ho Chi Minh, Vietnam. +842871 078 079 hi@thecoffeehouse.vn</li>
                <li>Head Office 2: Floor 3 & 4 The Hub Building - 195/10E Dien Bien Phu, Ward 15, Binh Thanh District, Ho Chi Minh, Vietnam.</li>
                <li>+842871 078 079</li>
                <li>hi@thecoffeehouse.vn</li>
              </ul>
            </div>

          </div>
        </div>
        <div className='footer-bottom | bg-black p-2'>
          <div className="container flex flex-row items-center justify-between">
            <p>Copyright © 2021 The Coffee House. All rights reserved.</p>
            <Image src="/images/registerfooter.png" alt="Logo" width={150} height={56} />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer