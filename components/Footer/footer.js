import Image from 'next/image';

function Footer() {
  return (
    <footer className='text-white flex flex-wrap flex-column'>
      <div className='footer-inner w-full'>
        <div className='footer-top' style={{'background-image': 'url("images/footer-desktop.png")', 'background-repeat': 'none'}}>
          <div className="container flex columns-4-xl p-2">
            <div className="col">
            <Image src="/images/logo-invert.png" alt="Logo" width={150} height={56} />
            </div>
            <div className="col">
              Thông tin website
              <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/product-listing">Đặt hàng</a></li>
                <li><a href="/blogs">Tin tức</a></li>
                <li><a href="">Tuyển dụng</a></li>
                <li><a href="/">Khuyến mãi</a></li>
              </ul>
            </div>
            <div className="col">
              Điều khoản sử dụng
              <ul>
                <li><a href="/terms">Quy chế website</a></li>
                <li><a href="/policy">Bảo mật thông tin</a></li>
              </ul>
            </div>
            <div className="col">
              Hotline
              <ul>
                <li>Đặt hàng 1800 6936 (07:00-20:30)</li>
                <li>Hỗ trợ 028.71.087.088 (07:00-21:00)</li>
              </ul>
            </div>
            <div className="col">
              Liên hệ
              <ul>
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
  )
}

export default Footer