<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <!-- Carousel -->
      <a-carousel autoplay>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/1.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/2.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/3.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/4.png" /></h3>
        </div>
      </a-carousel>
      <!-- | -->
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['9']" mode="inline">
        <a-menu-item key="1">
          <a-icon type="home" />
          <span>Home</span>
          <a href="home">Home</a>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="smile" />
          <span>About</span>
          <a href="about">About</a>
        </a-menu-item>
        <!-- Location -->
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>Location</span></span>
          <a-menu-item key="3">
            ปราสาทศรีขมรภูมิ
            <a href="locationone"></a>
          </a-menu-item>
          <a-menu-item key="4">
            วนอุทยานแห่งชาติพนมสวาย<a href="locationtwo"></a>
          </a-menu-item>
          <a-menu-item key="5">
            หมู่บ้านช้างตากลาง
            <a href="locationthree"></a
          ></a-menu-item>
          <a-menu-item key="6">
            ปราสาทหินบ้านพลวง
            <a href="locationfour"></a
          ></a-menu-item>
          <a-menu-item key="7">
            วัดบูรพาราม
            <a href="locationfive"></a
          ></a-menu-item>
          <a-menu-item key="8">
            อ่างเก็บน้ำห้วยเสนง <a href="locationsix"></a
          ></a-menu-item>
          <a-menu-item key="9">
            อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="locationseven"></a>
          </a-menu-item>
          <a-menu-item key="10">
            หมู่บ้านทอผ้าไหมบ้านท่าสว่าง <a href="locationeight"></a
          ></a-menu-item>
          <a-menu-item key="11">
            ศาลหลักเมืองสุรินทร์ <a href="locationnine"></a
          ></a-menu-item>
          <a-menu-item key="12">
            ตลาดช่องจอม <a href="locationten"></a
          ></a-menu-item>
        </a-sub-menu>

        <!-- Product -->
        <a-sub-menu key="sub2">
          <span slot="title"
            ><a-icon type="shopping" /><span>Product</span></span
          >
          <a-menu-item key="13">
            สินค้าขึ้นชื่อของปราสาทศรีขมรภูมิ<a href="Productone"></a>
          </a-menu-item>
          <a-menu-item key="14">
            สินค้าขึ้นชื่อของวนอุทยานแห่งชาติพนมสวาย<a href="Producttwo"></a>
          </a-menu-item>
          <a-menu-item key="15">
            สินค้าขึ้นชื่อของหมู่บ้านช้างตากลาง<a href="Productthree"></a>
          </a-menu-item>
          <a-menu-item key="16">
            สินค้าขึ้นชื่อของปราสาทหินบ้านพลวง<a href="Productfour"></a>
          </a-menu-item>
          <a-menu-item key="17">
            สินค้าขึ้นชื่อของวัดบูรพาราม<a href="Productfive"></a>
          </a-menu-item>
          <a-menu-item key="18">
            สินค้าขึ้นชื่อของอ่างเก็บน้ำห้วยเสนง <a href="Productsix"></a>
          </a-menu-item>
          <a-menu-item key="19">
            สินค้าขึ้นชื่อของอนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง<a
              href="Productseven"
            ></a>
          </a-menu-item>
          <a-menu-item key="20">
            สินค้าขึ้นชื่อของหมู่บ้านทอผ้าไหมบ้านท่าสว่าง<a
              href="Producteight"
            ></a>
          </a-menu-item>
          <a-menu-item key="21">
            สินค้าขึ้นชื่อของศาลหลักเมืองสุรินทร์<a href="Productnine"></a>
          </a-menu-item>
          <a-menu-item key="22">
            สินค้าขึ้นชื่อของตลาดช่องจอม<a href="Productten"></a>
          </a-menu-item>
        </a-sub-menu>
        <!-- | -->

        <!-- Service -->
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="shop" /><span>Service</span></span>
          <a-menu-item key="23">
            บริการที่ใกล้กับปราสาทศรีขมรภูมิ <a href="serviceone"></a>
          </a-menu-item>
          <a-menu-item key="24">
            บริการที่ใกล้กับวนอุทยานแห่งชาติพนมสวาย
            <a href="servicetwo"></a>
          </a-menu-item>
          <a-menu-item key="25">
            บริการที่ใกล้กับหมู่บ้านช้างตากลาง
            <a href="servicethree"></a>
          </a-menu-item>
          <a-menu-item key="26">
            บริการที่ใกล้กับปราสาทหินบ้านพลวง
            <a href="servicefour"></a>
          </a-menu-item>
          <a-menu-item key="27">
            บริการที่ใกล้กับวัดบูรพาราม
            <a href="servicefive"></a>
          </a-menu-item>
          <a-menu-item key="28">
            บริการที่ใกล้กับอ่างเก็บน้ำห้วยเสนง
            <a href="servicesix"></a>
          </a-menu-item>
          <a-menu-item key="29">
            บริการที่ใกล้กับอนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง
            <a href="serviceseven"></a> </a-menu-item
          ><a-menu-item key="30">
            บริการที่ใกล้กับหมู่บ้านทอผ้าไหมบ้านท่าสว่าง
            <a href="serviceeight"></a> </a-menu-item
          ><a-menu-item key="31">
            บริการที่ใกล้กับศาลหลักเมืองสุรินทร์
            <a href="servicenine"></a> </a-menu-item
          ><a-menu-item key="32">
            บริการที่ใกล้กับตลาดช่องจอม
            <a href="serviceten"></a>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- | -->
    <!-- Carousel -->
    <a-layout>
      <a-carousel autoplay>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/11.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/22.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/33.png" /></h3>
        </div>
        <div>
          <h3><img slot="cover" alt="example" src="../assets/44.png" /></h3>
        </div>
      </a-carousel>
      <!-- | -->
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item
            >อนุสาวรีย์พระยาสุรินทรภักดีศรีณรงค์จางวาง</a-breadcrumb-item
          >
          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!-- เปลี่ยนข้อมูลข้างล่าง -->

          <div>
            <br /><br />
            <img alt="Vue " src="../assets/surin.jpg" style="width: 35%" />

            <a-descriptions
              title="ข้อมูลสถานที่"
              bordered
              :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
            >
              <a-descriptions-item label="ค่าเข้า">
                <h1>
                  ชาวไทยคนละ 10 บาท<br />
                  ชาวต่างประเทศคนละ 30 บาท
                </h1>
              </a-descriptions-item>

              <a-descriptions-item label="เปิดให้เข้าชม">
                <h1>เวลา 07.30-18.00 น.</h1>
              </a-descriptions-item>

              <br />
              <a-descriptions-item label="ลักษณะ">
                <blockquote style="margin: 25px 50px 75px 100px">
                  <p style="text-indent: 50px; font-size: 16px" width="480">
                    พระยาสุรินทร์ภักดี ฯ (ปุม) เจ้าเมืองประทายสมันต์
                    (เมืองสุรินทร์) ท่านแรก
                    เป็นผู้วางรากฐานการก่อตั้งเมืองสุรินทร์ ใน สมัยอยุธยา
                    มีชาวไทยพื้นเมืองกลุ่มหนึ่งที่เรียกตนเองว่าส่วยหรือกวยกรือกูย
                    เป็นกลุ่มชนที่มีความรู้ความสามารถในการจับช้างป่ามาเลี้ยงไว้ใช้งาน
                    ได้แบ่งกลุ่มมาตั้งถิ่นฐานอยู่หกพวกด้วยกัน
                    ในเขตจังหวัดสุรินทร์ ต่อมาในปี พ.ศ.๒๓๐๒
                    มีช้างเผือกแตกโขงออกจากเมืองหลวงหนีเข้าป่า
                    สมเด็จพระบรมราชาธิราชที่ ๓ (สมเด็จ พระที่นั่งสุริยามรินทร์)
                    แห่งกรุงศรีอยุธยาได้โปรดเกล้า ฯ ให้ติดตามช้างเผือก
                    เชียงปุมซึ่งเป็นหัวหน้าชาวส่วยที่มาตั้งถิ่นฐานอยู่ที่บ้านเมืองที่ได้ช่วย
                    เหลือในการติดตามช้างเผือก เชียงปุมจึงได้โปรดเกล้า ฯ
                    ให้เป็นหลวงสุรินทรภักดี
                    ให้ปกครองหมู่บ้านเดิมขึ้นตรงต่อเมืองพิมาย ในปี พ.ศ.๒๓๐๖
                    หลวงสุรินทรภักดี (เชียงปุม)
                    ได้ย้ายจากหมู่บ้านเมืองที่ไปอยู่ที่บ้านคูประทายหรือบ้านประทายสมันต์
                    ต่อมาหลวงสุรินทรภักดี (เชียงชุม)
                    ได้เป็นพระสุรินทรภักดีศรีรณรงค์จางวาง
                    และยกบ้านคูประทายขึ้นเป็นเมืองประทายสมันต์ พ.ศ.๒๓๒๔
                    เมืองเขมรเกิดจลาจล
                    เมืองประทายสมันต์ได้สมทบกับกองทัพหลวงไปช่วยปราบปราม
                    จึงมีชาวเขมรอพยพครอบครัวมาตั้งอยู่ในเขตเมืองประทายสมันต์เป็นจำนวนมาก
                    พ.ศ.๒๓๒๙ พระบาทสมเด็จพระพุทธยอดฟ้าจุฬาโลกมหาราช ได้โปรดเกล้า
                    ฯ ให้เปลี่ยนชื่อเมืองประทายสมันต์เป็นเมืองสุรินทร์
                    ตามสร้อยบรรดาศักดิ์ของเจ้าเมือง พ.ศ.๒๓๓๗ พระยาสุรินทรภักดี ฯ
                    (เชียงปุม) เจ้าเมืองสุรินทร์ถึงแก่กรรม
                    สิ่งที่น่าสนใจศึกษาและเรียนรู้สร้างขึ้นเมื่อ พ.ศ. 2527
                    เพื่อเป็นที่ระลึกถึงผู้สร้างเมืองคนแรก ซึ่งเป็น
                    บุคคลสำคัญอย่างยิ่งในประวัติศาสตร์ของเมืองสุรินทร์
                    อนุสาวรีย์นี้ตั้งอยู่ที่ทางเข้าเมืองสุรินทร์0ทางด้านใต้ตรงหลักกิโลเมตรที่
                    0 ถนน สุรินทร์-ปราสาท
                    เป็นบริเวณที่เคยเป็นกำแพงเมืองชั้นในของตัวเมืองสุรินทร์
                    อนุสาวรีย์เป็นรูปหล่อทองเหลืองรมดำ สูง 2.2 เมตร มือ ขวา
                    ถือของ้าว อันเป็นการแสดงถึงความเก่งกล้าสามารถ
                    ของท่านในการบังคับช้างศึกและเป็นเครื่องแสดงว่าสุรินทร์
                    เป็นเมืองช้างมาแต่ดึกดำ บรรพ์รูปปั้นสะพายดาบคู่
                    อยู่บนหลังอันหมายถึงความเป็นนักรบความกล้าหาญ
                    อันเป็นคุณสมบัติที่ตกทอดเป็นมรดกของคนสุรินทร์ใน ปัจจุบัน
                    จังหวัดสุรินทร์ได้ทำพิธีเปิดอนุสาวรีย์แห่งนี้เมื่อวันที่ 13
                    เมษายน 2528
                  </p>
                </blockquote>
              </a-descriptions-item>
            </a-descriptions>
          </div>
        </div>
      </a-layout-content>

      <!-- | -->

      <a-layout-footer style="text-align: center">
        Surin tourism website ©2021 Created by NONG CHABA TEAM
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
/* Carousel */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>