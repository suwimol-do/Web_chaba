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
      <a-menu theme="dark" :default-selected-keys="['7']" mode="inline">
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

      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item> วัดบูรพาราม</a-breadcrumb-item>
          <a-breadcrumb-item></a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <!-- เเก้ไขข้อมูด้านล่าง -->

          <div>
            <br /><br />
            <img
              alt="Vue "
              src="../assets/วัดบรูพาราม.jpg"
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
                    วัดบูรพาราม วัดเก่าแก่กลางเมือง
                    ที่ถือเป็นศูนย์รวมทางจิตใจของชาวสุรินทร์
                    วัดนี้สร้างขึ้นในสมัยกรุงธนบุรี มีอายุประมาณ 200 ปี เท่า ๆ
                    กับอายุของ จ.สุรินทร์ โดย “พระยาสุรินทร์ภักดีศรีณรงค์
                    จางวาง” หรือ (ปุม) เจ้าเมืองสุรินทร์คนแรก
                    ร่วมมือกันสร้างกับชาวบ้าน เมื่อประมาณ พ.ศ. 2300-2330
                    ซึ่งตั้งชื่อในตอนนั้นว่า “วัดบูรพ์” แรกเริ่มเดิมที
                    วัดนี้เป็นวัดมหานิกาย แต่ต่อมาใน ปี พ.ศ. 2476
                    สมเด็จพระมหาวีรวงศ์ (ติสโสอ้วน) ดำรงตำแหน่งเจ้าคณะมณฑล
                    ได้อนุมัติให้วัดบูรพ์เป็นวัดในสังกัดคณะธรรมยุตและได้นิมนต์
                    พระราชวุฒาจารย์ หลวงปู่ดุลย์ อตุโล
                    ซึ่งปฏิบัติธุดงค์กรรมฐานอยู่ ให้มาประจำอยู่ที่วัดบูรพาราม
                    ดำรงตำแหน่งเจ้าอาวาส และร่วมเป็นคณะพระสังฆาธิการ วัดบูรพาราม
                    ได้รับพระกรุณาโปรดเกล้าฯ ให้เป็นพระอารามหลวงชั้นตรี
                    ตั้งแต่วันที่ 1 กุมภาพันธ์ พ.ศ. 2520
                    และเป็นวัดสำคัญของจังหวัดสุรินทร์
                    เนื่องมากจากเป็นที่ประดิษฐาน หลวงพ่อพระชีว์ (หลวงพ่อประจี)
                    พระพุทธรูปศักดิ์สิทธิ์คู่บ้านคู่เมืองของสุรินทร์
                    เป็นพระพุทธรูปปางมารวิชัย ไม่ปรากฏหลักฐานว่าสร้างขึ้นเมื่อใด
                    แต่สันนิษฐานว่าสร้างขึ้นมาพร้อมกับวัดบูรพาราม
                    ประดิษฐานอยู่ในมณฑปจัตุรมุข
                    นับเป็นปูชนียวัตถุที่ชาวสุรินทร์เคารพบูชาอย่างมาก นอกจากนี้
                    ยังเป็นวัดที่พระราชวุฒาจารย์ (หลวงปู่ดุลย์ อตุโล)
                    พระเถระสายพระกัมมัฏฐานด้านการภาวนาจิต
                    ที่มีชื่อเสียงในหมู่ผู้ปฏิบัติธรรม สายพระกัมมัฏฐาน
                    ท่านได้เคยจำพรรษาอยู่ ณ วัดบูรพาราม ตั้งแต่ พ.ศ. 2477
                    จนกระทั่งมรณภาพ พ.ศ. 2526 ภายในวัดมีพิพิธภัณฑ์หลวงปู่ดุลย์
                    ซึ่งเป็นสถานที่ประดิษฐานรูปเหมือนหลวงปู่ดุลย์ อตุโล
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