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
      <a-menu theme="dark" :default-selected-keys="['10']" mode="inline">
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
            หมู่บ้านช้างตากล้าว
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
            สินค้าขึ้นชื่อของหมู่บ้านช้างตากล้าว<a href="Productthree"></a>
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
            บริการที่ใกล้กับหมู่บ้านช้างตากล้าว
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
          <a-breadcrumb-item> หมู่บ้านทอผ้าไหมบ้านท่าสว่าง</a-breadcrumb-item>
          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!-- เปลี่ยนข้อมูลข้างล่าง -->

          <div>
            <br /><br />
            <img
              alt="Vue "
              src="../assets/บ้านท่าสว่าง.jpg"
              style="width: 35%"
            />

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
                    บ้านท่าสว่าง ตั้งอยู่ในอำเภอเมือง จังหวัดสุรินทร์
                    เป็นหมู่บ้านท่องเที่ยวเชิงหัตถกรรมผ้าไหมแห่งเดียวของประเทศ
                    เป็นหมู่บ้านที่มีฝีมือในการทอผ้าไหมโบราณที่เป็นเอกลักษณ์ของจังหวัดสุรินทร์
                    ด้วยเทคนิคการทอผ้ายกทองแบบโบราณผสานกับลวดลายที่วิจิตรงดงาม
                    โดยการทอผ้าแต่ละผืนต้องใช้คนทอเป็นจำนวนมากและใช้เวลาในการทอนานหลายเดือน
                    มีลวดลายที่ละเอียดสวยงามเป็นเอกลักษณ์
                    เนื้อละเอียดนุ่มแน่นชนิดจับต้องได้
                    จนได้รับการคัดเลือกให้เป็นผู้ทอผ้าไหมยกทองโบราณเพื่อมอบให้กับผู้นำเอเปค
                    เมื่อปี พ.ศ.2546
                    จนกลายเป็นแหล่งท่องเที่ยวด้านหัตกรรมที่สำคัญของจังหวัดสุรินทร์
                    ผ้าไหมบ้านท่าสว่าง มีจุดเด่นพิเศษกว่าที่อื่น คือ “ไหมน้อย”
                    ที่ละเอียดนุ่มนวล สาวและทอได้ยากยิ่ง จนเริ่มจะเลือนหายไป
                    แทบไม่มีใครทราบว่าช่างที่นี่ทอไหมน้อยได้จนกระทั่งสมเด็จพระนางเจ้าฯ
                    พระบรมราชินีนาถ ในรัชกาลที่ 9 ทรงมีพระราชปรารภว่า
                    “สมัยก่อนผ้าไหมไทยมีความนุ่ม เนียน แน่น มาก
                    ทำอย่างไรจึงจะได้ผ้าชนิดนั้นคืนกลับมา”
                    เหล่าข้าราชบริพารก็ออกเสาะหา จนได้พบผ้าทอไหมน้อยที่ท่าสว่าง
                    เมื่อทอขึ้นทูลเกล้าฯ ถวายเป็นที่พอพระทัย
                    จึงพระราชทานเงินส่วนพระองค์
                    สร้างโรงทอผ้าตามรูปแบบราชสำนักโบราณขึ้นที่บ้านท่าสว่างแห่งนี้
                    เมื่อเข้ามาภายในหมู่บ้าน จะพบกับร้านขายผ้าไหม
                    เรียงรายกันตามเส้นทางถนนหลายร้าน ทั้งในรูปแบบของผ้าถุง เสื้อ
                    กระเป๋า กางเกง สนนราคาเริ่มที่หลักพันจนถึงหลักหมื่น
                    จากนั้นเข้าไปเยี่ยมชม โรงทอผ้าไหมจันทร์โสมา
                    โรงทอผ้าไหมตามรูปแบบราชสำนักโบราณในบรรยากาศร่มรื่นด้วยต้นไม้น้อยใหญ่
                    ชื่อ“จันทร์โสมา” คือชื่อของแบรนด์ที่ก่อตั้งโดยอาจารย์วีรธรรม
                    ตระกูลเงินไทย
                    ผู้ซึ่งถือกำเนิดในตระกูลช่างทอผ้าที่สืบทอดวิชาการปลูกหม่อน
                    เลี้ยงไหม สาวไหม ย้อมสีธรรมชาติ
                    และทอเป็นผืนผ้ามาหลายชั่วอายุคน
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